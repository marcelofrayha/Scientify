/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Scientify4,
  Scientify4Interface,
} from "../../../src/Scientify4.sol/Scientify4";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC1155InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC1155InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idsLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valuesLength",
        type: "uint256",
      },
    ],
    name: "ERC1155InvalidArrayLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC1155InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC1155InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC1155InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC1155MissingApprovalForAll",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAttestation",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTokenBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAuthenticated",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughValue",
    type: "error",
  },
  {
    inputs: [],
    name: "NotLiquidable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "PaymentFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ResearchCap",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "researcher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "attestationId",
        type: "uint64",
      },
    ],
    name: "ResearcherVerificationAttested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "researcher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "attestationId",
        type: "uint64",
      },
    ],
    name: "VerificationAttested",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "researcher",
        type: "address",
      },
    ],
    name: "attestResearcherVerification",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "repo",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "invest",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "articlePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "articlePriceIncreaseRate",
        type: "uint256",
      },
    ],
    name: "createResearch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "researchById",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "enum Scientify4.ResearchState",
        name: "state",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "investment",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "articlePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "articlePriceIncreaseRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "funding",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "documentCID",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "researchRequest",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "enum Scientify4.ResearchState",
        name: "state",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "investment",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "articlePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "articlePriceIncreaseRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "funding",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "documentCID",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "researcherVerificationAttestations",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "schemaId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    name: "setSPInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "schemaId_",
        type: "uint64",
      },
    ],
    name: "setSchemaID",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "spInstance",
    outputs: [
      {
        internalType: "contract ISP",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "verifiedResearchers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "researcher",
        type: "address",
      },
    ],
    name: "verifyResearcher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600160045534801561001557600080fd5b506040805180820190915260048152634555524b60e01b6020820152339061003c81610087565b506001600160a01b03811661006b57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61007481610097565b506003805460ff60a01b19169055610249565b6002610093828261018a565b5050565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061011357607f821691505b60208210810361013357634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610185576000816000526020600020601f850160051c810160208610156101625750805b601f850160051c820191505b818110156101815782815560010161016e565b5050505b505050565b81516001600160401b038111156101a3576101a36100e9565b6101b7816101b184546100ff565b84610139565b602080601f8311600181146101ec57600084156101d45750858301515b600019600386901b1c1916600185901b178555610181565b600085815260208120601f198616915b8281101561021b578886015182559484019460019091019084016101fc565b50858210156102395787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b612125806102586000396000f3fe608060405234801561001057600080fd5b50600436106101725760003560e01c8063715018a6116100de578063a22cb46511610097578063e985e9c511610071578063e985e9c5146103a6578063f242432a146103b9578063f2fde38b146103cc578063f5298aca146103df57600080fd5b8063a22cb4651461036d578063a8c5dc3314610380578063c2a756ca1461039357600080fd5b8063715018a6146102de57806373fd653d146102e657806385235d3d146102f95780638da5cb5b1461030c5780638e9d660f146103315780638f1921801461034457600080fd5b80632eb2c2d6116101305780632eb2c2d61461025057806336f58e5f146102635780634e1273f4146102865780635c975abb146102a657806368e2cea8146102b85780636b20c454146102cb57600080fd5b8062fdd58e1461017757806301ffc9a71461019d57806305ca8ee3146101c0578063075b1a09146101d557806308f3e371146102075780630e89341c14610230575b600080fd5b61018a6101853660046115f4565b6103f2565b6040519081526020015b60405180910390f35b6101b06101ab366004611634565b61041a565b6040519015158152602001610194565b6101d36101ce36600461166d565b61046a565b005b600a546101ef90600160a01b90046001600160401b031681565b6040516001600160401b039091168152602001610194565b61021a6102153660046115f4565b61049f565b6040516101949a999897969594939291906116e6565b61024361023e36600461175b565b6105ab565b6040516101949190611774565b6101d361025e3660046118d6565b61063f565b6101b061027136600461197f565b60056020526000908152604090205460ff1681565b61029961029436600461199a565b6106ab565b6040516101949190611a95565b600354600160a01b900460ff166101b0565b6101d36102c6366004611aa8565b610777565b6101d36102d9366004611b0f565b610a19565b6101d3610a7d565b6101d36102f436600461197f565b610a91565b6101d361030736600461197f565b610ac8565b6003546001600160a01b03165b6040516001600160a01b039091168152602001610194565b6101d361033f36600461197f565b610cc1565b6101ef61035236600461197f565b6009602052600090815260409020546001600160401b031681565b6101d361037b366004611b82565b610ceb565b600a54610319906001600160a01b031681565b61021a6103a136600461175b565b610cfa565b6101b06103b4366004611bbe565b610d61565b6101d36103c7366004611bf1565b610d8f565b6101d36103da36600461197f565b610dee565b6101d36103ed366004611c55565b610e29565b6000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b60006001600160e01b03198216636cdb3d1360e11b148061044b57506001600160e01b031982166303a24d0760e21b145b8061041457506301ffc9a760e01b6001600160e01b0319831614610414565b610472610e5f565b600a80546001600160401b03909216600160a01b0267ffffffffffffffff60a01b19909216919091179055565b600660205281600052604060002081815481106104bb57600080fd5b60009182526020909120600a9091020180546001820154600283015460038401546004850154600586015460068701546007880154600889015460098a018054999c5060ff9098169a509598949793969295919490936001600160a01b0390921692909161052890611c88565b80601f016020809104026020016040519081016040528092919081815260200182805461055490611c88565b80156105a15780601f10610576576101008083540402835291602001916105a1565b820191906000526020600020905b81548152906001019060200180831161058457829003601f168201915b505050505090508a565b6060600280546105ba90611c88565b80601f01602080910402602001604051908101604052809291908181526020018280546105e690611c88565b80156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b50505050509050919050565b336001600160a01b0386168114801590610660575061065e8682610d61565b155b156106965760405163711bec9160e11b81526001600160a01b038083166004830152871660248201526044015b60405180910390fd5b6106a38686868686610e8c565b505050505050565b606081518351146106dc5781518351604051635b05999160e01b81526004810192909252602482015260440161068d565b600083516001600160401b038111156106f7576106f7611787565b604051908082528060200260200182016040528015610720578160200160208202803683370190505b50905060005b845181101561076f5760208082028601015161074a906020808402870101516103f2565b82828151811061075c5761075c611cc2565b6020908102919091010152600101610726565b509392505050565b3360009081526005602052604090205460ff166107ca5760405162461bcd60e51b8152602060048201526011602482015270139bdd08185d5d1a195b9d1a58d85d1959607a1b604482015260640161068d565b336000908152600660205260409020546005116107fa576040516302e298ed60e61b815260040160405180910390fd5b6040805161014081018252600454815260006020820181905291810185905260608101849052608081016108326305f5e10087611cee565b815260208082018590526000604080840182905260608401829052336080850181905260a09094018a905292815260068252918220805460018181018355918452928290208451600a9094020192835590830151828201805494955085949192909160ff1916908360028111156108ab576108ab61168a565b021790555060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c0820151600682015560e082015160078201556101008201516008820180546001600160a01b0319166001600160a01b0390921691909117905561012082015160098201906109289082611d58565b505081516000908152600760209081526040909120835181559083015160018083018054869550909160ff199091169083600281111561096a5761096a61168a565b021790555060408201516002820155606082015160038201556080820151600482015560a0820151600582015560c0820151600682015560e082015160078201556101008201516008820180546001600160a01b0319166001600160a01b0390921691909117905561012082015160098201906109e79082611d58565b505060048054915060006109fa83611e17565b9091555050805160009081526008602052604090206106a38682611d58565b6001600160a01b0383163314801590610a395750610a378333610d61565b155b15610a6d57335b60405163711bec9160e11b81526001600160a01b039182166004820152908416602482015260440161068d565b610a78838383610ef3565b505050565b610a85610e5f565b610a8f6000610f39565b565b610a99610e5f565b6001600160a01b0381166000908152600560205260409020805460ff19166001179055610ac581610ac8565b50565b610ad0610e5f565b604080516001808252818301909252600091816020015b6060815260200190600190039081610ae757905050604080516001600160a01b03851660208201529192500160405160208183030381529060405281600081518110610b3557610b35611cc2565b602002602001018190525060006001905060008382604051602001610b719291906001600160a01b039290921682521515602082015260400190565b60408051601f1981840301815261014083018252600a546001600160401b03600160a01b82041684526000602085018190528484018190526060850181905230608086015260a08501819052600260c086015260e0850181905261010085018890526101208501839052925163b82916cb60e01b81529194506001600160a01b03169063b82916cb90610c08908590600401611e9e565b6020604051808303816000875af1158015610c27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4b9190611fd1565b6001600160a01b038716600081815260096020908152604091829020805467ffffffffffffffff19166001600160401b038616908117909155915191825292935090917f22c9aa052d4e34c225d60366b28389ee92cc16a9675cf0c73566587db4aabcb8910160405180910390a2505050505050565b610cc9610e5f565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b610cf6338383610f8b565b5050565b60076020819052600091825260409091208054600182015460028301546003840154600485015460058601546006870154978701546008880154600989018054989a60ff90981699969895979496939592936001600160a01b039092169261052890611c88565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b0386168114801590610db05750610dae8682610d61565b155b15610de15760405163711bec9160e11b81526001600160a01b0380831660048301528716602482015260440161068d565b6106a38686868686611021565b610df6610e5f565b6001600160a01b038116610e2057604051631e4fbdf760e01b81526000600482015260240161068d565b610ac581610f39565b6001600160a01b0383163314801590610e495750610e478333610d61565b155b15610e545733610a40565b610a788383836110af565b6003546001600160a01b03163314610a8f5760405163118cdaa760e01b815233600482015260240161068d565b6001600160a01b038416610eb657604051632bfa23e760e11b81526000600482015260240161068d565b6001600160a01b038516610edf57604051626a0d4560e21b81526000600482015260240161068d565b610eec8585858585611113565b5050505050565b6001600160a01b038316610f1c57604051626a0d4560e21b81526000600482015260240161068d565b610a78836000848460405180602001604052806000815250611113565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610fb45760405162ced3e160e81b81526000600482015260240161068d565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661104b57604051632bfa23e760e11b81526000600482015260240161068d565b6001600160a01b03851661107457604051626a0d4560e21b81526000600482015260240161068d565b604080516001808252602082018690528183019081526060820185905260808201909252906110a68787848487611113565b50505050505050565b6001600160a01b0383166110d857604051626a0d4560e21b81526000600482015260240161068d565b604080516001808252602082018590528183019081526060820184905260a08201909252600060808201818152919291610eec918791859085905b61111f85858585611166565b6001600160a01b03841615610eec57825133906001036111585760208481015190840151611151838989858589611178565b50506106a3565b6106a381878787878761129c565b61117284848484611385565b50505050565b6001600160a01b0384163b156106a35760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906111bc9089908990889088908890600401611fee565b6020604051808303816000875af19250505080156111f7575060408051601f3d908101601f191682019092526111f491810190612033565b60015b611260573d808015611225576040519150601f19603f3d011682016040523d82523d6000602084013e61122a565b606091505b50805160000361125857604051632bfa23e760e11b81526001600160a01b038616600482015260240161068d565b805181602001fd5b6001600160e01b0319811663f23a6e6160e01b146110a657604051632bfa23e760e11b81526001600160a01b038616600482015260240161068d565b6001600160a01b0384163b156106a35760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906112e09089908990889088908890600401612050565b6020604051808303816000875af192505050801561131b575060408051601f3d908101601f1916820190925261131891810190612033565b60015b611349573d808015611225576040519150601f19603f3d011682016040523d82523d6000602084013e61122a565b6001600160e01b0319811663bc197c8160e01b146110a657604051632bfa23e760e11b81526001600160a01b038616600482015260240161068d565b61138d611399565b611172848484846113c4565b600354600160a01b900460ff1615610a8f5760405163d93c066560e01b815260040160405180910390fd5b80518251146113f35781518151604051635b05999160e01b81526004810192909252602482015260440161068d565b3360005b83518110156114f9576020818102858101820151908501909101516001600160a01b038816156114aa576000828152602081815260408083206001600160a01b038c16845290915290205481811015611483576040516303dee4c560e01b81526001600160a01b038a16600482015260248101829052604481018390526064810184905260840161068d565b6000838152602081815260408083206001600160a01b038d16845290915290209082900390555b6001600160a01b038716156114ef576000828152602081815260408083206001600160a01b038b168452909152812080548392906114e99084906120ae565b90915550505b50506001016113f7565b50825160010361157a5760208301516000906020840151909150856001600160a01b0316876001600160a01b0316846001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62858560405161156b929190918252602082015260400190565b60405180910390a45050610eec565b836001600160a01b0316856001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516115c99291906120c1565b60405180910390a45050505050565b80356001600160a01b03811681146115ef57600080fd5b919050565b6000806040838503121561160757600080fd5b611610836115d8565b946020939093013593505050565b6001600160e01b031981168114610ac557600080fd5b60006020828403121561164657600080fd5b81356116518161161e565b9392505050565b6001600160401b0381168114610ac557600080fd5b60006020828403121561167f57600080fd5b813561165181611658565b634e487b7160e01b600052602160045260246000fd5b6000815180845260005b818110156116c6576020818501810151868301820152016116aa565b506000602082860101526020601f19601f83011685010191505092915050565b60006101408c835260038c106116fe576116fe61168a565b8b60208401528a60408401528960608401528860808401528760a08401528660c08401528560e084015260018060a01b0385166101008401528061012084015261174a818401856116a0565b9d9c50505050505050505050505050565b60006020828403121561176d57600080fd5b5035919050565b60208152600061165160208301846116a0565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156117c5576117c5611787565b604052919050565b60006001600160401b038211156117e6576117e6611787565b5060051b60200190565b600082601f83011261180157600080fd5b81356020611816611811836117cd565b61179d565b8083825260208201915060208460051b87010193508684111561183857600080fd5b602086015b84811015611854578035835291830191830161183d565b509695505050505050565b60006001600160401b0383111561187857611878611787565b61188b601f8401601f191660200161179d565b905082815283838301111561189f57600080fd5b828260208301376000602084830101529392505050565b600082601f8301126118c757600080fd5b6116518383356020850161185f565b600080600080600060a086880312156118ee57600080fd5b6118f7866115d8565b9450611905602087016115d8565b935060408601356001600160401b038082111561192157600080fd5b61192d89838a016117f0565b9450606088013591508082111561194357600080fd5b61194f89838a016117f0565b9350608088013591508082111561196557600080fd5b50611972888289016118b6565b9150509295509295909350565b60006020828403121561199157600080fd5b611651826115d8565b600080604083850312156119ad57600080fd5b82356001600160401b03808211156119c457600080fd5b818501915085601f8301126119d857600080fd5b813560206119e8611811836117cd565b82815260059290921b84018101918181019089841115611a0757600080fd5b948201945b83861015611a2c57611a1d866115d8565b82529482019490820190611a0c565b96505086013592505080821115611a4257600080fd5b50611a4f858286016117f0565b9150509250929050565b60008151808452602080850194506020840160005b83811015611a8a57815187529582019590820190600101611a6e565b509495945050505050565b6020815260006116516020830184611a59565b60008060008060808587031215611abe57600080fd5b84356001600160401b03811115611ad457600080fd5b8501601f81018713611ae557600080fd5b611af48782356020840161185f565b97602087013597506040870135966060013595509350505050565b600080600060608486031215611b2457600080fd5b611b2d846115d8565b925060208401356001600160401b0380821115611b4957600080fd5b611b55878388016117f0565b93506040860135915080821115611b6b57600080fd5b50611b78868287016117f0565b9150509250925092565b60008060408385031215611b9557600080fd5b611b9e836115d8565b915060208301358015158114611bb357600080fd5b809150509250929050565b60008060408385031215611bd157600080fd5b611bda836115d8565b9150611be8602084016115d8565b90509250929050565b600080600080600060a08688031215611c0957600080fd5b611c12866115d8565b9450611c20602087016115d8565b9350604086013592506060860135915060808601356001600160401b03811115611c4957600080fd5b611972888289016118b6565b600080600060608486031215611c6a57600080fd5b611c73846115d8565b95602085013595506040909401359392505050565b600181811c90821680611c9c57607f821691505b602082108103611cbc57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082611d0b57634e487b7160e01b600052601260045260246000fd5b500490565b601f821115610a78576000816000526020600020601f850160051c81016020861015611d395750805b601f850160051c820191505b818110156106a357828155600101611d45565b81516001600160401b03811115611d7157611d71611787565b611d8581611d7f8454611c88565b84611d10565b602080601f831160018114611dba5760008415611da25750858301515b600019600386901b1c1916600185901b1785556106a3565b600085815260208120601f198616915b82811015611de957888601518255948401946001909101908401611dca565b5085821015611e075787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060018201611e2957611e29611cd8565b5060010190565b60048110611e4057611e4061168a565b9052565b60008282518085526020808601955060208260051b8401016020860160005b84811015611e9157601f19868403018952611e7f8383516116a0565b98840198925090830190600101611e63565b5090979650505050505050565b60808152611eb86080820183516001600160401b03169052565b60006020830151611ed460a08401826001600160401b03169052565b5060408301516001600160401b0390811660c084015260608401511660e083015260808301516001600160a01b0381166101008085019190915260a08501519150610120611f2c818601846001600160401b03169052565b60c08601519250610140611f4281870185611e30565b60e08701511515610160870152828701516101808701919091529250611f6c6101c0860184611e44565b90860151858203607f19016101a08701529092509050611f8c82826116a0565b9150508281036020840152611fa5816000815260200190565b838103604085015260008152905060208101838103606085015260008152905060208101949350505050565b600060208284031215611fe357600080fd5b815161165181611658565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090612028908301846116a0565b979650505050505050565b60006020828403121561204557600080fd5b81516116518161161e565b6001600160a01b0386811682528516602082015260a06040820181905260009061207c90830186611a59565b828103606084015261208e8186611a59565b905082810360808401526120a281856116a0565b98975050505050505050565b8082018082111561041457610414611cd8565b6040815260006120d46040830185611a59565b82810360208401526120e68185611a59565b9594505050505056fea264697066735822122004532ababc2031b0131c766ade06a2565a4e2432e421b6f4a80a2dd496dd740b64736f6c63430008190033";

type Scientify4ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Scientify4ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Scientify4__factory extends ContractFactory {
  constructor(...args: Scientify4ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Scientify4 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Scientify4__factory {
    return super.connect(runner) as Scientify4__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Scientify4Interface {
    return new Interface(_abi) as Scientify4Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): Scientify4 {
    return new Contract(address, _abi, runner) as unknown as Scientify4;
  }
}