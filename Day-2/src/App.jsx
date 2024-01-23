import Login from "./pages/login.jsx"
import "./assets/css/login.css";
import Signup from "./pages/signup.jsx";
import {RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Contact from "./pages/Contact.jsx";
// import About from "./pages/About.jsx";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner.jsx";
const LazyAbout=lazy(()=> import("./pages/About.jsx"));
const LazyContact=lazy(()=> import("./pages/Contact.jsx"));

function App() {
  const router = createBrowserRouter([
    {
      path:`/login`,
      element:<Login/>
    },
    {
      path:`/signup`,
      element:<Signup/>
    },
    {
      path:`/home`,
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path:`/contact`,
      element:<Suspense fallback={<Spinner/>}><LazyContact/></Suspense>
    },
    {
      path:'/about',
      element:<Suspense fallback={<Spinner/>}><LazyAbout/></Suspense>
    }
  ])
  return (
    
    
    <>
      <RouterProvider router={router}/>
    </>
   
  )
}
export default App
