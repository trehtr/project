let number = 5;
const leftBorderWidth = 1;
number = 10;
console.log(number);

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('asfa', ''),
      b = prompt('dskg', ''),
      c = prompt('f', '')

personalMovieDB.movies[a] = b;