import { IS_HIDE_MODAL_MOVIE } from "../constants/admin"

const initialState = {
    modalMovie: false,
}

export const movieAdminReducer =  (state = initialState, action) => {
    switch (action.type) {

        case IS_HIDE_MODAL_MOVIE: {

            return { ...state, modalMovie: action.close }
        }

        default: {

            return { ...state }
        }
    }
}
