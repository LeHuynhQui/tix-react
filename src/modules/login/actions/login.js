import { loginApi } from "../../../services/loginAPI"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/login"

export const login = (taiKhoan) => {
    return async (dispatch) => {
        dispatch({type: LOGIN_REQUEST})

        try {
            let {content} = await loginApi(taiKhoan)
          
            dispatch({
                type: LOGIN_SUCCESS,
                data: content
            })
            
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                error: error.response.data.content
            })
            
        }
    }
}