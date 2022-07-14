// React
import { useCallback, useEffect } from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchCharacters } from 'redux/actions/characters'
// Styles
import './character.scss'

const CharactersView = ({ fetchCharacters }) => {

    const characters = useCallback(async() => {
        await fetchCharacters()
    }, [fetchCharacters])

    useEffect(() => {
        characters()
    }, [characters])

    return (
        <div>
            <h1>Characters</h1>
        </div>
    )
}

export default connect(null, { fetchCharacters })(CharactersView)