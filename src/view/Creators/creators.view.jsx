// import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
// Styles
import './creator.scss'

const CreatorView = ({ creater }) => {
  return (
    <div className='creator'>
      {creater?.map((creator, index) => (
        <div className='creator__contains' key={`creator__contains__${index}`}>
          <div className='creator__contains__image'>
            <img
              src={`${creator?.thumbnail?.path}.${creator?.thumbnail?.extension}`}
              alt={creator?.fullName}
            />
          </div>
          <div className='creator__contains__name'>
            <h2>{creator?.fullName}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  creater: state.creater.creater.results,
})

export default connect(mapStateToProps)(CreatorView)
