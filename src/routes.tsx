import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddNewBlog from './pages/AddNewBlog'

export default function MainRoutes(){
  return(
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/new_blog' element={<AddNewBlog/>}/>


      </Routes>
  
  )
}