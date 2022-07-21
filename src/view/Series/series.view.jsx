import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
import { getSerie } from 'redux/actions/series'
// Styles
import './series.scss'

const SeriesView = ({ getSerie }) => {
  const series = useCallback(async () => {
    await getSerie()
  }, [getSerie])

  useEffect(() => {
    series()
  }, [series])

  return (
    <div className='series'>
      <h1>Series</h1>
    </div>
  )
}

export default connect(null, { getSerie })(SeriesView)
