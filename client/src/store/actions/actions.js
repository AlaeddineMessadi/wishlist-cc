
import * as action from './actionTypes';

export function wishlistRequestAction(payload) {
    return {
        type: action.REQUEST_WISHLIST,
        payload,
    }
}

export function wishlistRequestSuccess(payload) {
    return {
        type: action.SUCCESS_WISHLIST,
        payload,
    }
}

export function addArticleAction(payload) {
    return {
        type: action.ADD_ARTICLE,
        payload,
    }
}

export function removeArticleAction(payload) {
    return {
        type: action.REMOVE_ARTICLE,
        payload,
    }
}

export function successAction(payload) {
    return {
        type: action.SUCCESS,
        payload,
    }
}

export function failedAction(payload) {
    return {
        type: action.FAILED,
        payload,
    }
}

export function createWishlistAction(payload) {
    return {
        type: action.CREATE_WISHLIST,
        payload,
    }
}

export function createArticleAction(payload) {
    return {
        type: action.CREATE_ARTICLE,
        payload,
    }
}

export function searchArticleAction(payload) {
    return {
        type: action.SEARCH_ARTICLE,
        payload,
    }
}

export function successSearchAction(payload) {
    return {
        type: action.SUCCESS_SEARCH_ARTICLE,
        payload,
    }
}

export function successCreateWishlistAction(payload) {
    return {
        type: action.SUCCESS_CREATE_WISHLIST,
        payload,
    }
}

export function setWishlistIdAction(payload) {
    return {
        type: action.SET_WISHLIST_ID,
        payload,
    }
}