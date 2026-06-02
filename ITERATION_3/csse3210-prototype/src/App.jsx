import { useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import routes from './routing/routes.jsx';

export default function App() {

  return (
    <RouterProvider router={routes} />
  )
}