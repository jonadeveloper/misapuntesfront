import './App.css'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre-mi' element={<About />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
