import { GETCOMICS } from './type'
// Services
import { getComics } from 'services/api.services'

export const fetchComics = () => async (dispatch) => {
    try {
        const { data, status, statusText } = await getComics()
        if (status === 200) {
        dispatch({
            type: GETCOMICS,
            payload: data.data,
        })
        }
        console.log('res', status, statusText)
    } catch (error) {
        console.log(error)
    }
}