import { GETCHARACTERS } from '../actions/type'

const initialState = {
  characters: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GETCHARACTERS:
      return {
        ...state,
        characters: action.payload,
      }
    default:
      return state
  }
}
