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

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  clearGallery();

  const imageName = new FormData(form).get('imageName').trim();

  if (!imageName) {
    showRequiredFillNotification();
    return;
  }
  showLoader();
  searchImagesApi(imageName)
    .then(data => {
      const { hits, total } = data;
      if (!hits.length || !total) {
        showNotFoundNotification();
        return;
      }
      renderGallery(hits);
    })
    .catch(error => showErrorNotification(error))
    .finally(() => hideLoader());
  form.reset();
}

function showErrorNotification(message) {
  iziToast.error({
    title: 'Error',
    message: `${message.toString()}`,
    position: 'topRight',
    messageColor: '#fff',
    messageLineHeight: '150%',
    backgroundColor: 'red',
  });
}

function showNotFoundNotification() {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    messageColor: '#fff',
    messageLineHeight: '150%',
    backgroundColor: 'red',
  });
}

function showRequiredFillNotification() {
  iziToast.warning({
    title: 'Caution',
    message: 'Please fill the input',
    position: 'topRight',
    messageColor: '#fff',
    messageLineHeight: '150%',
    backgroundColor: 'orange',
  });
}
