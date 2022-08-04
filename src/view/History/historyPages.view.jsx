import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
import { getStorie } from 'redux/actions/stories'
// hook
import useLoader from 'hook/useLoader.hook'
// view
import HistoryView from './history.view'

const HistoryPage = ({ getStorie }) => {
  // loader
  const [{ show, hide }] = useLoader()

  const stories = useCallback(async () => {
    show()
    await getStorie()
    hide()
  }, [getStorie, show, hide])

  useEffect(() => {
    stories()
  }, [stories])

  return <HistoryView />
}

export default connect(null, { getStorie })(HistoryPage)
