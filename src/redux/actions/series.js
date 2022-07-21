import { GETSERIES } from './type'
// Service
import { getSeries } from 'services/api.services'

export const getSerie = () => async (dispatch) => {
  const { data, status, statusText } = await getSeries()
  try {
    if (status === 200) {
      dispatch({
        type: GETSERIES,
        payload: data.data,
      })
    }
    console.log('res', status, statusText)
  } catch (error) {
    console.log(error)
  }
}