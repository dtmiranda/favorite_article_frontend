import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddNewBlog from './pages/AddNewBlog'
import Articles from './pages/Articles'
import EditBlog from './pages/EditBlog'

export default function MainRoutes(){

  return(
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/new_blog' element={<AddNewBlog/>}/>
        <Route path='/blog/:id/articles' element={<Articles/>}/>
        <Route path='/edit_blog/:id' element={<EditBlog/>}/>


      </Routes>
  
  )
}