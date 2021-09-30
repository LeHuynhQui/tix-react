import { GET_SEARCH_PHIM_VALUE, IS_HIDE_MODAL_MOVIE } from "../constants/admin"

const initialState = {
    modalMovie: false,
    searchPhimValue: null,
}

export const movieAdminReducer =  (state = initialState, action) => {
    switch (action.type) {

        case IS_HIDE_MODAL_MOVIE: {

            return { ...state, modalMovie: action.close }
        }

        case GET_SEARCH_PHIM_VALUE : {
            return { ...state, searchPhimValue: action.searchPhimValue }

        }

        default: {

            return { ...state }
        }
    }
}
