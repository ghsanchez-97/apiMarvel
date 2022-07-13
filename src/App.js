// Import react-router-dom
import { Routes, Route } from 'react-router-dom'
// Import Redux
import { Provider } from 'react-redux'
import store from 'redux/store'
// Component
import { NavbarComponents } from 'components'
// View
import { HomeView, CharactersView } from 'view'

const App = () => {
  return (
    <Provider store={store}>
      <NavbarComponents />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/characters' element={<CharactersView />} />
      </Routes>
    </Provider>
  )
}

export default App
