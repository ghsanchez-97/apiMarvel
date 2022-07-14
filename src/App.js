// Import react-router-dom
import { Routes, Route } from 'react-router-dom'
// Import Redux
import { Provider } from 'react-redux'
import store from 'redux/store'
// Component
import { NavbarComponents } from 'components'
// View
import {
  HomeView,
  CharactersView,
  ComicsView,
  CreatorsView,
  EventsView,
  HistoryView,
  SeriesView,
} from 'view'

const App = () => {
  return (
    <Provider store={store}>
      <NavbarComponents />
      <Routes>
        <Route  exact path='/' element={<HomeView />} />
        <Route  exact path='/characters' element={<CharactersView />} />
        <Route  exact path='/comics' element={<ComicsView />} />
        <Route  exact path='/creator' element={<CreatorsView />} />
        <Route  exact path='/events' element={<EventsView />} />
        <Route  exact path='/series' element={<SeriesView />} />
        <Route  exact path='/stories' element={<HistoryView />} />
      </Routes>
    </Provider>
  )
}

export default App
