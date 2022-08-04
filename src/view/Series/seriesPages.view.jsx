import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
import { getSerie } from 'redux/actions/series'
// Hook
import useLoader from 'hook/useLoader.hook'
// View
import SeriesView from './series.view'

const SeriesPages = ({ getSerie }) => {
  // loader
  const [{ show, hide }] = useLoader()

  const series = useCallback(async () => {
    show()
    await getSerie()
    hide()
  }, [getSerie, show, hide])

  useEffect(() => {
    series()
  }, [series])

  return <SeriesView />
}

export default connect(null, { getSerie })(SeriesPages)
