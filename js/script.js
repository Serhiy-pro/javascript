
const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

const personalMovieDb = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
      b = prompt ('На сколько оцените его?',''),
      c = prompt ('Один из последних просмотренных фильмов?', ''),
      d = prompt ('На сколько оцените его?','');

personalMovieDb.movie[a] = b;
personalMovieDb.movie[c] = d;

console.log(personalMovieDb);