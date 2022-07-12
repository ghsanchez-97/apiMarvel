//Import http
import { http, constants } from 'utils'

// characters
export const getCharacters = () => {
    return http({
        headers: {
            'Content-Type': 'application/json'
        }
    }).get(`${constants.PREFIX}characters${constants.HASH}`)
}