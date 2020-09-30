import {
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_FAIL,
} from '../constants';

const initialState = {
    productList: [],
};

function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                productList: [
                    ...action.payload,
                ],
            }
        }
        case GET_PRODUCT_LIST_FAIL: {
            return state;
        }
        default: {
            return state;
        }
    }
}
export default productReducer