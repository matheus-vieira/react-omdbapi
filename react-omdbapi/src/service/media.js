const url = "http://www.omdbapi.com/?apikey=17cb3543";
let searchUrl = "";

export const search = (searchTerm, type = "series") => {
  searchUrl = `${url}&s=${searchTerm}&type=${type}`;
  return fetch(searchUrl)
    .then((r) => r.json())
    .catch(console.error);
};

export const loadMore = (page = 1) => {
  const loadMoreUrl = `${searchUrl}&page=${page}`;
  return fetch(loadMoreUrl)
    .then((r) => r.json())
    .catch(console.error);
};

export const get = (imdbId) => {
  const fetchUrl = `${url}&i=${imdbId}`;
  return fetch(fetchUrl)
    .then((r) => r.json())
    .catch(console.error);
};
