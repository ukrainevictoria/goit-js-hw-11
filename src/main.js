import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

// DOM elements
const searchForm = document.querySelector(".form");
const searchInput = document.querySelector(".form input[name='search-text']");
const gallery = document.querySelector(".gallery");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({
      title: "Error",
      message: "Please enter a search term!",
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits.length) {
      iziToast.info({
        title: "No results",
        message: "Sorry, there are no images matching your search query.",
      });
      return;
    }

    createGallery(data.hits);

    // Smooth scroll to gallery
    gallery.scrollIntoView({
      behavior: "smooth",
    });
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later.",
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});