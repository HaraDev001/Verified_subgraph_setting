import { BigInt } from "@graphprotocol/graph-ts"
import {
  System,
  HolderCreated,
  LedgerCreated,
  AccountCreated,
  OwnershipTransferred,
  ProxyCreated
} from "../generated/System/System"

export function handleHolderCreated(event: HolderCreated): void {
  /*
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.holder = event.params.holder
  entity.holderName = event.params.holderName

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.getSigner(...)
  // - contract.deploySigned(...)
  // - contract.accountholders(...)
  // - contract.accounts(...)
  // - contract.deploy(...)
  // - contract.getDeploymentAddress(...)
  // - contract.owner(...)
  // - contract.isOwner(...)
  // - contract.ledgers(...)
  // - contract.deployMinimal(...)
  // - contract.getAccountHolder(...)
  // - contract.getAccountLedger(...)
  // - contract.getLedgerAccount(...)
  // - contract.getAccountHolders(...)
  // - contract.getAccountLedgers(...)
  // - contract.getLedgerAccounts(...)
  // - contract.getHolderDetails(...)
  // - contract.getLedgerDetails(...)
  // - contract.getAccountDetails(...)
  // - contract.confirmAccountHolder(...)
  */
}

export function handleLedgerCreated(event: LedgerCreated): void {}

export function handleAccountCreated(event: AccountCreated): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProxyCreated(event: ProxyCreated): void {}
