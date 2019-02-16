import * as actionType from '../actions/actionTypes';
import * as actions from '../actions/actions';
import { put, takeLatest, all } from 'redux-saga/effects';
import { wishlistService } from '../services/wishlist.service';

/**
 * Create Wishlist
 * @param {*} action 
 */
function* createWishlistSegaAction(action) {
    try {
        const response = yield wishlistService.createWishlist(action.payload.name);
        const wishlist_id = response.data.wishlist.id;
        // set wishlist_id to sessionStorage
        sessionStorage.setItem('wishlist_id', wishlist_id)

        yield put(actions.successCreateWishlistAction(wishlist_id));

        yield put(actions.successAction());
    } catch (error) {
        yield put(actions.failedAction(error));
    }
}

/**
 * Create Article
 * @param {*} action 
 */
function* createArticleSegaAction(action) {
    try {
        yield wishlistService.createArticle(action.payload.article);
        yield put(actions.successAction());
    } catch (error) {
        yield put(actions.failedAction(error.response.data));
    }
}

/**
 * Search Article
 * @param {*} action 
 */
function* searchArticleSegaAction(action) {
    try {
        const response = yield wishlistService.searchAritcle(action.payload);
        yield put(actions.successSearchAction(response.data.products));

    } catch (error) {
        yield put(actions.failedAction(error));
    }
}

/**
 * Request Wishlist
 * @param {*} action 
 */
function* requestWishlistSegaAction(action) {
    try {
        const response = yield wishlistService.getAllArticles(action.payload);
        yield put(actions.wishlistRequestSuccess(response.data));

    } catch (error) {
        yield put(actions.failedAction(error));
    }
}

/**
 * Add Article to Wishlist
 * @param {*} action 
 */
function* addArticleSegaAction(action) {
    console.log(action);
    try {
        yield wishlistService.addArticle(action.payload);
        yield put(actions.successAction());

    } catch (error) {
        yield put(actions.failedAction(error));
    }
}

/**
 * Remove Article from Wishlist
 * @param {*} action 
 */
function* removeArticleSegaAction(action) {
    console.log(action);
    try {
        yield wishlistService.removeArticle(action.payload);
        yield put(actions.successAction());

    } catch (error) {
        yield put(actions.failedAction(error));
    }
}

/**
 * sega wishlist watcher
 */
function* wishlistWatcher() {
    yield takeLatest(actionType.CREATE_WISHLIST, createWishlistSegaAction);
    yield takeLatest(actionType.REQUEST_WISHLIST, requestWishlistSegaAction);
}

/**
 * sega Article watcher
 */
function* articlesWatcher() {
    yield takeLatest(actionType.CREATE_ARTICLE, createArticleSegaAction);
    yield takeLatest(actionType.SEARCH_ARTICLE, searchArticleSegaAction);
    yield takeLatest(actionType.ADD_ARTICLE, addArticleSegaAction);
    yield takeLatest(actionType.REMOVE_ARTICLE, removeArticleSegaAction);
}

export default function* rootSaga() {
    yield all([
        wishlistWatcher(),
        articlesWatcher()
    ]);
}