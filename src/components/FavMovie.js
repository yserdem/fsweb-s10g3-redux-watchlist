import { useDispatch } from "react-redux";
import { REMOVE_FAV } from "../actions/actions";

export default function FavMovie({ title, id }) {
  const dispatch = useDispatch();

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button 
      className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      onClick={() => dispatch({ type: REMOVE_FAV, payload: id })}>
        Çıkar
      </button>
    </div>
  );
}
