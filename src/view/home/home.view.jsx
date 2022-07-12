import { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from 'redux/actions/characters'

const HomeView = ({ fetchCharacters }) => {
    const characters = useCallback(async() => {
        await fetchCharacters()
    }, [fetchCharacters])

    useEffect(() => {
        characters()
    }, [characters])

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default connect(null, { fetchCharacters })(HomeView)