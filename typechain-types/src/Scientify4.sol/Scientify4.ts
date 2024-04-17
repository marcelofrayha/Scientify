/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface Scientify4Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "attestResearcherVerification"
      | "balanceOf"
      | "balanceOfBatch"
      | "burn"
      | "burnBatch"
      | "createResearch"
      | "isApprovedForAll"
      | "owner"
      | "paused"
      | "renounceOwnership"
      | "researchById"
      | "researchRequest"
      | "researcherVerificationAttestations"
      | "safeBatchTransferFrom"
      | "safeTransferFrom"
      | "schemaId"
      | "setApprovalForAll"
      | "setSPInstance"
      | "setSchemaID"
      | "spInstance"
      | "supportsInterface"
      | "transferOwnership"
      | "uri"
      | "verifiedResearchers"
      | "verifyResearcher"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ApprovalForAll"
      | "OwnershipTransferred"
      | "Paused"
      | "ResearcherVerificationAttested"
      | "TransferBatch"
      | "TransferSingle"
      | "URI"
      | "Unpaused"
      | "VerificationAttested"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "attestResearcherVerification",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnBatch",
    values: [AddressLike, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createResearch",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "researchById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "researchRequest",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "researcherVerificationAttestations",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "schemaId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setSPInstance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setSchemaID",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "spInstance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "verifiedResearchers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyResearcher",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "attestResearcherVerification",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createResearch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "researchById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "researchRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "researcherVerificationAttestations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "schemaId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSPInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSchemaID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "spInstance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifiedResearchers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyResearcher",
    data: BytesLike
  ): Result;
}

