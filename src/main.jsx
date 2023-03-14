import React from 'react'
import ReactDOM from 'react-dom/client'
import Table from './components/Table/Table'
import App from './App'
import './index.css'
import { MoveProvider } from './context/moveGameContext'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './error-page'
import { MoveUserProvider } from './context/moveUserContext'
import Formulario from './components/formulario/Formulario'
import { ContentGame } from './components/content-Game/ContentGame'
import { ProtectectRoute } from './routes/ProtectectRoute'
import Levels from './routes/Levels/Levels'
import Home from './routes/Home/Home'
import Discover from './routes/Discover/Discover'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    
    path: '/registro',
    element: <Formulario/>
    
  },
  {
    
    path: '/levels',
    element: <Levels/>
    
  },
  {
    
    path: '/levels/:numberLevel',
    element:<ProtectectRoute><Table /></ProtectectRoute> 
    
  },
  {
    path:'/home',
    element:<ProtectectRoute><Home/></ProtectectRoute>
  },
  {
    
    path: '/discover',
    element:<ProtectectRoute><Discover /></ProtectectRoute> 
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoveProvider>
      <MoveUserProvider>
        <ContentGame>
        <RouterProvider router={router}/>
        </ContentGame>
      </MoveUserProvider>
    </MoveProvider>
  </React.StrictMode>,
)
