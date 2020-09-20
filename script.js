const allInfoFromFilms = movies;

const addMoviesToDom = (filmsDisplayedOnScreen) => {
  const displayOnScreen = document.getElementById("displayFilmTitles");
  const arr = filmsDisplayedOnScreen.map(function (movie) {
  const imdb = "https://www.imdb.com/title/" + movie.imdbID;
    return ("<div class='list-item'><a href=" + imdb + " target='_blank'><img src=" +
      movie.Poster + " ></a></div>"
    );
  });
  arr.forEach(function (movie) {
    displayOnScreen.innerHTML += movie;
  });
};

addMoviesToDom(allInfoFromFilms);

const filmButtonEvent = () => {
  const filmButtons = document.querySelectorAll("input[name='movie']");
  filmButtons.forEach(function (filmButton) {
    filmButton.addEventListener("change", function (event) {
      changeEvent(event.target.value);
    });
  });
};

filmButtonEvent();

const changeEvent = (movieFilterChoise) => {
  switch (movieFilterChoise) {
    case "newestMovies":
      newestMoviesFilter();
      break;
    case "avengers":
      moviesFilter("Avenger");
      break;
    case "x-Men":
      moviesFilter("X-Men");
      break;
    case "princess":
      moviesFilter("Princess");
      break;
    case "batman":
      moviesFilter("Batman");
      break;
  }
};
const moviesFilter = (movieTitle) => {
  const filteredMovie = movies.filter(function (movie) {
    return movie.Title.includes(movieTitle);
  });
  removeList();
  addMoviesToDom(filteredMovie);
};

const newestMoviesFilter = () => {
  const filteredNewestMovies = movies.filter(function (movie) {
    return parseInt(movie.Year) >= 2014;
  });
  removeList();
  addMoviesToDom(filteredNewestMovies);
};
const removeList = () => {
  const listItems = document.querySelectorAll(".list-item");
  listItems.forEach((item) => item.remove());
};

