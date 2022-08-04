import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
import { fetchComics } from 'redux/actions/comics'
// hook
import useLoader from 'hook/useLoader.hook'
// View
import ComicsView from './comics.view'

const ComicsPage = ({ fetchComics }) => {
  // Loader
  const [{ show, hide }] = useLoader()

  const comics = useCallback(async () => {
    show()
    await fetchComics()
    hide()
  }, [fetchComics, hide, show])

  useEffect(() => {
    comics()
  }, [comics])

  return <ComicsView />
}

export default connect(null, { fetchComics })(ComicsPage)
