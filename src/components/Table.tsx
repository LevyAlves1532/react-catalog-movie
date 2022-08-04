// TYPEs
import MovieType from "../types/MovieType";

// ICONs
import { Star, Edit, Trash } from "./Icons";

interface Props {
  movies: MovieType[];
  onEdit?: (movie: MovieType) => void;
  onDel?: (movie: MovieType) => void;
}

export function Table(props: Props) {
  function header() {
    return (
      <tr>
        <th className="pl-6 py-4 text-white cursor-default font-medium text-left">
          Código
        </th>
        <th className="pl-6 py-4 text-white cursor-default font-medium text-left">
          Título
        </th>
        <th className="pl-6 py-4 text-white cursor-default font-medium text-left">
          Avaliação
        </th>
        <th className="px-2 py-4 text-white cursor-default font-medium">
          Ações
        </th>
      </tr>
    );
  }

  function body() {
    if (props.movies.length > 0) {
      return props.movies.map((item, key) => (
        <tr
          className={`${key % 2 === 0 ? "bg-neutral-600" : "bg-neutral-700"}`}
          key={item.id}
        >
          <td className="pl-6 py-4 text-white cursor-default font-medium">
            <span className="w-20 block overflow-hidden whitespace-nowrap text-ellipsis">
              {item.id}
            </span>
          </td>
          <td className="pl-6 py-4 text-white cursor-default font-medium">
            {item.title}
          </td>
          <td className="pl-6 py-4 text-white cursor-default font-medium">
            <div className="flex items-center">
              <span className="mr-2 text-yellow-400">
                <Star />
              </span>
              {item.evaluation.toString().replace(".", ",")}
            </div>
          </td>
          <td className="px-2 py-4 text-white cursor-default font-medium flex justify-center">
            {renderActions(item)}
          </td>
        </tr>
      ));
    } else {
      return false;
    }
  }

  function renderActions(movie: MovieType) {
    if (movie.id) {
      return (
        <>
          <button
            className={`
              p-2 rounded-full ease-linear duration-300 
              mr-2 hover:bg-white hover:text-green-700
            `}
            onClick={() => props.onEdit?.(movie)}
          >
            <Edit />
          </button>

          <button
            className={`
              p-2 rounded-full ease-linear duration-300 
              mr-2 hover:bg-white hover:text-red-700
            `}
            onClick={() => props.onDel?.(movie)}
          >
            <Trash />
          </button>
        </>
      );
    } else {
      return false;
    }
  }

  return (
    <table className="w-96 md:w-full rounded-2xl overflow-hidden">
      <thead className="bg-gradient-to-r">{header()}</thead>

      <tbody>{body()}</tbody>
    </table>
  );
}
