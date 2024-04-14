import axios from 'axios';

const PIXABAY_URL = 'https://pixabay.com/api/';
const PIXABAY_KEY = '43177088-2530548a60ff9c950be2fcaec';

export const searchImagesApi = async (imageName = '', page = 1) => {
  const params = {
    key: PIXABAY_KEY,
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: 15,
  };
  return await axios(PIXABAY_URL, { params });
};
