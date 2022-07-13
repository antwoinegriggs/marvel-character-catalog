import { searchMarvelAPI } from "./marvelService.js";
const DEFAULT_SEARCH_TERM = "b";

// Run a search once on page load (before the user gets a chance to enter a new search term),
// so that the page starts with some characters already displayed:
searchMarvelAPI(DEFAULT_SEARCH_TERM);

// Handle search form submissions...
document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from doing its default behavior of refreshing the page.

  const searchInputElement = event.target.elements.search;
  searchMarvelAPI(searchInputElement.value || DEFAULT_SEARCH_TERM);
});
