import {
    REQUEST_WISHLIST, SUCCESS_WISHLIST,
    ADD_ARTICLE, REMOVE_ARTICLE, SUCCESS, FAILED,
    SEARCH_ARTICLE, SUCCESS_SEARCH_ARTICLE
} from '../actions/actionTypes';

const intialState = {suggestList:[]}
export const reducer = (state = intialState, action) => {
    switch (action.type) {
        case SEARCH_ARTICLE:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS_SEARCH_ARTICLE:
            return {
                ...state,
                suggestList: action.payload,
            }
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