import { initialState } from "../../initialState/ImageSlide/initialState";
import * as actionType from '../../actions/ImageSlide/actionTypes';

export const ImageSlideReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_IMAGE_INFO_SUCCESS:
            return {
                ...state,
                imageInfo: action.imageInfo
            }
        case actionType.CLEAR_IMAGE_INFO:
            return initialState;
        default:
            return state;
    }
}