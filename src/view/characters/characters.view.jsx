// React
// import { Fragment } from 'react'
// Redux
import { connect } from 'react-redux'
// Styles
import './character.scss'

const CharactersView = ({ characters }) => {
  console.log('data', characters)

  return (
    // <Fragment>
    <div className='characters'>
      <div className='characters__title'>
        <h1>Personajes</h1>
      </div>
      <div className='characters__list'>
        {characters?.map((character, index) => (
          <div className='characters__list__hero' key={`characters__${index}`}>
            <div className='characters__list__hero__image'>
              <img
                src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                alt={character?.name}
              />
            </div>
            <div className='characters__list__hero__name'>
              <h2>{character?.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </Fragment>
  )
}

const mapStateToProps = (state) => ({
  characters: state.characters.characters.results,
})

export default connect(mapStateToProps)(CharactersView)
