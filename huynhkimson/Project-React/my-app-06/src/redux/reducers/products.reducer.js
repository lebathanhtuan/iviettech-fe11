
import {
    GET_PRODUCT_LIST,
} from '../constants';

const initialState = {
    productList: [],
};

function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_LIST: {
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
export default productReducer;