export namespace ApprovalForAllEvent {
  export type InputTuple = [
    account: AddressLike,
    operator: AddressLike,
    approved: boolean
  ];
  export type OutputTuple = [
    account: string,
    operator: string,
    approved: boolean
  ];
  export interface OutputObject {
    account: string;
    operator: string;
    approved: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ResearcherVerificationAttestedEvent {
  export type InputTuple = [
    researcher: AddressLike,
    attestationId: BigNumberish
  ];
  export type OutputTuple = [researcher: string, attestationId: bigint];
  export interface OutputObject {
    researcher: string;
    attestationId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferBatchEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    ids: BigNumberish[],
    values: BigNumberish[]
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    ids: bigint[],
    values: bigint[]
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    ids: bigint[];
    values: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferSingleEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    id: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    id: bigint,
    value: bigint
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    id: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace URIEvent {
  export type InputTuple = [value: string, id: BigNumberish];
  export type OutputTuple = [value: string, id: bigint];
  export interface OutputObject {
    value: string;
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VerificationAttestedEvent {
  export type InputTuple = [
    researcher: AddressLike,
    attestationId: BigNumberish
  ];
  export type OutputTuple = [researcher: string, attestationId: bigint];
  export interface OutputObject {
    researcher: string;
    attestationId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Scientify4 extends BaseContract {
  connect(runner?: ContractRunner | null): Scientify4;
  waitForDeployment(): Promise<this>;

  interface: Scientify4Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  attestResearcherVerification: TypedContractMethod<
    [researcher: AddressLike],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<
    [account: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;

  balanceOfBatch: TypedContractMethod<
    [accounts: AddressLike[], ids: BigNumberish[]],
    [bigint[]],
    "view"
  >;

  burn: TypedContractMethod<
    [account: AddressLike, id: BigNumberish, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  burnBatch: TypedContractMethod<
    [account: AddressLike, ids: BigNumberish[], values: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  createResearch: TypedContractMethod<
    [
      repo: string,
      invest: BigNumberish,
      articlePrice: BigNumberish,
      articlePriceIncreaseRate: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  isApprovedForAll: TypedContractMethod<
    [account: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  paused: TypedContractMethod<[], [boolean], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  researchById: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string,
        string
      ] & {
        id: bigint;
        state: bigint;
        investment: bigint;
        articlePrice: bigint;
        sharePrice: bigint;
        articlePriceIncreaseRate: bigint;
        funding: bigint;
        profit: bigint;
        owner: string;
        documentCID: string;
      }
    ],
    "view"
  >;

  researchRequest: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string,
        string
      ] & {
        id: bigint;
        state: bigint;
        investment: bigint;
        articlePrice: bigint;
        sharePrice: bigint;
        articlePriceIncreaseRate: bigint;
        funding: bigint;
        profit: bigint;
        owner: string;
        documentCID: string;
      }
    ],
    "view"
  >;

  researcherVerificationAttestations: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  safeBatchTransferFrom: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  safeTransferFrom: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  schemaId: TypedContractMethod<[], [bigint], "view">;

  setApprovalForAll: TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;

  setSPInstance: TypedContractMethod<
    [instance: AddressLike],
    [void],
    "nonpayable"
  >;

  setSchemaID: TypedContractMethod<
    [schemaId_: BigNumberish],
    [void],
    "nonpayable"
  >;

  spInstance: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  uri: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  verifiedResearchers: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  verifyResearcher: TypedContractMethod<
    [researcher: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "attestResearcherVerification"
  ): TypedContractMethod<[researcher: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<
    [account: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "balanceOfBatch"
  ): TypedContractMethod<
    [accounts: AddressLike[], ids: BigNumberish[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [account: AddressLike, id: BigNumberish, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnBatch"
  ): TypedContractMethod<
    [account: AddressLike, ids: BigNumberish[], values: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createResearch"
  ): TypedContractMethod<
    [
      repo: string,
      invest: BigNumberish,
      articlePrice: BigNumberish,
      articlePriceIncreaseRate: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isApprovedForAll"
  ): TypedContractMethod<
    [account: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "researchById"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string,
        string
      ] & {
        id: bigint;
        state: bigint;
        investment: bigint;
        articlePrice: bigint;
        sharePrice: bigint;
        articlePriceIncreaseRate: bigint;
        funding: bigint;
        profit: bigint;
        owner: string;
        documentCID: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "researchRequest"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string,
        string
      ] & {
        id: bigint;
        state: bigint;
        investment: bigint;
        articlePrice: bigint;
        sharePrice: bigint;
        articlePriceIncreaseRate: bigint;
        funding: bigint;
        profit: bigint;
        owner: string;
        documentCID: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "researcherVerificationAttestations"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "safeBatchTransferFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeTransferFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "schemaId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setApprovalForAll"
  ): TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSPInstance"
  ): TypedContractMethod<[instance: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSchemaID"
  ): TypedContractMethod<[schemaId_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "spInstance"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "uri"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "verifiedResearchers"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "verifyResearcher"
  ): TypedContractMethod<[researcher: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "ApprovalForAll"
  ): TypedContractEvent<
    ApprovalForAllEvent.InputTuple,
    ApprovalForAllEvent.OutputTuple,
    ApprovalForAllEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "ResearcherVerificationAttested"
  ): TypedContractEvent<
    ResearcherVerificationAttestedEvent.InputTuple,
    ResearcherVerificationAttestedEvent.OutputTuple,
    ResearcherVerificationAttestedEvent.OutputObject
  >;
  getEvent(
    key: "TransferBatch"
  ): TypedContractEvent<
    TransferBatchEvent.InputTuple,
    TransferBatchEvent.OutputTuple,
    TransferBatchEvent.OutputObject
  >;
  getEvent(
    key: "TransferSingle"
  ): TypedContractEvent<
    TransferSingleEvent.InputTuple,
    TransferSingleEvent.OutputTuple,
    TransferSingleEvent.OutputObject
  >;
  getEvent(
    key: "URI"
  ): TypedContractEvent<
    URIEvent.InputTuple,
    URIEvent.OutputTuple,
    URIEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "VerificationAttested"
  ): TypedContractEvent<
    VerificationAttestedEvent.InputTuple,
    VerificationAttestedEvent.OutputTuple,
    VerificationAttestedEvent.OutputObject
  >;

  filters: {
    "ApprovalForAll(address,address,bool)": TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;
    ApprovalForAll: TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "ResearcherVerificationAttested(address,uint64)": TypedContractEvent<
      ResearcherVerificationAttestedEvent.InputTuple,
      ResearcherVerificationAttestedEvent.OutputTuple,
      ResearcherVerificationAttestedEvent.OutputObject
    >;
    ResearcherVerificationAttested: TypedContractEvent<
      ResearcherVerificationAttestedEvent.InputTuple,
      ResearcherVerificationAttestedEvent.OutputTuple,
      ResearcherVerificationAttestedEvent.OutputObject
    >;

    "TransferBatch(address,address,address,uint256[],uint256[])": TypedContractEvent<
      TransferBatchEvent.InputTuple,
      TransferBatchEvent.OutputTuple,
      TransferBatchEvent.OutputObject
    >;
    TransferBatch: TypedContractEvent<
      TransferBatchEvent.InputTuple,
      TransferBatchEvent.OutputTuple,
      TransferBatchEvent.OutputObject
    >;

    "TransferSingle(address,address,address,uint256,uint256)": TypedContractEvent<
      TransferSingleEvent.InputTuple,
      TransferSingleEvent.OutputTuple,
      TransferSingleEvent.OutputObject
    >;
    TransferSingle: TypedContractEvent<
      TransferSingleEvent.InputTuple,
      TransferSingleEvent.OutputTuple,
      TransferSingleEvent.OutputObject
    >;

    "URI(string,uint256)": TypedContractEvent<
      URIEvent.InputTuple,
      URIEvent.OutputTuple,
      URIEvent.OutputObject
    >;
    URI: TypedContractEvent<
      URIEvent.InputTuple,
      URIEvent.OutputTuple,
      URIEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "VerificationAttested(address,uint64)": TypedContractEvent<
      VerificationAttestedEvent.InputTuple,
      VerificationAttestedEvent.OutputTuple,
      VerificationAttestedEvent.OutputObject
    >;
    VerificationAttested: TypedContractEvent<
      VerificationAttestedEvent.InputTuple,
      VerificationAttestedEvent.OutputTuple,
      VerificationAttestedEvent.OutputObject
    >;
  };
}
