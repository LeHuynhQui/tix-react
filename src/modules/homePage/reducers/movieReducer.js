import { GET_MOVIE_LIST_FAILURE, GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, SHOW_TRAILER } from "../constants/movie"

const initialState = {
    movies: [],
    isLoading : false,
    isError: false,
    show: false,
    trailer: null
}

export const movieReducer =  (state = initialState, action) => {
    switch (action.type) {

        case GET_MOVIE_LIST_REQUEST: {
            return { ...state, isLoading: true }
        }

        case GET_MOVIE_LIST_SUCCESS: {

            const thoiLuong = ["120", "90", "110", "100", "89", "115", "130"]

            let mangMovie = [];

            action.movies.map(movie => {
                mangMovie.push({...movie, thoiLuong: thoiLuong[Math.floor(Math.random()*7)]})
                return null
            })


            return { ...state, movies: mangMovie , isLoading: false }
        }

        case GET_MOVIE_LIST_FAILURE: {

            return { ...state, isLoading: false, isError: true }
        }

        case SHOW_TRAILER: {
            return{...state, show: action.value, trailer: action.trailer }
        }

        default: {

            return { ...state }
        }
    }
}
