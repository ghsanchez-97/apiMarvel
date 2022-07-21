import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
import { getStorie } from 'redux/actions/stories'
// Styles
import './history.scss'

const HistoryView = ({ getStorie }) => {

    const stories = useCallback(async () => {
        await getStorie()
    }, [getStorie])

    useEffect(() => {
        stories()
    }, [stories])

  return (
    <div className='history'>
      <h1>History</h1>
    </div>
  )
}

export default connect(null, { getStorie })(HistoryView)
