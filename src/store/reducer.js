import {FETCH_ALL_PICTURES_FAILURE, FETCH_ALL_PICTURES_REQUEST, FETCH_ALL_PICTURES_SUCCESS} from "./actions";

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
        default:
            return state;
    }
};

export default reducer;