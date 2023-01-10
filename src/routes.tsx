import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddNewArticle from './pages/AddNewArticle'

export default function MainRoutes(){
  return(
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/new_article' element={<AddNewArticle/>}/>

      </Routes>
  
  )
}