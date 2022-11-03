export const FETCH_ALL_PICTURES_REQUEST = 'FETCH_ALL_PICTURES_REQUEST';
export const FETCH_ALL_PICTURES_SUCCESS = 'FETCH_ALL_PICTURES_SUCCESS';
export const FETCH_ALL_PICTURES_FAILURE = 'FETCH_ALL_PICTURES_FAILURE';

export const fetchAllPicturesRequest = () => ({type: FETCH_ALL_PICTURES_REQUEST});
export const fetchAllPicturesSuccess = data => ({type: FETCH_ALL_PICTURES_SUCCESS, payload: data});
export const fetchAllPicturesFailure = error => ({type: FETCH_ALL_PICTURES_FAILURE, payload: error});

export const FETCH_PICTURE_REQUEST = 'FETCH_PICTURE_REQUEST';
export const FETCH_PICTURE_SUCCESS = 'FETCH_PICTURE_SUCCESS';
export const FETCH_PICTURE_FAILURE = 'FETCH_PICTURE_FAILURE';

export const fetchPictureRequest = () => ({type: FETCH_PICTURE_REQUEST});
export const fetchPictureSuccess = data => ({type: FETCH_PICTURE_SUCCESS, payload: data});
export const fetchPictureFailure = error => ({type: FETCH_PICTURE_FAILURE, payload: error});