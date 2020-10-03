const url = "http://www.omdbapi.com/?apikey=17cb3543";

export const search = (searchTerm, type = "series", page = 1) => {
    const fetchUrl = `${url}&s=${searchTerm}&type=${type}&page=${page}`;
    return fetch(fetchUrl)
      .then((r) => r.json())
      .catch(console.error);
}

export const get = (imdbId) => {
    const fetchUrl = `${url}&i=${imdbId}`;
    return fetch(fetchUrl)
      .then((r) => r.json())
      .catch(console.error);
}
