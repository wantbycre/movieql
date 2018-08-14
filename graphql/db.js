let movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 12
    },
    {
        id: 1,
        name: "Avengers - The new Story",
        score: 12
    },
    {
        id: 2,
        name: "The Godfather 1",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 6
    },
];

// list
export const getMovies = () => movies;

// movie search
export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0]
}

// movie delete
export const deleteMovie = id => {
    // 선택된 id를 제외한 movies를 가져옴
    const cleanedMovies = movies.filter(movie => movie.id !== id);

    // 지워진 값이 있다면 기존배열에 대치 하고 return ture
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

// movie add
export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };

    movies.push(newMovie);
    return newMovie;
}
