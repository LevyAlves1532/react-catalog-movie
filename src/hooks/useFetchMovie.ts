// LIBs
import React, { useState, useEffect } from 'react';

// TYPEs
import MovieType from '../types/MovieType';

// UTILs
import { addMovie, getAllMovies, deleteMovie, updateMovie } from "../utils/firebase/firestore";

// HOOKs
import  { useMovie } from './movie';

export default function useFetchMovie(
  title: string, 
  description: string, 
  evaluation: number, 
  setStep: React.Dispatch<"table" | "form">
) {
  // MY HOOKs
  const { movieVoid, movieFormat } = useMovie();
  
  const [movie, setMovie] = useState<MovieType>(movieVoid());
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    allMovies();
  }, []);

  async function allMovies() {
    setMovies(await getAllMovies());
  }

  async function save() {
    if (movie.id) {
      await updateMovie(movieFormat(title, description, evaluation, movie.id));
    } else {
      if(title.length > 0 && description.length > 0) {        
        await addMovie(movieFormat(title, description, evaluation));
      }
    }

    await allMovies();
    setMovie(movieVoid());

    setStep("table");
  }

  function edit(movie: MovieType) {
    setMovie(movie);
    setStep("form");
  }

  async function del(movie: MovieType) {
    await deleteMovie(movie);
    setMovies(await getAllMovies());
  }

  function cancel() {    
    setMovie(movieVoid());
    setStep("table");
  }

  return { movie, movies, save, edit, del, cancel };
}