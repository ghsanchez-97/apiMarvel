// React
import { useCallback, useEffect } from 'react'
// 
import useLoader from 'hook/useLoader.hook'
// Redux
import { connect } from 'react-redux'
import { fetchCharacters } from 'redux/actions/characters'
// Styles
import './character.scss'

const CharactersView = ({ fetchCharacters }) => {

    const [ {show, hide} ]  = useLoader()

    const characters = useCallback(async() => {
        show()
        await fetchCharacters()
        hide()
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