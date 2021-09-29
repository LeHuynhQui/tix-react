import { GET_BANNER_FAILURE, GET_BANNER_REQUEST, GET_BANNER_SUCCESS } from "../constants/movie"

const initialState = {
    banner: [],
    isLoading: false,
    error: null
}

export const bannerReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_BANNER_REQUEST: {

            return { ...state, isLoading: true }
        }

        case GET_BANNER_SUCCESS: {

            return { ...state, isLoading: false, banner: action.data }
        }

        case GET_BANNER_FAILURE: {

            return { ...state, isLoading: false, error: action.error }
        }

        default: {

            return { ...state }
        }
    }
}
