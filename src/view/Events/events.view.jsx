// import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
// Styles
import './events.scss'

const EventView = ({ events }) => {
  return (
    <div className='events'>
      <div className='events__contains'>
        <div className='events__contains__title'>
          <h1>Eventos</h1>
        </div>
        <div className='events__contains__list'>
          {events?.map((event, index) => (
            <div
              className='events__contains__list__content'
              key={`events__contains__${index}`}>
              <div className='events__contains__list__content__image'>
                <div className='pulse' />
                <img
                  src={`${event?.thumbnail?.path}.${event?.thumbnail?.extension}`}
                  alt={event?.title}
                />
              </div>
              <div className='events__contains__list__content__title'>
                <h2>{event?.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  events: state.events.events.results,
})

export default connect(mapStateToProps)(EventView)
