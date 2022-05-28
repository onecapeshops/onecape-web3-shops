import {
  BoughtNFT,
  DelistSale,
  ListNFT,
  Mint,
  PutNFTForSale,
  Transfer,
  UpdateNFTSalePrice
} from "../generated/ShopNFTMint/ShopNFTMint"
import { Token, Marketplace } from "../generated/schema"


export function handleBoughtNFT(event: BoughtNFT): void {
  let sale = Marketplace.load(event.params.listingId.toString());

  if(!sale){
    sale = new Marketplace(event.params.listingId.toString());
    sale.id = event.params.tokenID.toString();
    sale.amount = event.params.amount;
  }

  sale.offeringId = event.params.listingId;
  sale.updatedTimeStamp = event.params.updatedTimeStamp;
  sale.owner = event.params.buyer;
  sale.isSale = false;
  sale.isClosed = true;
  sale.save();
}

export function handleDelistSale(event: DelistSale): void {
  let sale = Marketplace.load(event.params.listingId.toString());

  if(!sale){
    sale = new Marketplace(event.params.listingId.toString());
    sale.id = event.params.tokenID.toString();
    sale.offeringId = event.params.listingId;
  }

  sale.updatedTimeStamp = event.params.updatedTimeStamp;
  sale.isSale = false;
  sale.isClosed = true;
  sale.save();
}

export function handlePutNFTForSale(event: PutNFTForSale): void {
  let sale = Marketplace.load(event.params.tokenID.toString());

  if(!sale){
    sale = new Marketplace(event.params.tokenID.toString());
    sale.id = event.params.tokenID.toString();
  }
  sale.amount = event.params.amount;
  sale.updatedTimeStamp = event.params.updatedTimeStamp;
  sale.isSale = true;
  sale.isClosed = false;
  sale.save();
}

export function handleUpdateNFTSalePrice(event: UpdateNFTSalePrice): void {
  let sale = Marketplace.load(event.params.listingId.toString());

  if(!sale){
    sale = new Marketplace(event.params.listingId.toString());
    sale.id = event.params.tokenID.toString();
    sale.offeringId = event.params.listingId;
  }
  sale.amount = event.params.amount;
  sale.updatedTimeStamp = event.params.updatedTimeStamp;
  sale.save();
}

export function handleListNFT(event: ListNFT): void {
  let sale = Marketplace.load(event.params.offeringId.toString());

  if(!sale){
    sale = new Marketplace(event.params.offeringId.toString());
    sale.id = event.params.tokenID.toString();
    sale.offeringId = event.params.offeringId;
    sale.isSale = event.params.isSale;
    sale.isClosed = event.params.isClosed;
    sale.amount = event.params.amount;
  }

  sale.updatedTimeStamp = event.params.updatedTimeStamp;
  sale.owner = event.params.owner;
  sale.save();
}

export function handleMint(event: Mint): void {
  let token = Token.load(event.params.tokenId.toString());

  if(!token){
    token = new Token(event.params.tokenId.toString());

    token.id = event.params.tokenId.toString();
    // token.tokenId = event.params.tokenId;
    token.tokenURI = event.params.uri.toString();
    token.forSale = event.params.forSale;
    // token.tokenURI = "/" + event.params.tokenId.toString() + ".json"
    // let metadata = ipfs.cat(ipfshash + "/" + event.params.tokenId.toString() + ".json" );
    // if (metadata) {
    //   const value = json.fromBytes(metadata).toObject()
    //   if (value) {
    //     /* using the metatadata from IPFS, update the token object with the values  */
    //     const image = value.get('image')
    //     const name = value.get('name')
    //     const description = value.get('description')

    //     if (name && image && description) {
    //       token.name = name.toString()
    //       token.image = image.toString()
    //       token.description = description.toString()
    //     }
    //     const attributes = value.get('attributes')
    //     if(attributes){
    //       let attributeData = attributes.toArray();
    //       let typeObj = attributeData[0].toObject();
    //       let assetType = typeObj.get("value");
    //       if(assetType){
    //         token.type = assetType.toString();
    //       }
    //       let validityObj = attributeData[1].toObject();
    //       let validity = validityObj.get("value");
    //       if(validity){
    //         token.validity = validity.toString();
    //       }
    //       let discountObj = attributeData[2].toObject();
    //       let discount = discountObj.get("value");
    //       if(discount){
    //         token.discount = discount.toString();
    //       }
    //     }

    //   }
    // }
    // token.uri = event.params.uri.toString();
    // token.tokenOwner = event.params.tokenOwner;
    // token.tokenId = event.params.tokenId;
    // token.mintTime = event.block.timestamp;
    // let tokenContract = TokenContract.bind(event.address);
    // token.tokenURI = tokenContract.getNFTDetails(event.params.tokenId);
  }
  token.updatedAtTimestamp = event.params.mintTime;
  token.owner = event.params.tokenOwner;
  token.save();

    /* if the user does not yet exist, create them */
    // let user = User.load(event.params.tokenOwner.toHexString())
    // if (!user) {
    //   user = new User(event.params.tokenOwner.toHexString())
    //   user.save()
    // }
}

export function handleTransfer(event: Transfer): void {
  let token = Token.load(event.params.id.toString());

  if(!token){
    token = new Token(event.params.id.toString());
    token.id = event.params.id.toString();
  }
  token.updatedAtTimestamp = event.params.transferTime;
  token.owner = event.params.to;
  token.forSale = false;
  token.save();

}

