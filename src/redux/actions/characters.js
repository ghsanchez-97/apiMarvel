// TYPES
import { GETCHARACTERS, LOADING } from './type'
// SERVICES
import { getCharacters } from 'services/api.services'

export const fetchCharacters = () => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const { data, status, statusText } = await getCharacters()
    if (status === 200) {
      dispatch({
        type: GETCHARACTERS,
        payload: data.data,
      })
    }
    console.log('res', status, statusText)
  } catch (error) {
    console.log(error)
  }
}
