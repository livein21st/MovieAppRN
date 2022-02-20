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
export const GENRE = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
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
