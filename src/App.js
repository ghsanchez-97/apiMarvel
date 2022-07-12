// import { useEffect } from 'react'
// Import Redux
import { Provider } from 'react-redux'
import store from 'redux/store'
import { HomeView } from 'view'

const App = () => {
  return (
    <Provider store={store}>
      {/* <div>
        <h1>Hello World</h1>
      </div> */}
      <HomeView />
    </Provider>
  )
}

export default App
