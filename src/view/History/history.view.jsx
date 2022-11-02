// import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
// Assets
import Hero from 'assets/img/hero.jpg'
// Styles
import './history.scss'

const HistoryView = ({ stories }) => {
  console.log('stories', stories)

  return (
    <div className='history'>
      <div className='history__contains'>
        <div className='history__contains__title'>
          <h1>Historias</h1>
        </div>
        <div className='history__contains__list'>
          {stories?.map((story, index) => (
            <div
              className='history__contains__list__content'
              key={`history__contains__${index}`}>
              <div className='history__contains__list__content__image'>
                {/* <div className='pulse' /> */}
                {story?.thumbnail != null ? (
                  <img
                    src={`${story?.thumbnail?.path}.${story?.thumbnail?.extension}`}
                    alt={story?.title}
                  />
                ) : (
                  <img src={Hero} alt='hero' />
                )}
              </div>
              <div className='history__contains__list__content__title'>
                <h2>{story?.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stories: state.stories.stories.results,
})

export default connect(mapStateToProps)(HistoryView)
