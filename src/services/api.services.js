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
// comics
export const getComics = () => {
    return http({
        headers: {
            'Content-Type': 'application/json'
        }
    }).get(`${constants.PREFIX}comics${constants.HASH}`)
}
// creators
export const getCreators = () => {
    return http({
        headers: {
            'Content-Type': 'application/json'
        }
    }).get(`${constants.PREFIX}creators${constants.HASH}`)
}
// events
export const getEvents = () => {
    return http({
        headers: {
            'Content-Type': 'application/json'
        }
    }).get(`${constants.PREFIX}events${constants.HASH}`)
}
// series
export const getSeries = () => {
    return http({
        headers: {
            'Content-Type': 'application/json'
        }
    }).get(`${constants.PREFIX}series${constants.HASH}`)
}
// stories
export const getStories = () => {
    return http({
        headers: {
            'Content-Type': 'application/json'
        }
    }).get(`${constants.PREFIX}stories${constants.HASH}`)
}