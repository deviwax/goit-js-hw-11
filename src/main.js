import { GetImagesByQuery } from "./js/pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search term!',
            position: 'topRight',
        });
        return;
    }

    showLoader();
    clearGallery();

    try {
        const data = await GetImagesByQuery(query);

        if (data.hits.length === 0) {
            iziToast.info({
                title: '❌',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                backgroundColor: '#ef4040',
            });
            return;
        }

        createGallery(data.hits);
    } catch (error) {
        iziToast.error({
            title: 'Error',
            position: 'topRight',
            message: 'Something went wrong. Please try again later.',
        });
    } finally {
        hideLoader();
    }
});