import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddNewBlog from './pages/AddNewBlog'
import Articles from './pages/Articles'

export default function MainRoutes(){

  return(
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/new_blog' element={<AddNewBlog/>}/>
        <Route path='/articles/:id' element={<Articles/>}/>


      </Routes>
  
  )
}