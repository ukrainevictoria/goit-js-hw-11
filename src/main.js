
// Імпорт CSS для iziToast
import "izitoast/dist/css/iziToast.min.css";

// Імпорт бібліотек
import iziToast from "izitoast"; 
import { getImagesByQuery } from "./js/pixabay-api.js"; 
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

// DOM елементи
const searchInput = document.querySelector(".form input[name='search-text']");
const searchForm = document.querySelector(".form");

// Обробник сабміту форми
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    iziToast.error({ title: "Error", message: "Please enter a search term!" });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data?.hits?.length) {
      iziToast.info({ title: "No results", message: "No images found." });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    console.error(error); // для відлагодження у консолі
    iziToast.error({ title: "Error", message: "Failed to fetch images." });
  } finally {
    hideLoader();
  }
});
console.log('Main JS loaded');