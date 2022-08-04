import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
import { getEvent } from 'redux/actions/events'
// hook
import useLoader from 'hook/useLoader.hook'
// View
import EventsView from './events.view'

const EventPages = ({ getEvent }) => {
  // loader
  const [{ show, hide }] = useLoader()
  const events = useCallback(async () => {
    show()
    await getEvent()
    hide()
  }, [getEvent, show, hide])

  useEffect(() => {
    events()
  }, [events])

  return <EventsView />
}

export default connect(null, { getEvent })(EventPages)
