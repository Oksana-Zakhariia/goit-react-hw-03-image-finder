import axios from 'axios';
const APIKEY = '31626093-8a46cab1aceea7faa191d0f95';

export const fetchImages = async ({ name, page = '1' }) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
