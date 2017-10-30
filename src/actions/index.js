import axios from 'axios';

const ROOT_URL = `https://jsonplaceholder.typicode.com/posts`;

export const FETCH_POST = 'FETCH_POST';
export const POST_SELECTED = 'POST_SELECTED';

export function fetchPost(city) {
    const url = ROOT_URL;
    const request = axios.get(url);
    //console.log(request);
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function selectPost(post) {
    return {
        type: POST_SELECTED,
        payload: post
    };
}