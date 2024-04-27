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
import ViewDetails from './pages/ViewDetails/ViewDetails';
import Update from './pages/update.jsx/Update';
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
        loader: ()=>fetch(`http://localhost:5000/allTour`)
        
      },
      {
        path: "/addTour",
        element: <AddTourists></AddTourists>,
        
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        // loader: ({params})=> fetch(`http://localhost:5000/views/${params.id}`)
      },
      {
        path: "/allTour",
        element: <AllTourists></AllTourists>,
        loader: ()=>fetch(`http://localhost:5000/allTour`)
      },
      {
        path: "/myList",
        element: <MyList></MyList>
      },
      {
        path: "/updateForm/:id",
        element: <Update></Update>,
        loader: ({params})=>fetch(`http://localhost:5000/update/${params.id}`)
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
