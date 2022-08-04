// import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
// Assets
import Hero  from 'assets/img/hero.jpg'
// Styles
import './history.scss'

const HistoryView = ({ stories }) => {
  console.log('stories', stories)

  return (
    <div className='history'>
      {stories?.map((story, index) => (
        <div className='history__contains' key={`history__contains__${index}`}>
          <div className='history__contains__image'>
            {story?.thumbnail != null ? <img
              src={`${story?.thumbnail?.path}.${story?.thumbnail?.extension}`}
              alt={story?.title}
            /> : <img src={Hero} alt='hero' />}
          </div>
          <div className='history__contains__title'>
            <h2>{story?.title}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  stories: state.stories.stories.results,
})

export default connect(mapStateToProps)(HistoryView)
