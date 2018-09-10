import { initialState } from '../../initialState/Gallery/initialState';
import * as actionType from '../../actions/Gallery/actionType';

export const GalleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_GRID_SUCCESS:
            return {
                ...state,
                photoGrid: action.photoGrid
            }
        case actionType.UPDATE_GALLERY_INFO:
            return {
                ...state,
                galleryInfo: action.galleryInfo
            }
        default:
            return state;
    }
}