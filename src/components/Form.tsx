// LIBs
import React from "react";

// COMPONENTs
import { Input } from "./Input";

// TYPEs
import MovieType from "../types/MovieType";

interface Props {
  movie: MovieType;
  title: string;
  description: string;
  evaluation: number;
  setTitle: React.Dispatch<string>;
  setDescription: React.Dispatch<string>;
  setEvaluation: React.Dispatch<number>;
}

export function Form(props: Props) {
  function onChangeNumber(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let value = e.target.value;

    if (value.length > 0) {
      if (parseFloat(value) > 5) {
        value = "5";
      }

      if (parseFloat(value) < 0) {
        value = "0";
      }

      props.setEvaluation(parseFloat(value));
    } else {
      props.setEvaluation(0);
    }
  }

  return (
    <>
      {props.movie.id && (
        <Input
          label="Código"
          readOnly
          value={props.movie.id}
          onChange={() => {}}
        />
      )}

      <Input
        label="Título"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      />

      <Input
        label="Descrição"
        type="textarea"
        value={props.description}
        onChange={(e) => props.setDescription(e.target.value)}
      />

      <Input
        label="Avaliação"
        type="number"
        value={props.evaluation}
        onChange={onChangeNumber}
      />
    </>
  );
}
