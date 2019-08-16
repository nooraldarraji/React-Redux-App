import Axios from 'axios';
export const FETCHING_STREAM_DATA = 'FETCHING_STREAM_DATA';
export const FETCHING_STREAM_DATA_SUCCESS = 'FETCHING_STREAM_DATA_SUCCESS';
export const FETCHING_STREAM_DATA_FAILURE = 'FETCHING_STREAM_DATA_FAILURE';

export const getData = () => {
    return dispath => {
        dispath({ type : FETCHING_STREAM_DATA })
        Axios.get('https://www.scorebat.com/video-api/v1/')
        .then(res => console.log(res.data))
        .then(res => {
            dispath({ type: FETCHING_STREAM_DATA_SUCCESS, payload: res.data})
        })
        .catch(error => {
            dispath({ type: FETCHING_STREAM_DATA_FAILURE, payload: error.response})
        })
    }
}