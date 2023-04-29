import { movies } from "../movies";
import { ADD_FAV, REMOVE_FAV, NEXT_MOV, PREV_MOV } from "../actions/actions";

const initialState = {
    movies: movies,
    favorites: [],
    sira: 0,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            const favID = action.payload;
            const newMovieList = state.movies.filter((m) => m.id !== favID);
            const favMov = state.movies.find( fav => fav.id === favID )
            return {
                ...state,
                favorites: [...state.favorites, favMov],
                movies: newMovieList,
                sira: state.sira === newMovieList.length ? state.sira - 1 : state.sira 
            }

        case NEXT_MOV:
            return {
                ...state,
                sira: state.sira + 1
            }
        
        case PREV_MOV:
            return {
                ...state,
                sira: state.sira - 1
            }

        case REMOVE_FAV:
            const removeFav = action.payload;
            const newFavs = state.favorites.filter(a => a.id !== removeFav);
            const fav2mov = state.favorites.find(a => a.id === removeFav);
            const movList = [...state.movies, fav2mov]
            return {
                ...state,
                favorites: newFavs,
                movies: movList
            }
        default:
            return state;
    }
}

export default reducer;