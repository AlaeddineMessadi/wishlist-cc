import * as actionType from '../actions/actionTypes';
import * as actions from '../actions/actions';
import { put, takeLatest, takeEvery, all } from 'redux-saga/effects';



import { wishlistService } from '../services/wishlist.service';

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

function* createArticleSegaAction(action) {
    try {
        const data = yield wishlistService.createArticle(action.payload.article);
        yield put(actions.successAction());
    } catch (error) {
        yield put(actions.failedAction(error.response.data));
    }
}

function* searchArticleSegaAction(action) {
    try {
        const response = yield wishlistService.searchAritcle(action.payload);
        yield put(actions.successSearchAction(response.data.products));

    } catch (error) {
        yield put(actions.failedAction(error));
    }
}

function* requestWishlistSegaAction(action) {
    try {
        let wishlist = [];
        const response = yield wishlistService.getAllArticles(action.payload);

        if (response) {
            wishlist = response.data.articles;
        }
        yield put(actions.wishlistRequestSuccess(wishlist));

    } catch (error) {
        yield put(actions.failedAction(error));
    }
}

function* addArticleSegaAction(action) {
    console.log(action);
    try {
        const response = yield wishlistService.addArticle(action.payload);
        yield put(actions.successAction());

    } catch (error) {
        yield put(actions.failedAction(error));
    }
}

function* removeArticleSegaAction(action) {
    console.log(action);
    try {
        const response = yield wishlistService.removeArticle(action.payload);
        yield put(actions.successAction());

    } catch (error) {
        yield put(actions.failedAction(error));
    }
}


function* wishlistWatcher() {
    yield takeLatest(actionType.CREATE_WISHLIST, createWishlistSegaAction);
    yield takeLatest(actionType.CREATE_ARTICLE, createArticleSegaAction);
    yield takeLatest(actionType.SEARCH_ARTICLE, searchArticleSegaAction);
    yield takeLatest(actionType.REQUEST_WISHLIST, requestWishlistSegaAction);
    yield takeLatest(actionType.ADD_ARTICLE, addArticleSegaAction);
    yield takeLatest(actionType.REMOVE_ARTICLE, removeArticleSegaAction);

}



export default function* rootSaga() {
    yield all([
        wishlistWatcher()
    ]);
}