import { GETCHARACTERS, LOADING } from '../actions/type'

const initialState = {
  characters: [],
  loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GETCHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
