export const API_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
export const API_KEY = "1f54bd990f1cdfb230adb312546d765d";
export const API_POSTER_IMAGE_URL = "https://image.tmdb.org/t/p/";

export const API_POSTER_SIZES = [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original",
];

export const DEFAULT_QUERY_PARAMS = {
  language: "en-US",
  region: "US",
  sort_by: "popularity.desc",
  include_adult: false,
  include_video: false,
  page: 1,
  primary_release_year: 2016,
};
