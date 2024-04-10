import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export const renderGallery = imagesList => {
  const galleryItemsMarkup = imagesList.reduce((acc, imageData) => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = imageData;

    acc += `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              width="360"
              height="200"
              loading="lazy"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <ul class="description-list">
            <li>Likes <span>${likes}</span></li>
            <li>Views <span>${views}</span></li>
            <li>Comments <span>${comments}</span></li>
            <li>Downloads <span>${downloads}</span></li>
          </ul>
        </li>
        `;

    return acc;
  }, '');
  galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

  showImageOnClick();
};

export const clearGallery = () => {
  galleryContainer.innerHTML = '';
};

const showImageOnClick = () => {
  const simplelightboxOptions = {
    captionsData: 'alt',
    captionDelay: 250,
  };

  let gallery = new SimpleLightbox('.gallery a', simplelightboxOptions);
  gallery.on('show.simplelightbox');
  gallery.refresh();
};

export const showLoader = () => {
  loader.classList.remove('hide');
};
export const hideLoader = () => {
  loader.classList.add('hide');
};
