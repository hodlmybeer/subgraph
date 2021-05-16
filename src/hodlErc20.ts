import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Approval,
  Deposit,
  Exit,
  Redeem,
  Transfer,
  Withdraw
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleDeposit(event: Deposit): void {}

export function handleExit(event: Exit): void {}

export function handleRedeem(event: Redeem): void {}

export function handleWithdraw(event: Withdraw): void {}
