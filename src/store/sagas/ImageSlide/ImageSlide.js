import * as actionType from '../../actions/ImageSlide/actionTypes';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { fetchImageInformationApi } from '../../../service/HttpService';

function* fetchImageInfo({ params }) {
    try {
        console.log(params);
        const data = yield call(fetchImageInformationApi, params);
        if (data) {
            yield put({ type: actionType.FETCH_IMAGE_INFO_SUCCESS, imageInfo: data });
        }
    } catch (e) {
        console.log('Exception in fetching Image information', e);
    }
}

function* clearImageInfo() {
    try {
        while (true) {
            yield put({ type: actionType.CLEAR_IMAGE_INFO });
        }
    } catch (e) {
        console.log('Exception in clearing Image information', e);
    }
}

export function* watchImgageInfo() {
    try {
        yield all ([
            takeLatest (actionType.FETCH_IMAGE_INFO_REQ, fetchImageInfo),
            takeLatest (actionType.CLEAR_IMAGE_INFO_REQ, clearImageInfo)
        ]);
    } catch (e) {
        console.log('Exception in Imgae info saga watcher ', e);
    }
}