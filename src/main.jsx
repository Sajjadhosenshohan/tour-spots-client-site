import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/root/Root';
import Home from './pages/Home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import AddTourists from './components/AddTourists';
import AllTourists from './components/AllTourists';
import MyList from './components/MyList';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Firebase/AuthProvider';
// import TourSection from './components/TourSection';
// import TourSection from './components/TourSection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/addTour",
        element: <AddTourists></AddTourists>
      },
      // {
      //   path: "/",
      //   element: <TourSection></TourSection>,
        
      // },
      {
        path: "/allTour",
        element: <AllTourists></AllTourists>
      },
      {
        path: "/myList",
        element: <MyList></MyList>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div><Toaster /></div>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
