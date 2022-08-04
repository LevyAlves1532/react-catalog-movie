// TYPEs
import MovieType from '../types/MovieType';

export function useMovie() {
  function movieFormat(title: string, description: string, evaluation: number, id: string = ""): MovieType {
    if(id) {
      return { title: title, description: description, evaluation: evaluation, id: id };
    } else {
      return { title: title, description: description, evaluation: evaluation };
    }
  }

  function movieVoid(): MovieType {
    return movieFormat("", "", 0);
  }

  return { movieVoid, movieFormat };
}

export function useBreakMovie(movie: MovieType) {
  function getTitle(): string {
    return movie.title;
  }

  function getDescription() {
    return movie.description;
  }

  function getEvaluation() {
    return movie.evaluation;
  }

  function getId() {
    if(movie.id) {
      return movie.id;
    }
  }

  return { getTitle, getDescription, getEvaluation, getId };
}