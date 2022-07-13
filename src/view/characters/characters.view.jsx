// React
import { useCallback, useEffect } from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchCharacters } from 'redux/actions/characters'
// Component
import { Loader } from 'components'
// Styles
import './character.scss'

const CharactersView = ({ fetchCharacters, loading }) => {
    const characters = useCallback(async() => {
        await fetchCharacters()
    }, [fetchCharacters])

    useEffect(() => {
        characters()
    }, [characters])

    if(loading) {
        <Loader />
    }

    return (
        <div>
            <h1>Characters</h1>
        </div>
    )
}

const mapDispatchToProps = (state) => ({
    loading: state.characters.loading,
})
export default connect(mapDispatchToProps, { fetchCharacters })(CharactersView)