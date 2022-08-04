import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
import { getCreator } from 'redux/actions/creater'
// Hook
import useLoader from 'hook/useLoader.hook'
// View
import CreatorView from './creators.view'

const CreatorPage = ({ getCreator }) => {
    // Loader
    const [{ show, hide }] = useLoader()

  const creaters = useCallback(async () => {
    show()
    await getCreator()
    hide()
  }, [getCreator, hide, show])

  useEffect(() => {
    creaters()
  }, [creaters])

  return (
    <CreatorView />
  )
}

export default connect(null, { getCreator })(CreatorPage)