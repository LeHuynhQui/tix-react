import { getBannerAPI, getMoviesAPI, getThongTinCumRapAPI, getThongTinHeThongRapAPI, getThongTinLichChieuHeThongRapAPI } from "../../../services/movieAPI"
import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_FAILURE, GET_MOVIE_LIST_SUCCESS,
    GET_THONG_TIN_HE_THONG_RAP_REQUEST, GET_THONG_TIN_HE_THONG_RAP_SUCCESS, 
    GET_THONG_TIN_HE_THONG_RAP_FAILURE, GET_THONG_TIN_CUM_RAP_REQUEST, 
    GET_THONG_TIN_CUM_RAP_SUCCESS, GET_THONG_TIN_CUM_RAP_FAILURE
,GET_THONG_TIN_LICH_CHIEU_REQUEST, GET_THONG_TIN_LICH_CHIEU_SUCCESS, GET_THONG_TIN_LICH_CHIEU_FAILURE, GET_BANNER_REQUEST
,GET_BANNER_SUCCESS , GET_BANNER_FAILURE } 
    from "../constants/movie"



export const getBanner = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_BANNER_REQUEST
        })

        try {
            let {content} = await getBannerAPI()
            dispatch({
                type: GET_BANNER_SUCCESS,
                data: content
            })
        } catch (error) {
            dispatch({
                type: GET_BANNER_FAILURE
            })
        }
    }
}
    


export const getMovieList = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_MOVIE_LIST_REQUEST
        })

        try {
            let {content} = await getMoviesAPI()
            dispatch({
                type: GET_MOVIE_LIST_SUCCESS,
                movies: content
            })
        } catch (error) {
            dispatch({
                type: GET_MOVIE_LIST_FAILURE
            })
        }
    }
}


export const getThongTinHeThongRap = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_THONG_TIN_HE_THONG_RAP_REQUEST
        })

        try {
            let {content} = await getThongTinHeThongRapAPI()
            dispatch({
                type: GET_THONG_TIN_HE_THONG_RAP_SUCCESS,
                data: content
            })
        } catch (error) {
            dispatch({
                type: GET_THONG_TIN_HE_THONG_RAP_FAILURE,
                // error: error.response.data
            })
        }
    }
}


export const getThongTinCumRap = (maHeThongRap) => {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_THONG_TIN_CUM_RAP_REQUEST
        })

        try {
            let {content} = await getThongTinCumRapAPI(maHeThongRap)
            dispatch({
                type: GET_THONG_TIN_CUM_RAP_SUCCESS,
                data: content
            })
        } catch (error) {
            dispatch({
                type: GET_THONG_TIN_CUM_RAP_FAILURE,
                // error: error.response.data
            })
        }
    }
}

export const getThongTinLichChieuHeThongRap = (maHeThongRap) => {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_THONG_TIN_LICH_CHIEU_REQUEST
        })

        try {
            let {content} = await getThongTinLichChieuHeThongRapAPI (maHeThongRap)
            dispatch({
                type: GET_THONG_TIN_LICH_CHIEU_SUCCESS,
                data: content
            })
        } catch (error) {
            dispatch({
                type: GET_THONG_TIN_LICH_CHIEU_FAILURE,
                // error: error.response.data
            })
        }
    }
}

