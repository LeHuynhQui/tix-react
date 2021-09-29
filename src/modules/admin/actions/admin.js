import { addMovieAPI, addUserAPI, deleteMovieAPI, deleteUserAPI, updateMovieAPI, updateUserAPI } from "../../../services/movieAPI"
import { getUserAPI } from "../../../services/userAPI"
import { getMovieList } from "../../homePage/actions/movie"
import { GET_USER_LIST_FAILURE, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, IS_HIDE_MODAL_MOVIE } from "../constants/admin"

export const getUser = () => {
    return async (dispatch) => {
        dispatch({type: GET_USER_LIST_REQUEST})

        try {
            let {content} = await getUserAPI()
            console.log(content)
            dispatch({
                type: GET_USER_LIST_SUCCESS,
                users: content
            })

        } catch (error) {
            
            console.log(error.response.data.content)
            dispatch({
                type: GET_USER_LIST_FAILURE,
                error: error.response.data.content
            })
        }
    }
}


export const addMovie = (movie) => {
    return async (dispatch) => {

        try {
            await addMovieAPI(movie)
            console.log("Thanh cong")
            dispatch(getMovieList())
            dispatch({
                type: IS_HIDE_MODAL_MOVIE, 
                close: true,
            })

        } catch (error) {
            console.log(error.response.data.content)
            
        }
    }
}



export const deleteMovie = (MaPhim) => {
    return async (dispatch) => {

        try {
            await deleteMovieAPI(MaPhim)
            console.log("Thanh cong")
            dispatch(getMovieList())
        } catch (error) {
            console.log(error.response.data.content)
            
        }
    }
}

export const updateMovie = (movie) => {
    return async (dispatch) => {

        try {
            await updateMovieAPI(movie)
            console.log("Thanh cong cap nhat")
            dispatch(getMovieList())
        } catch (error) {
            console.log(error.response.data.content)
            
        }
    }
}

export const deleteUser = (TaiKhoan) => {
    return async (dispatch) => {

        try {
            await deleteUserAPI(TaiKhoan)
            console.log("Thanh cong deldete user")
            dispatch(getUser())
        } catch (error) {
            console.log("error delete user", error.response)
            
        }
    }
}

export const updateUser = (user) => {
    return async (dispatch) => {

        try {
            await updateUserAPI(user)
            console.log("Thanh cong cap nhat user")
            dispatch(getUser())
        } catch (error) {
            console.log("error update user",error.response)
            
        }
    }
}

export const addUser = (user) => {
    return async (dispatch) => {

        try {
            await addUserAPI(user)
            console.log("Thanh cong add user")
            dispatch(getUser())
        } catch (error) {
            console.log("error update user",error.response)
            
        }
    }
}