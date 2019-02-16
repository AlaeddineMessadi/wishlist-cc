import {
  REQUEST_WISHLIST, SUCCESS_WISHLIST,
  ADD_ARTICLE, REMOVE_ARTICLE, SUCCESS, FAILED,
  SEARCH_ARTICLE, SUCCESS_SEARCH_ARTICLE, SET_WISHLIST_ID
} from '../actions/actionTypes';

let wishlist_id = sessionStorage.getItem('wishlist_id');
if (wishlist_id === 'undefined') sessionStorage.removeItem('wishlist_id');
const initialState = {
  suggestList: [],
  wishlist: [],
  wishlist_id
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTICLE:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_SEARCH_ARTICLE:
      return {
        ...state,
        loading: false,
        suggestList: action.payload,
      };
    case REQUEST_WISHLIST:
      return {
        ...state,
        loading: true,
      };
    case SET_WISHLIST_ID:
      return {
        ...state,
        wishlist_id: action.payload,
        wishlist: []
      };
    case SUCCESS_WISHLIST:
      if (!state.wishlist_id) {
        // set wishlist_id to sessionStorage
        sessionStorage.setItem('wishlist_id', action.payload.id);
      }
      return {
        ...state,
        loading: false,
        wishlist: action.payload.articles,
        wishlist_id: action.payload.id
      };
    case ADD_ARTICLE:
      return {
        ...state,
      };
    case REMOVE_ARTICLE:
      return {
        ...state,
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};