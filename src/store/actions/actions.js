
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

export function wishlistRequestFailed(payload) {
    return {
        type: action.FAILED_WISHLIST,
        payload,
    }
}

export function LogoutRequestAction(payload) {
    return {
        type: action.REQUEST_LOGOUT,
        payload,
    }
}

export function addArticleAction(payload) {
    return {
        type: action.ADD_ARTICLE,
        payload,
    }
}

export function addArticleSuccess(payload) {
    return {
        type: action.SUCCESS_ADD_ARTICLE,
        payload,
    }
}

export function addArticleFailed(payload) {
    return {
        type: action.FAILED_ADD_ARTICLE,
        payload,
    }
}

export function removeArticleAction(payload) {
    return {
        type: action.REMOVE_ARTICLE,
        payload,
    }
}

export function removeArticleSuccess(payload) {
    return {
        type: action.SUCCESS_REMOVE_ARTICLE,
        payload,
    }
}

export function removeArticleFailed(payload) {
    return {
        type: action.FAILED_REMOVE_ARTICLE,
        payload,
    }
}