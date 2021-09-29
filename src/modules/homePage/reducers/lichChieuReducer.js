import { GET_THONG_TIN_LICH_CHIEU_FAILURE, GET_THONG_TIN_LICH_CHIEU_REQUEST, GET_THONG_TIN_LICH_CHIEU_SUCCESS } from "../constants/movie"

const initialState = {
    lichChieu: null,
    isLoading: false,
    error: null
}

export const lichChieuReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_THONG_TIN_LICH_CHIEU_REQUEST: {

            return { ...state, isLoading: true }
        }

        case GET_THONG_TIN_LICH_CHIEU_SUCCESS: {

            return { ...state, isLoading: false, lichChieu: action.data }
        }

        case GET_THONG_TIN_LICH_CHIEU_FAILURE: {

            return { ...state, isLoading: false, error: action.error }
        }

        default: {

            return { ...state }
        }
    }
}
