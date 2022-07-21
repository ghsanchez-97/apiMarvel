import { GETEVENTS } from './type'
// Service
import { getEvents } from 'services/api.services'

export const getEvent = () => async (dispatch) => {
  const { data, status, statusText } = await getEvents()
  try {
    if (status === 200) {
      dispatch({
        type: GETEVENTS,
        payload: data.data,
      })
    }
    console.log('res', status, statusText)
  } catch (error) {
    console.log(error)
  }
}