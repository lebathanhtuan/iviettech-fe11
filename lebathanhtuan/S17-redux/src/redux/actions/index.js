export function getProductList(params) {
  return {
    type: 'GET_PRODUCT_LIST',
    payload: params,
  }
}
