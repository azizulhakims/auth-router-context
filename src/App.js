import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './routers/PrivateRoute';
import Orders from './components/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoute><Home></Home></PrivateRoute>,
        },
        {
          path: '/orders',
          element: <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        },
        {
          path: '/register',
          element: <Register></Register>
        },

        {
          path: '/login',
          element: <Login></Login>
        },


      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
