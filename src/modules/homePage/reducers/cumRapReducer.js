import { GET_THONG_TIN_CUM_RAP_FAILURE, GET_THONG_TIN_CUM_RAP_REQUEST, GET_THONG_TIN_CUM_RAP_SUCCESS } from "../constants/movie"

const initialState = {
    cumRap: null,
    isLoading: false,
    error: null
}

export const cunRapReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_THONG_TIN_CUM_RAP_REQUEST: {

            return { ...state, isLoading: true }
        }

        case GET_THONG_TIN_CUM_RAP_SUCCESS: {

            return { ...state, isLoading: false, cumRap: action.data }
        }

        case GET_THONG_TIN_CUM_RAP_FAILURE: {

            return { ...state, isLoading: false, error: action.error }
        }

        default: {

            return { ...state }
        }
    }
}
