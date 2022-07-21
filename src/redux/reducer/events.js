import { GETEVENTS } from  '../actions/type'

const initialState = { 
    events: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GETEVENTS:
            return {
                ...state,
                events: action.payload,
            }
        default:
            return state
    }
}