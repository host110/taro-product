import Request from '../../utils/request';

export const homepage = data => Request({
  url: '/banner',
  method: 'GET',
  data,
});
export const product = data => Request({
  url: '/product',
  method: 'GET',
  data,
});
