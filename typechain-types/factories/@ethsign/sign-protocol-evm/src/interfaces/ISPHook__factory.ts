/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ISPHook,
  ISPHookInterface,
} from "../../../../../@ethsign/sign-protocol-evm/src/interfaces/ISPHook";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "attester",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "schemaId",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "attestationId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "didReceiveAttestation",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "attester",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "schemaId",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "attestationId",
        type: "uint64",
      },
      {
        internalType: "contract IERC20",
        name: "resolverFeeERC20Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "resolverFeeERC20Amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "didReceiveAttestation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "attester",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "schemaId",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "attestationId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "didReceiveRevocation",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "attester",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "schemaId",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "attestationId",
        type: "uint64",
      },
      {
        internalType: "contract IERC20",
        name: "resolverFeeERC20Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "resolverFeeERC20Amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "didReceiveRevocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISPHook__factory {
  static readonly abi = _abi;
  static createInterface(): ISPHookInterface {
    return new Interface(_abi) as ISPHookInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ISPHook {
    return new Contract(address, _abi, runner) as unknown as ISPHook;
  }
}
