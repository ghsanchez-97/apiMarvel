import { GETSERIES } from  '../actions/type'

const initialState = { 
    series: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GETSERIES:
            return {
                ...state,
                series: action.payload,
            }
        default:
            return state
    }
}