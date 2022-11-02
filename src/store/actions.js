export const FETCH_ALL_PICTURES_REQUEST = 'FETCH_ALL_PICTURES_REQUEST';
export const FETCH_ALL_PICTURES_SUCCESS = 'FETCH_ALL_PICTURES_SUCCESS';
export const FETCH_ALL_PICTURES_FAILURE = 'FETCH_ALL_PICTURES_FAILURE';

export const fetchAllPicturesRequest = () => ({type: FETCH_ALL_PICTURES_REQUEST});
export const fetchAllPicturesSuccess = data => ({type: FETCH_ALL_PICTURES_SUCCESS, payload: data});
export const fetchAllPicturesFailure = error => ({type: FETCH_ALL_PICTURES_FAILURE, payload: error});