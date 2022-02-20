// Future API call function should be from here

const FetchMovieData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default FetchMovieData;
