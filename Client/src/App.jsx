import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import GetUser from "./components/GetUser/GetUser";
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  const route =createBrowserRouter([
    {
      path:"/",
      element:<GetUser/>
    },
    {
      path:"/add",
      element:<AddUser/>
    },
    {
      path:"/edit/:id",
      element:<UpdateUser/>
    },
  ]
  )
  return (
    <>
     <div className='App'>
      <RouterProvider router={route}></RouterProvider>
     </div>
    </>
  );
}

export default App;
