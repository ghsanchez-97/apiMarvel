// import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
// Styles
import './creator.scss'

const CreatorView = ({ creater }) => {
  return (
    <div className='creator'>
      <div className='creator__contains'>
        <div className='creator__contains__title'>
          <h1>Creadores</h1>
        </div>
        <div className='creator__contains__list'>
          {creater?.map((creator, index) => (
            <div
            className='creator__contains__list__content'
              key={`creator__contains__${index}`}>
              <div className='creator__contains__list__content__image'>
                <div className='pulse'/>
                <img
                  src={`${creator?.thumbnail?.path}.${creator?.thumbnail?.extension}`}
                  alt={creator?.fullName}
                />
              </div>
              <div className='creator__contains__list__content__title'>
                <h2>{creator?.fullName}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  creater: state.creater.creater.results,
})

export default connect(mapStateToProps)(CreatorView)
