import React from 'react'
import "./styles/index.css"
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './routes/Home/Home'
import Contact from './routes/Contact/Contact'
import Verify from './routes/Verify/Verify'
import Profile from './routes/Profile/Profile'
import Login from './routes/Login/Login'
import Verifying from './routes/Verifying/Verifying'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Login/> }/>
          <Route path='/home' element={ <Home /> }/>
          <Route path='/profile' element= { <Profile/> }/>
          <Route path='/verify' element= { <Verify/> }/>
          <Route path='/verifying/QmaMjvVJMC9HcyKguzgiX9JUFoCkyjXpBb6oXYkciY64jM' element= { <Verifying/> }/>
          <Route path='/contact' element={ <Contact/> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App