import { 
    FETCHING_STREAM_DATA,
    FETCHING_STREAM_DATA_SUCCESS,
    FETCHING_STREAM_DATA_FAILURE 
    } from '../actions/'


const initialState = {
    streams: [],
    isLoading: false,
    error: ''
}

export const reducer = ( state = initialState , action ) => {
    switch (action.type) {
        case FETCHING_STREAM_DATA:
            return {
                ...state, isLoading: true,
                error: ''
            }
        case FETCHING_STREAM_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                streams: action.payload,
                error: ''
            }
        // case FETCHING_STREAM_DATA_FAILURE:
        //     return {
                
        //     }
        default:
            return state;
    }
}