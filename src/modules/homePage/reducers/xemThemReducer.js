import { XEM_THEM_DIEN_ANH, XEM_THEM_KHUYEN_MAI, XEM_THEM_REVIEW } from "../constants/movie"

const initialState = {
    dienAnh: 0,
    review: 0,
    khuyenMai: 0
}

export const xemThemReducer =  (state = initialState, action) => {
    switch (action.type) {

    case XEM_THEM_DIEN_ANH: {

        return { ...state, dienAnh: state.dienAnh + 1}
    }

    case XEM_THEM_REVIEW: {

        return { ...state, review: state.review + 1}
    }

    case XEM_THEM_KHUYEN_MAI: {

        return { ...state, khuyenMai: state.khuyenMai + 1}
    }


    default: {

        return {...state}
    }
    }
}
