import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    banner: [],
    brands: [],
    products_list: [],
    page: 1,
  },
  effects: {
    * load(_, { call, put }) {
      const { errno, data } = yield call(homeApi.homepage, {});
      debugger
      if (errno === 0) {
        yield put({
          type: 'save', payload: {
            banner: data.img,
            brands: data.product_cates
          }
        });
      }
    },
    * product(_, { call, put, select }) {
      const { page, products_list } = yield select(state => state.home);
      const { errno, data } = yield call(homeApi.product, {});
      if (errno === 0) {
        yield put({
          type: 'save', payload: {
            products_list: page > 1 ? [...products_list, ...data] : data,
          }
        });
      }
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
