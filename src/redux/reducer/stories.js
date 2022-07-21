import { GETSTORIES } from  '../actions/type'

const initialState = { 
    stories: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GETSTORIES:
            return {
                ...state,
                stories: action.payload,
            }
        default:
            return state
    }
}