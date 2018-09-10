import { watchGalleryFetch } from "./Gallery/GallerySaga";
import { watchImgageInfo } from "./ImageSlide/ImageSlide";
import { all } from 'redux-saga/effects';

export function* startAllSaga() {
    try {
        yield all([
            watchGalleryFetch(),
            watchImgageInfo()
        ])
    } catch (e) {
        console.log('Exeception in start saga ', e);
    }
}