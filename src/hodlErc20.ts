import { BigInt } from "@graphprotocol/graph-ts"
import {
  Deposit,
  Exit,
  Redeem,
  Withdraw
} from "../generated/templates/HodlERC20/HodlERC20"
import {  } from "../generated/schema"

export function handleDeposit(event: Deposit): void {}

export function handleExit(event: Exit): void {}

export function handleRedeem(event: Redeem): void {}

export function handleWithdraw(event: Withdraw): void {}
