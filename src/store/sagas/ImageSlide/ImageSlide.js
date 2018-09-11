import * as actionType from '../../actions/ImageSlide/actionTypes';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { fetchImageInformationApi } from '../../../service/HttpService';

function* fetchImageInfo({ param }) {
    try {
        //Fetch image details from service
        const { data } = yield call(fetchImageInformationApi, param.id, param.secret);
        if (data) {
            //Only image related information is needed, discard the rest
            yield put({ type: actionType.FETCH_IMAGE_INFO_SUCCESS, imageInfo: data.photo });
        }
    } catch (e) {
        console.log('Exception in fetching Image information', e);
    }
}

function* clearImageInfo() {
    try {
        yield put({ type: actionType.CLEAR_IMAGE_INFO });
    } catch (e) {
        console.log('Exception in clearing Image information', e);
    }
}

export function* watchImgageInfo() {
    try {
        yield all([
            takeLatest(actionType.FETCH_IMAGE_INFO_REQ, fetchImageInfo),
            takeLatest(actionType.CLEAR_IMAGE_INFO_REQ, clearImageInfo)
        ]);
    } catch (e) {
        console.log('Exception in Imgae info saga watcher ', e);
    }
}