// import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'

// Styles
import './comics.scss'

const ComicsView = ({ comics }) => {
  console.log('data', comics)

  return (
    <div className='comics'>
      <div className='comics__contains'>
        <div className='comics__contains__title'>
          <h1>Comics</h1>
        </div>
        <div className='comics__contains__list'>
        {comics?.map((comic, index) => (
          <div className='comics__contains__list__content' key={`comics__contains__${index}`}>
            <div className='comics__contains__list__content__image'>
            <div className='pulse'></div>
              <img src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`} alt={comic?.title} />
            </div>
            <div className='comics__contains__list__content__title'>
              <h2>{comic?.title}</h2>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

const maptStateToProps = (state) => ({
  comics: state.comics.comics.results
})

export default connect(maptStateToProps)(ComicsView)
