const API_KEY = "22939354-d4c9986b85a6f5174d41c17d7";
const BASE_URL = "https://pixabay.com/api/?";

async function imageAPI(query, page) {
  const response = await fetch(
    `${BASE_URL}q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error(`no images on request`));
}
const api = { imageAPI };
export default api;
