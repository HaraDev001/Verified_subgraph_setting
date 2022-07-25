import { BigInt } from "@graphprotocol/graph-ts"
import {
  Products,
  ProductIssued,
  ProxyCreated
} from "../generated/Products/Products"

export function handleProductIssued(event: ProductIssued): void {
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
  entity.issue = event.params.issue
  entity.ref = event.params.ref

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
  // - contract.deploy(...)
  // - contract.getDeploymentAddress(...)
  // - contract.deployMinimal(...)
  // - contract.getProductsForClient(...)
  // - contract.getIssuesForClient(...)
  // - contract.getProductsForCountry(...)
  // - contract.getIssuesForCountry(...)
  // - contract.getProducts(...)
  // - contract.getProduct(...)
  // - contract.getCertificate(...)
  // - contract.getIssue(...)
  // - contract.getIssuerName(...)
  // - contract.getIssuerAddress(...)
  // - contract.checkIssue(...)
  */
}

export function handleProxyCreated(event: ProxyCreated): void {}
