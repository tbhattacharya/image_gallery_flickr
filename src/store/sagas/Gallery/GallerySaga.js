import * as actionType from '../../actions/Gallery/actionType';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { fetchGalleryInformationApi } from '../../../service/HttpService';

export function* fetchGalleryInformation({ param }) {
    try {
        //Fetch the Gallery information from service and extract data from response
        const {data} = yield call(fetchGalleryInformationApi, param);
        if (data) {
            //The data has two parts hence split the data and store uoder separate tags in Redux
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
