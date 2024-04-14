import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImagesApi } from './js/pixabay-api';
import {
  clearGallery,
  renderGallery,
  showLoader,
  hideLoader,
  loadMoreButton,
  showLoadMoreBtn,
  hideLoadMoreBtn,
  scrollAfterRender,
} from './js/render-functions';

const form = document.querySelector('.form');

const PER_PAGE = 15;
let page = 1;
let inputValue = '';

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
  await doRequestProcessing({ imageName, page, perPage: PER_PAGE });

  inputValue = imageName;
  form.reset();
}

async function onClickLoadMoreBtn() {
  page++;
  await doRequestProcessing({ imageName: inputValue, page, perPage: PER_PAGE });
  scrollAfterRender();
}

async function doRequestProcessing({ imageName, page, perPage }) {
  showLoader();

  try {
    const { data } = await searchImagesApi({ imageName, page, perPage });
    const { hits, totalHits } = data;
    if (!hits.length) {
      showNotFoundNotification();
      return;
    }
    renderGallery(hits);

    showLoadMoreBtn();

    if (totalHits <= PER_PAGE) {
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
