import Login from "./pages/login.jsx"
import "./assets/css/login.css";
import Signup from "./pages/signup.jsx";
import {RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner.jsx";
import MediaCard from "./pages/Card.jsx";
import Dashboard from "./pages/Admin.jsx";
import FAQ from "./components/FAQ.jsx";
import TableWithEditOptions from "./components/Table.jsx";
import Profilepage from "./pages/Profilepage.jsx";
import ProfileForm from "./components/ProfileForm.jsx";


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
    },
    {
      path:'/card',
      element:<MediaCard/>
    },
    {
      path:'/admin',
      element:<Dashboard/>
    },
    {
      path:'/faq',
      element:<FAQ/>
    },
    {
      path:'/table',
      element:<TableWithEditOptions/>
    },
    {
      path:'/profile',
      element:<Profilepage/>
    },
    {
      path:'pform',
      element:<ProfileForm/>
    }
  ])
  return (
    
    
    <>
      <RouterProvider router={router}/>
    </>
   
  )
}
export default App
