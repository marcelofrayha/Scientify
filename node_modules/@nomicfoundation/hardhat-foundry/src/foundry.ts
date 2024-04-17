import chalk from "chalk";
import { exec as execCallback, execSync } from "child_process";
import { NomicLabsHardhatPluginError } from "hardhat/internal/core/errors";
import os from "os";
import { promisify } from "util";

const exec = promisify(execCallback);

type Remappings = Record<string, string>;

export class HardhatFoundryError extends NomicLabsHardhatPluginError {
  constructor(message: string, parent?: Error) {
    super("hardhat-foundry", message, parent);
  }
}

class ForgeInstallError extends HardhatFoundryError {
  constructor(dependency: string, parent: Error) {
    super(
      `Couldn't install '${dependency}', please install it manually.

${parent.message}
`,
      parent
    );
  }
}

function runningOnWindows() {
  return os.platform() === "win32";
}

export class FoundryRunner {
  private static _instance: FoundryRunner | undefined;
  private _cachedRemappings: Remappings | undefined;

  private constructor(private _forgeCommand: string) {}

  public static create() {
    if (FoundryRunner._instance !== undefined) {
      return FoundryRunner._instance;
    }

    const potentialForgeCommands = ["forge"];

    if (runningOnWindows()) {
      potentialForgeCommands.push("%USERPROFILE%\\.cargo\\bin\\forge");
    } else {
      potentialForgeCommands.push("~/.foundry/bin/forge");
    }

    console.log(
      "[Issue 449] Potential forge commands:",
      potentialForgeCommands
    );

    for (const potentialForgeCommand of potentialForgeCommands) {
      try {
        execSync(`${potentialForgeCommand} --version`, {
          stdio: "pipe",
        }).toString();
        FoundryRunner._instance = new FoundryRunner(potentialForgeCommand);
        console.log(`[Issue 449] '${potentialForgeCommand}' worked`);
        return FoundryRunner._instance;
      } catch (error: any) {
        console.log(
          `[Issue 449] '${potentialForgeCommand}' didn't work:`,
          error.message,
          `(code: ${error.status}})`
        );
        if (
          error.status === 127 || // unix
          error.toString().includes("is not recognized") === true || // windows (code: 1)
          error.toString().includes("cannot find the path") === true // windows (code: 1)
        ) {
          // command not found, then try the next potential command
          continue;
        } else {
          // command found but execution failed
          throw error;
        }
      }
    }

    console.log("[Issue 449] No command worked");

    throw new HardhatFoundryError(
      `Couldn't find forge binary. Performed lookup: ${JSON.stringify(
        potentialForgeCommands
      )}`
    );
  }

  public getForgeConfig() {
    return JSON.parse(runCmdSync(`${this._forgeCommand} config --json`));
  }

  public async getRemappings() {
    // Return remappings if they were already loaded
    if (this._cachedRemappings !== undefined) {
      return this._cachedRemappings;
    }

    // Get remappings from foundry
    const remappingsTxt = await runCmd(`${this._forgeCommand} remappings`);

    const remappings: Remappings = {};
    const remappingLines = remappingsTxt.split(/\r\n|\r|\n/);
    for (const remappingLine of remappingLines) {
      const fromTo = remappingLine.split("=");
      if (fromTo.length !== 2) {
        continue;
      }

      const [from, to] = fromTo;

      // source names with "node_modules" in it have special treatment in hardhat core, so we skip them
      if (to.includes("node_modules")) {
        continue;
      }

      remappings[from] = to;
    }

    this._cachedRemappings = remappings;
    return remappings;
  }

  public async installDependency(dependency: string) {
    const cmd = `${this._forgeCommand} install --no-commit ${dependency}`;
    console.log(`Running '${chalk.blue(cmd)}'`);

    try {
      await exec(cmd);
    } catch (error: any) {
      throw new ForgeInstallError(dependency, error);
    }
  }
}

function runCmdSync(cmd: string): string {
  try {
    return execSync(cmd, { stdio: "pipe" }).toString();
  } catch (error: any) {
    const pluginError = buildForgeExecutionError(
      error.status,
      error.stderr.toString()
    );

    throw pluginError;
  }
}

async function runCmd(cmd: string): Promise<string> {
  try {
    const { stdout } = await exec(cmd);
    return stdout;
  } catch (error: any) {
    throw buildForgeExecutionError(error.code, error.message);
  }
}

function buildForgeExecutionError(
  exitCode: number | undefined,
  message: string
) {
  switch (exitCode) {
    case 127:
      return new HardhatFoundryError(
        "Couldn't run `forge`. Please check that your foundry installation is correct."
      );
    case 134:
      return new HardhatFoundryError(
        "Running `forge` failed. Please check that your foundry.toml file is correct."
      );
    default:
      return new HardhatFoundryError(
        `Unexpected error while running \`forge\`: ${message}`
      );
  }
}
