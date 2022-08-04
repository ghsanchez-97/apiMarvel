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
        {comics?.map((comic, index) => (
          <div className='comics__contains__list' key={`comics__contains__${index}`}>
            <div className='comics__contains__list__image'>
              <img src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`} alt={comic?.title} />
            </div>
            <div className='comics__contains__list__title'>
              <h2>{comic?.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const maptStateToProps = (state) => ({
  comics: state.comics.comics.results
})

export default connect(maptStateToProps)(ComicsView)
