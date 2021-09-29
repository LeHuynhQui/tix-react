import { postTaiKhoanAPI } from "../../../services/registerAPI"
import { getUser } from "../../admin/actions/admin"
import { REGISTER_TAI_KHOAN_FAILURE, REGISTER_TAI_KHOAN_REQUEST, REGISTER_TAI_KHOAN_SUCCESS } from "../constants/register"

export const postTaiKhoan = (taiKhoan) => {
    return async (dispatch) => {
        
        dispatch({type: REGISTER_TAI_KHOAN_REQUEST})

        try {
            
            let {content} = await postTaiKhoanAPI(taiKhoan)

            dispatch({
                type: REGISTER_TAI_KHOAN_SUCCESS, 
                data: content
            })

        } catch (error) {
        dispatch({
            type: REGISTER_TAI_KHOAN_FAILURE, 
            error: error.response.data.content
        })
            
        }
    }
}