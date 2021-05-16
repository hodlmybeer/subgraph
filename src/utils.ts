import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AccountHodling, Account } from '../generated/schema'

export function getOrCreateAccountHodling(address: Address, token: string): AccountHodling {

  // make sure we create the account entity.
  let accountEntityId = address.toHex()
  let account = loadOrCreateAccount(accountEntityId)
  account.save()

  let entityId = address.toHex() + '-' + token;
  let accountHodling = AccountHodling.load(entityId)
  if (accountHodling != null) return accountHodling as AccountHodling

  accountHodling = new AccountHodling(entityId)
  
  accountHodling.token = token;
  accountHodling.account = address.toHex()
  accountHodling.balance = new BigInt(0)
  accountHodling.shareBalance = new BigInt(0)

  return accountHodling as AccountHodling
}

export function loadOrCreateAccount(accountId: string): Account {
  let account = Account.load(accountId);
  // if no account, create new entity
  if (account == null) {
    account = new Account(accountId);
  }
  return account as Account;
}
