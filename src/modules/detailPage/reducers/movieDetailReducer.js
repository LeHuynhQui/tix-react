import { GET_MOVIE_DETAIL_FAILURE, GET_MOVIE_DETAIL_REQUEST, GET_MOVIE_DETAIL_SUCCESS } from "../constants/movieDetail"

const initialState = {
    movie: "",
    isLoading: false,
    isError: false
}

export const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MOVIE_DETAIL_REQUEST: {

            return { ...state, isLoading: true }
        }

        case GET_MOVIE_DETAIL_SUCCESS: {

            return { ...state, movie: action.movie, isLoading: false}
        }

        case GET_MOVIE_DETAIL_FAILURE: {

            return { ...state, isLoading: false, isError: true }
        }

        default: {
            return { ...state }
        }

    }
}
