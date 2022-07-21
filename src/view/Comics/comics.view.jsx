import { useCallback, useEffect } from 'react'
// redux
import { connect } from 'react-redux'
import { fetchComics } from 'redux/actions/comics'

// Styles
import './comics.scss'

const ComicsView = ({ fetchComics }) => {
  const comics = useCallback(async () => {
    await fetchComics()
  }, [fetchComics])

  useEffect(() => {
    comics()
  }, [comics])

  return (
    <div className='comics'>
      <h1>Comics</h1>
    </div>
  )
}

export default connect(null, { fetchComics })(ComicsView)
