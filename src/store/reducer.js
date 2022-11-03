import {
    FETCH_ALL_PICTURES_FAILURE,
    FETCH_ALL_PICTURES_REQUEST,
    FETCH_ALL_PICTURES_SUCCESS, FETCH_PICTURE_FAILURE,
    FETCH_PICTURE_REQUEST, FETCH_PICTURE_SUCCESS
} from "./actions";

const initialState = {
    pictures: [],
    picture: null,
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_PICTURES_REQUEST:
            return {...state, error: null, loading: true};
        case FETCH_ALL_PICTURES_SUCCESS:
            return {...state, loading: false, pictures: action.payload};
        case FETCH_ALL_PICTURES_FAILURE:
            return {...state, loading: false, error: action.payload};

        case FETCH_PICTURE_REQUEST:
            return {...state, error: null, loading: true};
        case FETCH_PICTURE_SUCCESS:
            return {...state, loading: false, picture: action.payload};
        case FETCH_PICTURE_FAILURE:
            return {...state, loading: false, error: action.payload};

        default:
            return state;
    }
};

export default reducer;