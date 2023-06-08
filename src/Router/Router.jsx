import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
children: [
{
path:'/',
element:<Home></Home>
},
{
path:'login',
element:<Login></Login>
},
{
path:'register',
element:<Register></Register>
},
{
path:'instructors',
element:<Instructors></Instructors>
},
{
path:'allClasses',
element:<AllClasses></AllClasses>
},

]
  },
]);

export default router;