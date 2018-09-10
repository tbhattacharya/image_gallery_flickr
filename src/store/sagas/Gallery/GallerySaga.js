import * as actionType from '../../actions/Gallery/actionType';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { fetchGalleryInformationApi } from '../../../service/HttpService';

export function* fetchGalleryInformation({ param }) {
    try {
        const {data} = yield call(fetchGalleryInformationApi, param);
        if (data) {
            yield put({ type: actionType.FETCH_GRID_SUCCESS, photoGrid: data.photos.photo });
            yield put({ type: actionType.UPDATE_GALLERY_INFO, galleryInfo: data.gallery });
        }
    } catch (e) {
        console.log('Exception in fetching gallery information', e);
    }
}

export function* watchGalleryFetch() {
    try {
        yield all([takeLatest(actionType.FETCH_GRID_REQ, fetchGalleryInformation)]);
    } catch (e) {
        console.log('Excption in GalleryFetchSaga Watcher ', e);
    }
}
