
const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

const personalMovieDb = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b = prompt ('На сколько оцените его?','');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {

            personalMovieDb.movie[a] = b;
        } else {
            i--;
        }
}

if (personalMovieDb.count <= 10){
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDb.count > 10 && personalMovieDb.count <= 30){
    console.log('Вы класический зритель');
} else if (personalMovieDb.count > 30){
    console.log('Вы киноман');
} else {
    console.log('error');
}

console.log(personalMovieDb);



// if (4 == 4) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// const num = 50;

// if (num < 50) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('many');
// } else {
//     console.log('Ok');
// }

// const numb = 50;
// (numb == 80) ? console.log('Ok') : console.log('error');

// const number = 50;

// switch (number) {
//     case 49:
//         console.log('error');
//         break;
//     case 51:
//         console.log('error');
//         break;
//     case 52:
//         console.log('yes');
//     break;
//     default:
//         console.log('no');
//     break;     
// }



// let newNum = 50;

// while (newNum <= 60){
//     console.log(newNum);
//     newNum++;
// }

// let nu = 50;

// do {
//     console.log(nu);
//     nu++;
// }
// while (nu < 60);

// for (let i = 1; i < 8; i++){
//     console.log(nu);
//     nu++;
// }