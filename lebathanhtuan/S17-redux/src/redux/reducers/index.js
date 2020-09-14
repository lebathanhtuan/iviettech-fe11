const initialState = {
  productList: [],
  userList: [],
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCT_LIST': {
      return {
        ...state,
        productList: [
          ...action.payload,
        ],
      }
    }
    default: {
      return state;
    }
  }
}

export default myReducer;
