import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from 'react-router-dom'
import MainRoot from './layouts/MainRoot'
import Carddata from './pages/Carddata'
import Home from './pages/Home'
import Homedata from './pages/Homedata'
import List from './pages/List'
import Vmiredata from './pages/Vmiredata'
import Form from './pages/Войти'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<MainRoot/>}>
        <Route path='/' element={<Home />} />
        <Route path='list' element={<List />}/>
        <Route path='Войти' element={<Form />}/>
        <Route path='carddata/:id' element={<Carddata />}/>
        <Route path='homedata/:id' element={<Homedata />}/>
        <Route path='vmiredata/:id' element={<Vmiredata />}/>
      </Route>
      

       ) 
     )

  return (
   
   <RouterProvider router={router}  />

  )
}

export default App