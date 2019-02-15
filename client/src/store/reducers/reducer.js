import {
    REQUEST_WISHLIST, SUCCESS_WISHLIST,
    ADD_ARTICLE, REMOVE_ARTICLE, SUCCESS, FAILED,
    SEARCH_ARTICLE, SUCCESS_SEARCH_ARTICLE, SUCCESS_CREATE_WISHLIST, SET_WISHLIST_ID
} from '../actions/actionTypes';

let wishlist_id = sessionStorage.getItem('wishlist_id') || '';

const intialState = { suggestList: [], wishlist: [], x: 'x', wishlist_id }
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
                loading: false,
                suggestList: action.payload,
            }
        case REQUEST_WISHLIST:
            return {
                ...state,
                loading: true,
            }
        case SET_WISHLIST_ID:
            return {
                ...state,
                wishlist_id: action.payload
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
            }
        case REMOVE_ARTICLE:
            return {
                ...state,
            }
        case SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case SUCCESS_CREATE_WISHLIST:
            return {
                ...state,
                wishlist_id: action.payload
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