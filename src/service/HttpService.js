import axios from 'axios';

export const fetchGalleryInformationApi = galleryId => {
    return axios.get('http://localhost:8000/fetchGalleryInfo', {
        params: {
            gallery_id: galleryId
        }
    }).then(res => res.data);
}

export const fetchImageInformationApi = (imageId, secret)  => {
    return axios.get('http://localhost:8000/fetchPhotoInfo', {
        params: {
            photo_id: imageId,
            secret: secret
        }
    }).then(res => res.data);
}