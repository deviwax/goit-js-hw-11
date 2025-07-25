import axios from "axios";

const API_KEY = '51470641-9c85038c1716f2f4dcdf71359';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch images'); 
    }
}