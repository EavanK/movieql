let movies = [
  {
    id: 1,
    name: "Star Wars - The new one",
    score: 1,
  },
  {
    id: 2,
    name: "Avengers - The new one",
    score: 8,
  },
  {
    id: 3,
    name: "The Godfather I",
    score: 99,
  },
  {
    id: 4,
    name: "Logan",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => movies.filter((movie) => movie.id === id)[0];

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  }
  return false;
};
