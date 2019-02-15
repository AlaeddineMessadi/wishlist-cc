import * as actionType from '../actions/actionTypes';
import * as actions from '../actions/actions';
import { put, takeLatest, takeEvery, all } from 'redux-saga/effects';



import { wishlistService } from '../services/wishlist.service';

function* createWishlistSegaAction(action) {
    try {
        const response = yield wishlistService.createWishlist(action.payload.name);

        sessionStorage.setItem('wishlist_id',response.data.wishlist.id)
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
        let articles =[];
        const response = yield wishlistService.searchAritcle(action.payload);
        if (response) {
            articles = response.data.products;
            
            articles.map((item) => {
                wishlistService.createArticle(item)
            })
        }
        yield put(actions.successSearchAction(articles));

    } catch (error) {
        yield put(actions.failedAction(error));
    }
}


function* createWishlistWatcher() {
    yield takeLatest(actionType.CREATE_WISHLIST, createWishlistSegaAction);
    yield takeLatest(actionType.CREATE_ARTICLE, createArticleSegaAction);
    yield takeLatest(actionType.SEARCH_ARTICLE, searchArticleSegaAction);
}



export default function* rootSaga() {
    yield all([
        createWishlistWatcher()
    ]);
}