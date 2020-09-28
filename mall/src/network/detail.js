import {MoguPost} from './request'

export function getDetail(iid) {
  return MoguPost({
    url: '/mogu/getDetail',
    method: 'post',
    data: {
      iid: iid
    }
  })
}

export class GoodsInfo {
  constructor(itemInfo, priceInfo, itemServices) {
    this.title = itemInfo.title;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.price = priceInfo.nowPrice;
    this.oldPrice = priceInfo.oldPrice;
    this.discountDesc = priceInfo.priceTags[0].text;
    this.currency = priceInfo.currency;
    this.columns = itemServices.columns; //销量、邮费
    this.services = itemServices.services; //服务里
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}
