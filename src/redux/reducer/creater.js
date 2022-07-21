import { GETCREATORS } from  '../actions/type'

const initialState = { 
    creater: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GETCREATORS:
            return {
                ...state,
                creater: action.payload,
            }
        default:
            return state
    }
}