import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { GalleryReducer } from './reducers/Gallery/GalleryReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ImageSlideReducer } from './reducers/ImageSlide/ImageSlideReducer';
import { startAllSaga } from './sagas/rootSaga';

//Combine all the reducers
const combinedReducers = combineReducers(
    {
        gallery: GalleryReducer,
        imagedata: ImageSlideReducer
    }

)
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
//Start saga middleware with the saga watchers
sagaMiddleware.run(startAllSaga)