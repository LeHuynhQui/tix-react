import { GET_SEARCH_USER_VALUE, GET_USER_LIST_FAILURE, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS } from "../constants/admin"

const initialState = {
    users: [],
    isLoading: false,
    error: null,
    searchUserValue: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST_REQUEST: {

            return { ...state, isLoading: true }
        }

        case GET_USER_LIST_SUCCESS: {

            return { ...state, isLoading: false, users: action.users }
        }

        case GET_USER_LIST_FAILURE: {

            return { ...state, isLoading: false, error: action.error }
        }

        case GET_SEARCH_USER_VALUE : {
            return { ...state, searchUserValue: action.searchUserValue }

        }

        default: {

            return { ...state }
        }
    }
}
