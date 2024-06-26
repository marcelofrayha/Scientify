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
} from "../../../../common";

export type AttestationStruct = {
  schemaId: BigNumberish;
  linkedAttestationId: BigNumberish;
  attestTimestamp: BigNumberish;
  revokeTimestamp: BigNumberish;
  attester: AddressLike;
  validUntil: BigNumberish;
  dataLocation: BigNumberish;
  revoked: boolean;
  recipients: BytesLike[];
  data: BytesLike;
};

export type AttestationStructOutput = [
  schemaId: bigint,
  linkedAttestationId: bigint,
  attestTimestamp: bigint,
  revokeTimestamp: bigint,
  attester: string,
  validUntil: bigint,
  dataLocation: bigint,
  revoked: boolean,
  recipients: string[],
  data: string
] & {
  schemaId: bigint;
  linkedAttestationId: bigint;
  attestTimestamp: bigint;
  revokeTimestamp: bigint;
  attester: string;
  validUntil: bigint;
  dataLocation: bigint;
  revoked: boolean;
  recipients: string[];
  data: string;
};

export type SchemaStruct = {
  registrant: AddressLike;
  revocable: boolean;
  dataLocation: BigNumberish;
  maxValidFor: BigNumberish;
  hook: AddressLike;
  timestamp: BigNumberish;
  data: string;
};

export type SchemaStructOutput = [
  registrant: string,
  revocable: boolean,
  dataLocation: bigint,
  maxValidFor: bigint,
  hook: string,
  timestamp: bigint,
  data: string
] & {
  registrant: string;
  revocable: boolean;
  dataLocation: bigint;
  maxValidFor: bigint;
  hook: string;
  timestamp: bigint;
  data: string;
};

export type OffchainAttestationStruct = {
  attester: AddressLike;
  timestamp: BigNumberish;
};

export type OffchainAttestationStructOutput = [
  attester: string,
  timestamp: bigint
] & { attester: string; timestamp: bigint };

