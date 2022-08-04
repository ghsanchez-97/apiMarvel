// import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
// Styles
import './series.scss'

const SeriesView = ({ series }) => {

  return (
    <div className='series'>
      {series?.map((serie, index) => (
        <div className='series__contains' key={`series__contains__${index}`}>
          <div className='series__contains__image'>
            <img
              src={`${serie?.thumbnail?.path}.${serie?.thumbnail?.extension}`}
              alt={serie?.title}
            />
          </div>
          <div className='series__contains__title'>
            <h2>{serie?.title}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapDispatchToProps = (state) => ({
  series: state.series.series.results,
})

export default connect(mapDispatchToProps)(SeriesView)
