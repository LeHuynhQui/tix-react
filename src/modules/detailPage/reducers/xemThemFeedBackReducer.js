import { XEM_THEM_FEEDBACK } from "../constants/movieDetail"

const initialState = {
    feedBack: 0
}

export const xemThemFeedBackReducer = (state = initialState, action) => {
    switch (action.type) {

        case XEM_THEM_FEEDBACK: {

            return { ...state, feedBack: state.feedBack + 1 }
        }

        default: {

            return { ...state }
        }
    }
}
