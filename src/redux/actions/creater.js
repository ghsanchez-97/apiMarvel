import { GETCREATORS } from './type'
// Service
import { getCreators } from 'services/api.services'

export const getCreator = () => async (dispatch) => {
  const { data, status, statusText } = await getCreators()
  try {
    if (status === 200) {
      dispatch({
        type: GETCREATORS,
        payload: data.data,
      })
    }
    console.log('res', status, statusText)
  } catch (error) {
    console.log(error)
  }
}
