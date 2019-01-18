let movies = [{
        id: 0,
        name: "Star Wars - The new one",
        score: 1,
    },
    {
        id: 1,
        name: "Avengers - the new one",
        score: 1,
    },
    {
        id: 2,
        name: "The Gotfather I",
        score: 99,
    },
    {
        id: 3,
        name: "Logan",
        score: 2,
    },
]

// 영화 목록 출력
export const getMovies = () => movies;

// 영화 특정 Id 출력
export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

// 특정 영화 Delete
export const deleteMovie = id => {
    const cleanMovie = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanMovie.length) {
        movies = cleanMovie;
        return true;
    } else {
        return false;
    }
}

// 영화 추가
export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score
    }

    movies.push(newMovie);
    return newMovie
}