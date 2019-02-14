import {
    REQUEST_WISHLIST, SUCCESS_WISHLIST,
    ADD_ARTICLE, REMOVE_ARTICLE, SUCCESS, FAILED
} from '../actions/actionTypes';

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_WISHLIST:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS_WISHLIST:
            return {
                ...state,
                loading: false,
                wishlist: action.payload
            }
        case ADD_ARTICLE:
            return {
                ...state,
                loading: true,
            }
        case REMOVE_ARTICLE:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case FAILED:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}