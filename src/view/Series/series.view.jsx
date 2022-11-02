// import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
// Styles
import './series.scss'

const SeriesView = ({ series }) => {
  return (
    <div className='series'>
      <div className='series__contains'>
        <div className='series__contains__title'>
          <h1>Series</h1>
        </div>
        <div className='series__contains__list'>
          {series?.map((serie, index) => (
            <div
              className='series__contains__list__content'
              key={`series__contains__${index}`}>
              <div className='series__contains__list__content__image'>
                <div className='pulse' />
                <img
                  src={`${serie?.thumbnail?.path}.${serie?.thumbnail?.extension}`}
                  alt={serie?.title}
                />
              </div>
              <div className='series__contains__list__content__title'>
                <h2>{serie?.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (state) => ({
  series: state.series.series.results,
})

export default connect(mapDispatchToProps)(SeriesView)
