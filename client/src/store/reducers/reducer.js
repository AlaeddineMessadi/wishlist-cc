import {
    REQUEST_WISHLIST, SUCCESS_WISHLIST, FAILED_WISHLIST,
    ADD_ARTICLE, SUCCESS_ADD_ARTICLE, FAILED_ADD_ARTICLE,
    REMOVE_ARTICLE, SUCCESS_REMOVE_ARTICLE, FAILED_REMOVE_ARTICLE
} from '../actions/actionTypes';

export const login = (state = {}, action) => {
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
        case FAILED_WISHLIST:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case ADD_ARTICLE:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS_ADD_ARTICLE:
            return {
                ...state,
                loading: false,
                success: true
            }
        case FAILED_ADD_ARTICLE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case REMOVE_ARTICLE:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS_REMOVE_ARTICLE:
            return {
                ...state,
                loading: false,
                success: true
            }
        case FAILED_REMOVE_ARTICLE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state
    }
}