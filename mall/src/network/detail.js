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

export function getRecommend() {
  return MoguPost({
    url: '/mogu/recommend',
    method: 'post',
    data: {
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

//参数信息
export class Param {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables;
  }
}

//参数信息
export class Product {
  constructor(iid, goods, topImages) {
    this.iid = iid;
    this.image = topImages[0];
    this.title = goods.title;
    this.desc = goods.discountDesc;
    this.price = goods.lowNowPrice;
  }
}


export function initCartProducts() {
  const products = []
  for (let i = 0; i < 10; i++) {
    let goods = {
      title: '网红吊带背心女装百搭抹胸性感聚拢裹胸打底V领交叉美背夏打底女',
      discountDesc: '新品促销',
      lowNowPrice: 29.90
    }
    let topImages = ['https://s5.mogucdn.com/mlcdn/c45406/190804_6h66ia6e7bk3ac36bh9597al013ea_640x960.jpg']
    let product = new Product(i, goods, topImages)
    products.push(product)
  }
  return products
}
