// LIBs
import { useEffect, useState } from "react";

// COMPONENTs
import { Layout } from "./components/Layout";
import { Table } from "./components/Table";
import { Form } from "./components/Form"; 

// TYPEs
import MovieType from "./types/MovieType";

// HOOKs
import useFetchMovie from "./hooks/useFetchMovie";

export function App() {

  const [step, setStep] = useState<"table" | "form">("table");

  // INPUTs
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [evaluation, setEvaluation] = useState<number>(0);
  
  const { movie, movies, save, edit, cancel, del } = useFetchMovie(title, description, evaluation, setStep);

  useEffect(initilize, [movie]);

  function initilize() {
    setTitle(movie.title);
    setDescription(movie.description);
    setEvaluation(movie.evaluation);
  }

  return (
    <div
      className={`
        w-full h-screen bg-gradient-to-l
        to-gray-900 from-red-700
      `}
    >
      <div
        className={`
          max-w-screen-xl w-full px-4 h-full m-auto
          flex justify-center items-center
          md:px-0
        `}
      >
        <Layout
          title="Catalog Movie"
          movieOnly={movie.id ? true : false}
          step={step}
          onSave={save}
          onAdd={() => setStep('form')}
          onCancel={cancel}
        >
          {step === "table" && (
            <Table
              movies={movies}
              onEdit={(movie) => edit(movie)}
              onDel={(movie) => del(movie)}
            />
          )}

          {step === "form" && (
            <Form
              movie={movie}
              title={title}
              description={description}
              evaluation={evaluation}
              setTitle={setTitle}
              setDescription={setDescription}
              setEvaluation={setEvaluation}
            />
          )}
        </Layout>
      </div>
    </div>
  );
}
