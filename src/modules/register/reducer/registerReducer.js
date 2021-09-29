import { REGISTER_TAI_KHOAN_FAILURE, REGISTER_TAI_KHOAN_REQUEST, REGISTER_TAI_KHOAN_SUCCESS } from "../constants/register"

const initialState = {
    taiKhoan: null,
    isLoading: false,
    error: null
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_TAI_KHOAN_REQUEST: {
            return { ...state, isLoading: true, error: null }
        }

        case REGISTER_TAI_KHOAN_SUCCESS: {
            return { ...state, taiKhoan: action.data ,isLoading: false, error: null }
        }

        case REGISTER_TAI_KHOAN_FAILURE: {
            console.log(action.error)
            return { ...state, isLoading: false, error: action.error, taiKhoan: null }
        }

        default: {
            return { ...state}
        }
    }
}
