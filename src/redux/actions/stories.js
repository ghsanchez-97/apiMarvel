import { GETSTORIES } from './type'
// Service
import { getStories } from 'services/api.services'

export const getStorie = () => async (dispatch) => {
  const { data, status, statusText } = await getStories()
  try {
    if (status === 200) {
      dispatch({
        type: GETSTORIES,
        payload: data.data,
      })
    }
    console.log('res', status, statusText)
  } catch (error) {
    console.log(error)
  }
}