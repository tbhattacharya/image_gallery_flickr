import axios from 'axios';

export const fetchGalleryInformationApi = galleryId => {
    return axios.get('http://localhost:8000/fetchGalleryInfo', {
        params: {
            gallery_id: galleryId
        }
    }).then(res => res.data);
}

export const fetchImageInformationApi = imageId => {
    return axios.get('http://localhost:8000/fetchImageInfo', {
        params: {
            imageId: imageId
        }
    }).then(res => res.data);
}