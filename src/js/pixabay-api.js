const PIXABAY_URL = 'https://pixabay.com/api/';
const PIXABAY_KEY = '43177088-2530548a60ff9c950be2fcaec';
const CURRENT_PIXABAY_URL = `${PIXABAY_URL}?key=${PIXABAY_KEY}&image_type=photo&orientation=horizontal&safesearch=true`;

export const searchImagesApi = (imageName = '') => {
  return fetch(`${CURRENT_PIXABAY_URL}&q=${imageName}`).then(response =>
    response.json()
  );
};
