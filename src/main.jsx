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
import Countries from './components/Countries';
import TargetCountry from './components/TargetCountry';
import ProtectedRoute from './pages/ProtectedRoute';
import Error from './pages/Error/Error';



// http://localhost:5000

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/allTour`)

      },
      {
        path: "/addTour",
        element: <ProtectedRoute>
          <AddTourists></AddTourists>
        </ProtectedRoute>,
      },
      {
        path: "/viewDetails/:id",
        element: <ProtectedRoute><ViewDetails></ViewDetails></ProtectedRoute>,
      },
      {
        path: "/allTour",
        element: <AllTourists></AllTourists>,
        loader: () => fetch(`http://localhost:5000/allTour`)
      },
      {
        path: "/myList",
        element: <ProtectedRoute><MyList></MyList></ProtectedRoute>
      },
      {
        path: "/updateForm/:id",
        element: <ProtectedRoute><Update></Update></ProtectedRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/countriesData",
        element: <Countries></Countries>,
       
      },
      {
        path: "/target/:country_Name",
        element: <ProtectedRoute><TargetCountry></TargetCountry></ProtectedRoute>
      }
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
