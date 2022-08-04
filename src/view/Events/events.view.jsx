// import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
// Styles
import './events.scss'

const EventView = ({ events }) => {
  return (
    <div className='events'>
      {events?.map((event, index) => (
        <div className='events__contains' key={`events__contains__${index}`}>
          <div className='events__contains__image'>
            <img
              src={`${event?.thumbnail?.path}.${event?.thumbnail?.extension}`}
              alt={event?.title}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  events: state.events.events.results,
})

export default connect(mapStateToProps)(EventView)
