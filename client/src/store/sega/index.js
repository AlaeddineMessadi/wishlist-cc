import * as actionType from '../actions/actionTypes';
import * as actions from '../actions/actions';
import { put, takeLatest, takeEvery, all } from 'redux-saga/effects';



import { wishlistService } from '../services/wishlist.service';

function* createWishlistSegaAction(action) {
    try {
        const data = yield wishlistService.createWishlist(action.payload.name);
        console.log(data)
        yield put(actions.successAction());
    } catch (error) {
        yield put(actions.failedAction(error.response.data));
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


function* createWishlistWatcher() {
    yield takeLatest(actionType.CREATE_WISHLIST, createWishlistSegaAction);
}
function* createArticleWatcher() {
    yield takeLatest(actionType.CREATE_ARTICLE, createArticleSegaAction);
}


export default function* rootSaga() {
    yield all([
        createWishlistWatcher(),
        createArticleWatcher()
    ]);
}