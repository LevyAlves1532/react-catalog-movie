// LIBs
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

// CONFIG
import { firestoreDB } from "./config";

// TYPEs
import MovieType from "../../types/MovieType";

export const addMovie = async (movie: MovieType) => {
  await addDoc(collection(firestoreDB, "movies"), {
    title: movie.title,
    description: movie.description,
    evaluation: movie.evaluation,
  });
};

export const getAllMovies = async () => {
  let data: MovieType[] = [];

  const querySnapshot = await getDocs(collection(firestoreDB, "movies"));
  querySnapshot.forEach((doc) => {
    let obj: MovieType = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      evaluation: doc.data().evaluation,
    };

    data.push(obj);
  });

  return data;
};

export const deleteMovie = async (movie: MovieType) => {
  if(movie.id) {
    await deleteDoc(doc(firestoreDB, "movies", movie.id));
  }
};

export const updateMovie = async (movie: MovieType) => {
  if(movie.id) {
    const movieDB = doc(firestoreDB, "movies", movie.id);

    await updateDoc(movieDB, {
      title: movie.title,
      description: movie.description,
      evaluation: movie.evaluation,
    });
  }
};
