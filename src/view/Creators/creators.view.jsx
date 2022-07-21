import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
import { getCreator } from 'redux/actions/creater'
// Styles
import './creator.scss'

const CreatorView = ({ getCreator }) => {
  const creaters = useCallback(async () => {
    await getCreator()
  }, [getCreator])

  useEffect(() => {
    creaters()
  }, [creaters])

  return (
    <div className='creator'>
      <h1>Creator</h1>
    </div>
  )
}

export default connect(null, { getCreator })(CreatorView)
