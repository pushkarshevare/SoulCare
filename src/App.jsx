import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Specialized from './components/Specialized/Specialized';
import About from './components/About/About';
import Book from './components/Book/Book';
import Service from './components/Services/Service';



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/specialities",
      element:<Specialized />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/book",
      element:<Book />
    },
    {
      path:'/services',
      element:<Service />
    }
  ])
  

  return (
    <>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App
