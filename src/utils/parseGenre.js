import { GENRE } from "./constants";

function parseGenreID(genre_ids) {
  let genresHash = {};
  for (let i in GENRE) {
    genresHash[GENRE[i]["id"]] = GENRE[i]["name"];
  }
  let genres = "";
  for (let i in genre_ids) {
    genres += genresHash[genre_ids[i]] + " ";
  }
  return genres;
}

export default parseGenreID;
