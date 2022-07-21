import { Suspense, lazy } from 'react'
// Import react-router-dom
import { Routes, Route } from 'react-router-dom'
// Import Redux
import { Provider } from 'react-redux'
import store from 'redux/store'
// Component
import { NavbarComponents, Loader } from 'components'
// View
const HomeView = lazy(() => import('view/home/home.view'))
const CharactersView = lazy(() => import('view/characters/characters.view'))
const ComicsView = lazy(() => import('view/Comics/comics.view'))
const CreatorsView = lazy(() => import('view/Creators/creators.view'))
const EventsView = lazy(() => import('view/Events/events.view'))
const SeriesView = lazy(() => import('view/Series/series.view'))
const HistoryView = lazy(() => import('view/History/history.view'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <NavbarComponents />
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/characters' element={<CharactersView />} />
          <Route exact path='/comics' element={<ComicsView />} />
          <Route exact path='/creator' element={<CreatorsView />} />
          <Route exact path='/events' element={<EventsView />} />
          <Route exact path='/series' element={<SeriesView />} />
          <Route exact path='/stories' element={<HistoryView />} />
        </Routes>
      </Provider>
    </Suspense>
  )
}

export default App
