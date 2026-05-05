import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { RouterProvider } from 'react-router-dom';
import routes from './routing/routes.jsx';

// import { ThemeProvider } from './contexts/ThemeContext.jsx';

export default function App() {

  return (
    // <ThemeProvider>
        <RouterProvider router={routes} />
    // </ThemeProvider>
  )
}
