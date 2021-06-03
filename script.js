const namber0fFilms = +prompt('Nechta kino korgansiz?', '');

const personalMovieDB = {
    count: namber0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Ohirgi martda qanaqa kino korgansiz?', ''),
      b = prompt('Nechi bohoga boholisz?', ''),
      c = prompt('Ohirgi martda korgan kino haqida gapirib berin!', ''),
      d = prompt('Nechi bohoga boholisz', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);