// ICONs
import { Film } from "./Icons";

// COMPONENTs
import { Button } from "./Button";

interface Props {
  title: string;
  step: "table" | "form";
  movieOnly?: boolean;
  onSave?: () => void;
  onAdd?: () => void;
  onCancel?: () => void;
  children?: any;
}

export function Layout(props: Props) {
  const movieOnly = props.movieOnly || false;

  return (
    <div
      className={`
        w-full bg-neutral-900 p-4 rounded-lg
        border-b-4 border-solid border-red-500
        md:w-2/4
      `}
    >
      <div className={`flex justify-between items-center mb-4`}>
        <h1 className="text-xl text-gray-300 cursor-default">{props.title}</h1>

        <span className="text-gray-300">
          <Film />
        </span>
      </div>

      <div
        className={`
          p-4 rounded-lg bg-neutral-800 mb-4
          overflow-x-auto
        `}
      >
        {props.children}
      </div>

      <div className="flex justify-end">
        {props.step === "table" && (
          <Button label="Adicionar Filme" onClick={props.onAdd} />
        )}

        {props.step === "form" && (
          <>
            <Button
              label={movieOnly ? "Salvar" : "Adicionar"}
              className="mr-4"
              onClick={props.onSave}
            />

            <Button label="Cancelar" onClick={props.onCancel} />
          </>
        )}
      </div>
    </div>
  );
}
