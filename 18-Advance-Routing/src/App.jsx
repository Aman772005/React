import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>
            <Route path='kids' element={<Kids/>}/>
        </Route>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:couresId' element={<CoursesDetails/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Navbar2/>
      <Footer/>
    </div>
  )
}

export default App
