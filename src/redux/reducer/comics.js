import { GETCOMICS } from  '../actions/type'

const initialState = { 
    comics: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GETCOMICS:
            return {
                ...state,
                comics: action.payload,
            }
        default:
            return state
    }
}