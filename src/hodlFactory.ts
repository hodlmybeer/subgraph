import { BigInt } from "@graphprotocol/graph-ts";
import { HodlERC20 as HTokenSource } from "../generated/templates";
import { HodlERC20 as HTokenContract } from "../generated/templates/HodlERC20/HodlERC20";
import { HodlCreated } from "../generated/HodlERC20Factory/HodlERC20Factory";
import { HToken } from "../generated/schem a";

export function handleHodlCreated(event: HodlCreated): void {
  // Start indeing the newly created HToken contract
  HTokenSource.create(event.params.contractAddress);

  // bind to the address that emit the event
  let entity = new HToken(event.params.contractAddress.toHex());

  entity.penalty = event.params.penalty.toI32();
  entity.token = event.params.token;
  entity.bonusToken = event.params.bonusToken;
  entity.fee = event.params.feePortion.toI32();
  entity.feeRecipient = event.params.feeRecipient;
  entity.expiry = event.params.expiry.toI32();

  entity.creator = event.params.creator;
  entity.lockWindow = event.params.lockWindow.toI32();
  entity.createdAt = event.block.timestamp.toI32();
  entity.createdTx = event.transaction.hash;

  entity.n = event.params.n.toI32();

  entity.tokenBalance = BigInt.fromI32(0);
  entity.bonusTokenBalance = BigInt.fromI32(0);
  entity.totalFee = BigInt.fromI32(0);
  entity.totalReward = BigInt.fromI32(0);
  entity.totalShares = BigInt.fromI32(0);

  let contract = HTokenContract.bind(event.params.contractAddress);
  // Access state variables and functions by calling them
  entity.symbol = contract.symbol();
  entity.name = contract.name();
  entity.decimals = contract.decimals();

  // Entities can be written to the store with `.save()`
  entity.save();
}
