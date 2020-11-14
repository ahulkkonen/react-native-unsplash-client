import { UNSPLASH_API_KEY } from "@env";

const EXAMPLE_RESPONSE = require('./res.json');
const API_KEY = UNSPLASH_API_KEY;
const API_ENDPOINT = 'https://api.unsplash.com';
const API_COUNT = 30;
const API_ORIENTATION = 'landscape';
const API_FEATURED = true;

async function callApi(method: string, url: string, path: string, queryParams?: string) {
    // Disable for now so we dont go over the api limit per hour
    /*const res = await fetch(`${url}${path}?client_id=${API_KEY}${queryParams}`, {
        method,
        headers: {
            Accept: 'application/json'
        }
    });
    
    return res.json();*/

    return EXAMPLE_RESPONSE;
}

function generateQueryParams() {
    let queryParams = '';

    queryParams = queryParams.concat(`&orientation=${API_ORIENTATION}`);
    queryParams = queryParams.concat(`&count=${API_COUNT}`);

    if (API_FEATURED) queryParams = queryParams.concat('&featured');

    return queryParams;
}


export async function fetchImages() {
    return await callApi('get', API_ENDPOINT, '/photos/random', generateQueryParams())
}