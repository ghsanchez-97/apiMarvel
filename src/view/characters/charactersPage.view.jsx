// React
import { useCallback, useEffect } from 'react'
// hook
import useLoader from 'hook/useLoader.hook'
// Redux
import { connect } from 'react-redux'
import { fetchCharacters } from 'redux/actions/characters'
// View
import Character from './characters.view'

const CharactersView = ({ fetchCharacters }) => {

    const [ {show, hide} ]  = useLoader()

    const characters = useCallback(async() => {
        show()
        await fetchCharacters()
        hide()
    }, [fetchCharacters, hide, show])

    useEffect(() => {
        characters()
    }, [characters])

    return (
        <Character />
    )
}

export default connect(null, { fetchCharacters })(CharactersView)