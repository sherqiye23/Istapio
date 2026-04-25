import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import ROUTES from './routers/router'

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
