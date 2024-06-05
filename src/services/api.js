// function request from api https://api.unsplash.com

import axios from 'axios';

const requestImageByQuery = async (query, currentPage, perPage) => {
  const API_KEY = 'wA65yMsuVtaGEz26VTfXV2EuMFpmBDIORhh0BZRN2ls';
  const BASE_URL = 'https://api.unsplash.com/search/photos';
  const config = {
    params: {
      client_id: API_KEY,
      query,
      page: currentPage,
      per_page: perPage,
    },
  };

  const { data } = await axios.get(`${BASE_URL}`, config);
  return data;
};

export { requestImageByQuery };
