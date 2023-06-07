import React  from 'react';
import {createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Compontent/Layout/Layout';
import Home   from './Compontent/Home/Home';
import Movie  from './Compontent/Movie/Movie';
import Tv from './Compontent/Tv/Tv';
import People from  './Compontent/People/People';
import Login from './Compontent/Login/Login';
import Register from './Compontent/Register/Register';
import ItemDetails from './Compontent/ItemDetails/ItemDetails';
import NotFound from './Compontent/NoFound/NoFound';

export default function App() {
  let routers = createHashRouter ([
  {path:'', element:<Layout/>,children:[
    {index:true ,element:<Home/>},
    {path:'movie', element:<Movie/>},
    {path:'tv', element:<Tv/>},
    {path:'people', element:<People/>},
    {path:'itemdetails/:id/:media_type' , element:  <ItemDetails/> },
    {path:'login' , element: <Login />},
    {path:'register' , element: <Register/>},
    {path:'*' ,element:<NotFound/>},

  ]}
  ])

  return<RouterProvider router={routers}/>



  
  
}