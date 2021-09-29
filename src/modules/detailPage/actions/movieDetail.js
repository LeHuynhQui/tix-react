import { getMovieDetailAPI } from "../../../services/movieAPI"
import { GET_MOVIE_DETAIL_FAILURE, GET_MOVIE_DETAIL_REQUEST, GET_MOVIE_DETAIL_SUCCESS } from "../constants/movieDetail"


export const getMovieDetail = (id) => {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_MOVIE_DETAIL_REQUEST
        })

        try {
            let {content} = await getMovieDetailAPI(id)
            dispatch({
                type: GET_MOVIE_DETAIL_SUCCESS,
                movie: content
            })

        } catch (error) {
            dispatch({
                type: GET_MOVIE_DETAIL_FAILURE
            })
        }
    }
}