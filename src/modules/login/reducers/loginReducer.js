// import { parse } from "query-string"
import { DANG_XUAT, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/login"

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    isLoading: false,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_REQUEST: {

            return { ...state, isLoading: true, error: null }
        }

        case LOGIN_SUCCESS: {

            const avatar = `https://i.pravatar.cc/150?u=${Date.now()}`

            localStorage.setItem("user", JSON.stringify({ ...action.data, avatar }))

            return { ...state, isLoading: false, user: { ...action.data, avatar } }
        }

        case LOGIN_FAILURE: {

            return { ...state, error: action.error, isLoading: false }
        }

        case DANG_XUAT: {
            localStorage.removeItem("user");
            sessionStorage.removeItem("thongTinVe");
            return { ...state, user: null }
        }


        default: {

            return { ...state }
        }
    }
}
