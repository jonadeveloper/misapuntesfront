import './App.css'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Notes from './pages/Notes'
import Contact from './pages/Contact'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre-mi' element={<About />}/>
          <Route path='/apuntes' element={<Notes />}/>
          <Route path='/contactame' element={<Contact />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
