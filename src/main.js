import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchImagesApi } from './js/pixabay-api';
import {
  clearGallery,
  renderGallery,
  showLoader,
  hideLoader,
  loadMoreButton,
  showLoadMoreBtn,
  hideLoadMoreBtn,
} from './js/render-functions';

const form = document.querySelector('.form');
let inputValue = '';
let page = 1;

form.addEventListener('submit', onSubmitForm);
loadMoreButton.addEventListener('click', onClickLoadMoreBtn);

async function onSubmitForm(event) {
  event.preventDefault();
  page = 1;
  const imageName = new FormData(form).get('imageName').trim();

  if (!imageName) {
    showRequiredFillNotification();
    return;
  }
  hideLoadMoreBtn();
  clearGallery();
  await doRequestProcessing(imageName, page);

  inputValue = imageName;
  form.reset();
}

async function onClickLoadMoreBtn() {
  page++;
  await doRequestProcessing(inputValue, page);
}

async function doRequestProcessing(imageName, page) {
  showLoader();

  try {
    const { data } = await searchImagesApi(imageName, page);
    const { hits, totalHits } = data;
    if (!hits.length) {
      showNotFoundNotification();
      return;
    }
    renderGallery(hits);

    showLoadMoreBtn();

    if (totalHits <= 15) {
      hideLoadMoreBtn();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results",
        position: 'topRight',
        messageLineHeight: '150%',
      });
    }
  } catch (error) {
    showErrorNotification(error);
  } finally {
    hideLoader();
  }
}
function showErrorNotification(message) {
  iziToast.error({
    title: 'Error',
    message: `${message.toString()}`,
    position: 'topRight',
    messageLineHeight: '150%',
  });
}

function showNotFoundNotification() {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    messageLineHeight: '150%',
  });
}

function showRequiredFillNotification() {
  iziToast.warning({
    title: 'Caution',
    message: 'Please fill the input',
    position: 'topRight',
    messageLineHeight: '150%',
  });
}
