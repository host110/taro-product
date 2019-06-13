import Request from '../../utils/request';

// 获取商品详情
export const getProductInfo = params => Request({
  url: '/productDetails',
  method: 'GET',
  data: params,
});
