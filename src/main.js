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
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more-btn');

form.addEventListener('submit', onSubmitForm);
loadMoreButton.addEventListener('click', onClickLoadMoreBtn);

async function onSubmitForm(event) {
  event.preventDefault();
  clearGallery();

  //refactoring
  loadMoreButton.classList.add('is-hidden');

  const imageName = new FormData(form).get('imageName').trim();

  if (!imageName) {
    showRequiredFillNotification();
    return;
  }
  showLoader();

  try {
    const { data } = await searchImagesApi(imageName);
    const { hits, totalHits } = data;
    if (!hits.length) {
      showNotFoundNotification();
      return;
    }
    renderGallery(hits);

    //refactoring
    loadMoreButton.classList.remove('is-hidden');

    if (totalHits <= 15) {
      //refactoring
      loadMoreButton.classList.add('is-hidden');
      //refactoring
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

  form.reset();
}

function onClickLoadMoreBtn() {
  console.log('click!');
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
