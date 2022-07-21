import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
import { getEvent } from 'redux/actions/events'
// Styles
import './events.scss'

const EventView = ({ getEvent }) => {
  const events = useCallback(async () => {
    await getEvent()
  }, [getEvent])

  useEffect(() => {
    events()
  }, [events])

  return (
    <div className='events'>
      <h1>Events</h1>
    </div>
  )
}

export default connect(null, { getEvent })(EventView)