export interface ISPInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),address,uint256,string,bytes,bytes)"
      | "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),string,bytes,bytes)"
      | "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),uint256,string,bytes,bytes)"
      | "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],uint256[],string[],bytes,bytes)"
      | "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],address[],uint256[],string[],bytes,bytes)"
      | "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],string[],bytes,bytes)"
      | "attestOffchain"
      | "attestOffchainBatch"
      | "attestationCounter"
      | "getAttestation"
      | "getDelegatedAttestBatchHash"
      | "getDelegatedAttestHash"
      | "getDelegatedOffchainAttestBatchHash"
      | "getDelegatedOffchainAttestHash"
      | "getDelegatedOffchainRevokeBatchHash"
      | "getDelegatedOffchainRevokeHash"
      | "getDelegatedRegisterBatchHash"
      | "getDelegatedRegisterHash"
      | "getDelegatedRevokeBatchHash"
      | "getDelegatedRevokeHash"
      | "getOffchainAttestation"
      | "getSchema"
      | "register"
      | "registerBatch"
      | "revoke(uint64,string,bytes,bytes)"
      | "revoke(uint64,string,address,uint256,bytes,bytes)"
      | "revoke(uint64,string,uint256,bytes,bytes)"
      | "revokeBatch(uint64[],string[],bytes,bytes)"
      | "revokeBatch(uint64[],string[],uint256[],bytes,bytes)"
      | "revokeBatch(uint64[],string[],address[],uint256[],bytes,bytes)"
      | "revokeOffchain"
      | "revokeOffchainBatch"
      | "schemaCounter"
      | "version"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AttestationMade"
      | "AttestationRevoked"
      | "OffchainAttestationMade"
      | "OffchainAttestationRevoked"
      | "SchemaRegistered"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),address,uint256,string,bytes,bytes)",
    values: [
      AttestationStruct,
      AddressLike,
      BigNumberish,
      string,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),string,bytes,bytes)",
    values: [AttestationStruct, string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),uint256,string,bytes,bytes)",
    values: [AttestationStruct, BigNumberish, string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],uint256[],string[],bytes,bytes)",
    values: [
      AttestationStruct[],
      BigNumberish[],
      string[],
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],address[],uint256[],string[],bytes,bytes)",
    values: [
      AttestationStruct[],
      AddressLike[],
      BigNumberish[],
      string[],
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],string[],bytes,bytes)",
    values: [AttestationStruct[], string[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "attestOffchain",
    values: [string, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "attestOffchainBatch",
    values: [string[], AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "attestationCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAttestation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegatedAttestBatchHash",
    values: [AttestationStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegatedAttestHash",
    values: [AttestationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegatedOffchainAttestBatchHash",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegatedOffchainAttestHash",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegatedOffchainRevokeBatchHash",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegatedOffchainRevokeHash",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegatedRegisterBatchHash",
    values: [SchemaStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegatedRegisterHash",
    values: [SchemaStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegatedRevokeBatchHash",
    values: [BigNumberish[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegatedRevokeHash",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOffchainAttestation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSchema",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [SchemaStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerBatch",
    values: [SchemaStruct[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revoke(uint64,string,bytes,bytes)",
    values: [BigNumberish, string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revoke(uint64,string,address,uint256,bytes,bytes)",
    values: [
      BigNumberish,
      string,
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "revoke(uint64,string,uint256,bytes,bytes)",
    values: [BigNumberish, string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeBatch(uint64[],string[],bytes,bytes)",
    values: [BigNumberish[], string[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeBatch(uint64[],string[],uint256[],bytes,bytes)",
    values: [BigNumberish[], string[], BigNumberish[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeBatch(uint64[],string[],address[],uint256[],bytes,bytes)",
    values: [
      BigNumberish[],
      string[],
      AddressLike[],
      BigNumberish[],
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeOffchain",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeOffchainBatch",
    values: [string[], string[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "schemaCounter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),address,uint256,string,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),string,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),uint256,string,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],uint256[],string[],bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],address[],uint256[],string[],bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],string[],bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "attestOffchain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "attestOffchainBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "attestationCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAttestation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegatedAttestBatchHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegatedAttestHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegatedOffchainAttestBatchHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegatedOffchainAttestHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegatedOffchainRevokeBatchHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegatedOffchainRevokeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegatedRegisterBatchHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegatedRegisterHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegatedRevokeBatchHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegatedRevokeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOffchainAttestation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSchema", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revoke(uint64,string,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revoke(uint64,string,address,uint256,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revoke(uint64,string,uint256,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeBatch(uint64[],string[],bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeBatch(uint64[],string[],uint256[],bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeBatch(uint64[],string[],address[],uint256[],bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeOffchain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeOffchainBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "schemaCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export namespace AttestationMadeEvent {
  export type InputTuple = [attestationId: BigNumberish, indexingKey: string];
  export type OutputTuple = [attestationId: bigint, indexingKey: string];
  export interface OutputObject {
    attestationId: bigint;
    indexingKey: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AttestationRevokedEvent {
  export type InputTuple = [attestationId: BigNumberish, reason: string];
  export type OutputTuple = [attestationId: bigint, reason: string];
  export interface OutputObject {
    attestationId: bigint;
    reason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OffchainAttestationMadeEvent {
  export type InputTuple = [attestationId: string];
  export type OutputTuple = [attestationId: string];
  export interface OutputObject {
    attestationId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OffchainAttestationRevokedEvent {
  export type InputTuple = [attestationId: string, reason: string];
  export type OutputTuple = [attestationId: string, reason: string];
  export interface OutputObject {
    attestationId: string;
    reason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SchemaRegisteredEvent {
  export type InputTuple = [schemaId: BigNumberish];
  export type OutputTuple = [schemaId: bigint];
  export interface OutputObject {
    schemaId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ISP extends BaseContract {
  connect(runner?: ContractRunner | null): ISP;
  waitForDeployment(): Promise<this>;

  interface: ISPInterface;

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

  "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),address,uint256,string,bytes,bytes)": TypedContractMethod<
    [
      attestation: AttestationStruct,
      resolverFeesERC20Token: AddressLike,
      resolverFeesERC20Amount: BigNumberish,
      indexingKey: string,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),string,bytes,bytes)": TypedContractMethod<
    [
      attestation: AttestationStruct,
      indexingKey: string,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),uint256,string,bytes,bytes)": TypedContractMethod<
    [
      attestation: AttestationStruct,
      resolverFeesETH: BigNumberish,
      indexingKey: string,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint],
    "payable"
  >;

  "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],uint256[],string[],bytes,bytes)": TypedContractMethod<
    [
      attestations: AttestationStruct[],
      resolverFeesETH: BigNumberish[],
      indexingKeys: string[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint[]],
    "payable"
  >;

  "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],address[],uint256[],string[],bytes,bytes)": TypedContractMethod<
    [
      attestations: AttestationStruct[],
      resolverFeesERC20Tokens: AddressLike[],
      resolverFeesERC20Amount: BigNumberish[],
      indexingKeys: string[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint[]],
    "nonpayable"
  >;

  "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],string[],bytes,bytes)": TypedContractMethod<
    [
      attestations: AttestationStruct[],
      indexingKeys: string[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint[]],
    "nonpayable"
  >;

  attestOffchain: TypedContractMethod<
    [
      offchainAttestationId: string,
      delegateAttester: AddressLike,
      delegateSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  attestOffchainBatch: TypedContractMethod<
    [
      offchainAttestationIds: string[],
      delegateAttester: AddressLike,
      delegateSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  attestationCounter: TypedContractMethod<[], [bigint], "view">;

  getAttestation: TypedContractMethod<
    [attestationId: BigNumberish],
    [AttestationStructOutput],
    "view"
  >;

  getDelegatedAttestBatchHash: TypedContractMethod<
    [attestations: AttestationStruct[]],
    [string],
    "view"
  >;

  getDelegatedAttestHash: TypedContractMethod<
    [attestation: AttestationStruct],
    [string],
    "view"
  >;

  getDelegatedOffchainAttestBatchHash: TypedContractMethod<
    [offchainAttestationIds: string[]],
    [string],
    "view"
  >;

  getDelegatedOffchainAttestHash: TypedContractMethod<
    [offchainAttestationId: string],
    [string],
    "view"
  >;

  getDelegatedOffchainRevokeBatchHash: TypedContractMethod<
    [offchainAttestationIds: string[], reasons: string[]],
    [string],
    "view"
  >;

  getDelegatedOffchainRevokeHash: TypedContractMethod<
    [offchainAttestationId: string, reason: string],
    [string],
    "view"
  >;

  getDelegatedRegisterBatchHash: TypedContractMethod<
    [schemas: SchemaStruct[]],
    [string],
    "view"
  >;

  getDelegatedRegisterHash: TypedContractMethod<
    [schema: SchemaStruct],
    [string],
    "view"
  >;

  getDelegatedRevokeBatchHash: TypedContractMethod<
    [attestationIds: BigNumberish[], reasons: string[]],
    [string],
    "view"
  >;

  getDelegatedRevokeHash: TypedContractMethod<
    [attestationId: BigNumberish, reason: string],
    [string],
    "view"
  >;

  getOffchainAttestation: TypedContractMethod<
    [offchainAttestationId: string],
    [OffchainAttestationStructOutput],
    "view"
  >;

  getSchema: TypedContractMethod<
    [schemaId: BigNumberish],
    [SchemaStructOutput],
    "view"
  >;

  register: TypedContractMethod<
    [schema: SchemaStruct, delegateSignature: BytesLike],
    [bigint],
    "nonpayable"
  >;

  registerBatch: TypedContractMethod<
    [schemas: SchemaStruct[], delegateSignature: BytesLike],
    [bigint[]],
    "nonpayable"
  >;

  "revoke(uint64,string,bytes,bytes)": TypedContractMethod<
    [
      attestationId: BigNumberish,
      reason: string,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  "revoke(uint64,string,address,uint256,bytes,bytes)": TypedContractMethod<
    [
      attestationId: BigNumberish,
      reason: string,
      resolverFeesERC20Token: AddressLike,
      resolverFeesERC20Amount: BigNumberish,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  "revoke(uint64,string,uint256,bytes,bytes)": TypedContractMethod<
    [
      attestationId: BigNumberish,
      reason: string,
      resolverFeesETH: BigNumberish,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "payable"
  >;

  "revokeBatch(uint64[],string[],bytes,bytes)": TypedContractMethod<
    [
      attestationIds: BigNumberish[],
      reasons: string[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  "revokeBatch(uint64[],string[],uint256[],bytes,bytes)": TypedContractMethod<
    [
      attestationIds: BigNumberish[],
      reasons: string[],
      resolverFeesETH: BigNumberish[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "payable"
  >;

  "revokeBatch(uint64[],string[],address[],uint256[],bytes,bytes)": TypedContractMethod<
    [
      attestationIds: BigNumberish[],
      reasons: string[],
      resolverFeesERC20Tokens: AddressLike[],
      resolverFeesERC20Amount: BigNumberish[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  revokeOffchain: TypedContractMethod<
    [
      offchainAttestationId: string,
      reason: string,
      delegateSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  revokeOffchainBatch: TypedContractMethod<
    [
      offchainAttestationIds: string[],
      reasons: string[],
      delegateSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  schemaCounter: TypedContractMethod<[], [bigint], "view">;

  version: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),address,uint256,string,bytes,bytes)"
  ): TypedContractMethod<
    [
      attestation: AttestationStruct,
      resolverFeesERC20Token: AddressLike,
      resolverFeesERC20Amount: BigNumberish,
      indexingKey: string,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),string,bytes,bytes)"
  ): TypedContractMethod<
    [
      attestation: AttestationStruct,
      indexingKey: string,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "attest((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes),uint256,string,bytes,bytes)"
  ): TypedContractMethod<
    [
      attestation: AttestationStruct,
      resolverFeesETH: BigNumberish,
      indexingKey: string,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],uint256[],string[],bytes,bytes)"
  ): TypedContractMethod<
    [
      attestations: AttestationStruct[],
      resolverFeesETH: BigNumberish[],
      indexingKeys: string[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint[]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],address[],uint256[],string[],bytes,bytes)"
  ): TypedContractMethod<
    [
      attestations: AttestationStruct[],
      resolverFeesERC20Tokens: AddressLike[],
      resolverFeesERC20Amount: BigNumberish[],
      indexingKeys: string[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "attestBatch((uint64,uint64,uint64,uint64,address,uint64,uint8,bool,bytes[],bytes)[],string[],bytes,bytes)"
  ): TypedContractMethod<
    [
      attestations: AttestationStruct[],
      indexingKeys: string[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "attestOffchain"
  ): TypedContractMethod<
    [
      offchainAttestationId: string,
      delegateAttester: AddressLike,
      delegateSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "attestOffchainBatch"
  ): TypedContractMethod<
    [
      offchainAttestationIds: string[],
      delegateAttester: AddressLike,
      delegateSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "attestationCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAttestation"
  ): TypedContractMethod<
    [attestationId: BigNumberish],
    [AttestationStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDelegatedAttestBatchHash"
  ): TypedContractMethod<[attestations: AttestationStruct[]], [string], "view">;
  getFunction(
    nameOrSignature: "getDelegatedAttestHash"
  ): TypedContractMethod<[attestation: AttestationStruct], [string], "view">;
  getFunction(
    nameOrSignature: "getDelegatedOffchainAttestBatchHash"
  ): TypedContractMethod<[offchainAttestationIds: string[]], [string], "view">;
  getFunction(
    nameOrSignature: "getDelegatedOffchainAttestHash"
  ): TypedContractMethod<[offchainAttestationId: string], [string], "view">;
  getFunction(
    nameOrSignature: "getDelegatedOffchainRevokeBatchHash"
  ): TypedContractMethod<
    [offchainAttestationIds: string[], reasons: string[]],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDelegatedOffchainRevokeHash"
  ): TypedContractMethod<
    [offchainAttestationId: string, reason: string],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDelegatedRegisterBatchHash"
  ): TypedContractMethod<[schemas: SchemaStruct[]], [string], "view">;
  getFunction(
    nameOrSignature: "getDelegatedRegisterHash"
  ): TypedContractMethod<[schema: SchemaStruct], [string], "view">;
  getFunction(
    nameOrSignature: "getDelegatedRevokeBatchHash"
  ): TypedContractMethod<
    [attestationIds: BigNumberish[], reasons: string[]],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDelegatedRevokeHash"
  ): TypedContractMethod<
    [attestationId: BigNumberish, reason: string],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOffchainAttestation"
  ): TypedContractMethod<
    [offchainAttestationId: string],
    [OffchainAttestationStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSchema"
  ): TypedContractMethod<
    [schemaId: BigNumberish],
    [SchemaStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<
    [schema: SchemaStruct, delegateSignature: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "registerBatch"
  ): TypedContractMethod<
    [schemas: SchemaStruct[], delegateSignature: BytesLike],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revoke(uint64,string,bytes,bytes)"
  ): TypedContractMethod<
    [
      attestationId: BigNumberish,
      reason: string,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revoke(uint64,string,address,uint256,bytes,bytes)"
  ): TypedContractMethod<
    [
      attestationId: BigNumberish,
      reason: string,
      resolverFeesERC20Token: AddressLike,
      resolverFeesERC20Amount: BigNumberish,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revoke(uint64,string,uint256,bytes,bytes)"
  ): TypedContractMethod<
    [
      attestationId: BigNumberish,
      reason: string,
      resolverFeesETH: BigNumberish,
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "revokeBatch(uint64[],string[],bytes,bytes)"
  ): TypedContractMethod<
    [
      attestationIds: BigNumberish[],
      reasons: string[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeBatch(uint64[],string[],uint256[],bytes,bytes)"
  ): TypedContractMethod<
    [
      attestationIds: BigNumberish[],
      reasons: string[],
      resolverFeesETH: BigNumberish[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "revokeBatch(uint64[],string[],address[],uint256[],bytes,bytes)"
  ): TypedContractMethod<
    [
      attestationIds: BigNumberish[],
      reasons: string[],
      resolverFeesERC20Tokens: AddressLike[],
      resolverFeesERC20Amount: BigNumberish[],
      delegateSignature: BytesLike,
      extraData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeOffchain"
  ): TypedContractMethod<
    [
      offchainAttestationId: string,
      reason: string,
      delegateSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeOffchainBatch"
  ): TypedContractMethod<
    [
      offchainAttestationIds: string[],
      reasons: string[],
      delegateSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "schemaCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "AttestationMade"
  ): TypedContractEvent<
    AttestationMadeEvent.InputTuple,
    AttestationMadeEvent.OutputTuple,
    AttestationMadeEvent.OutputObject
  >;
  getEvent(
    key: "AttestationRevoked"
  ): TypedContractEvent<
    AttestationRevokedEvent.InputTuple,
    AttestationRevokedEvent.OutputTuple,
    AttestationRevokedEvent.OutputObject
  >;
  getEvent(
    key: "OffchainAttestationMade"
  ): TypedContractEvent<
    OffchainAttestationMadeEvent.InputTuple,
    OffchainAttestationMadeEvent.OutputTuple,
    OffchainAttestationMadeEvent.OutputObject
  >;
  getEvent(
    key: "OffchainAttestationRevoked"
  ): TypedContractEvent<
    OffchainAttestationRevokedEvent.InputTuple,
    OffchainAttestationRevokedEvent.OutputTuple,
    OffchainAttestationRevokedEvent.OutputObject
  >;
  getEvent(
    key: "SchemaRegistered"
  ): TypedContractEvent<
    SchemaRegisteredEvent.InputTuple,
    SchemaRegisteredEvent.OutputTuple,
    SchemaRegisteredEvent.OutputObject
  >;

  filters: {
    "AttestationMade(uint64,string)": TypedContractEvent<
      AttestationMadeEvent.InputTuple,
      AttestationMadeEvent.OutputTuple,
      AttestationMadeEvent.OutputObject
    >;
    AttestationMade: TypedContractEvent<
      AttestationMadeEvent.InputTuple,
      AttestationMadeEvent.OutputTuple,
      AttestationMadeEvent.OutputObject
    >;

    "AttestationRevoked(uint64,string)": TypedContractEvent<
      AttestationRevokedEvent.InputTuple,
      AttestationRevokedEvent.OutputTuple,
      AttestationRevokedEvent.OutputObject
    >;
    AttestationRevoked: TypedContractEvent<
      AttestationRevokedEvent.InputTuple,
      AttestationRevokedEvent.OutputTuple,
      AttestationRevokedEvent.OutputObject
    >;

    "OffchainAttestationMade(string)": TypedContractEvent<
      OffchainAttestationMadeEvent.InputTuple,
      OffchainAttestationMadeEvent.OutputTuple,
      OffchainAttestationMadeEvent.OutputObject
    >;
    OffchainAttestationMade: TypedContractEvent<
      OffchainAttestationMadeEvent.InputTuple,
      OffchainAttestationMadeEvent.OutputTuple,
      OffchainAttestationMadeEvent.OutputObject
    >;

    "OffchainAttestationRevoked(string,string)": TypedContractEvent<
      OffchainAttestationRevokedEvent.InputTuple,
      OffchainAttestationRevokedEvent.OutputTuple,
      OffchainAttestationRevokedEvent.OutputObject
    >;
    OffchainAttestationRevoked: TypedContractEvent<
      OffchainAttestationRevokedEvent.InputTuple,
      OffchainAttestationRevokedEvent.OutputTuple,
      OffchainAttestationRevokedEvent.OutputObject
    >;

    "SchemaRegistered(uint64)": TypedContractEvent<
      SchemaRegisteredEvent.InputTuple,
      SchemaRegisteredEvent.OutputTuple,
      SchemaRegisteredEvent.OutputObject
    >;
    SchemaRegistered: TypedContractEvent<
      SchemaRegisteredEvent.InputTuple,
      SchemaRegisteredEvent.OutputTuple,
      SchemaRegisteredEvent.OutputObject
    >;
  };
}
