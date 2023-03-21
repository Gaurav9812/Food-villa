const React  = require("react");
const ReactDOM = require("react-dom/client");
//Default Import and Named Imort
import Header, { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import Profile from "./components/ProfileClass"; 
import { lazy , Suspense} from "react";
import Shimmer from "./components/Shimmer";


//Chuncking
//Code Splitting
//Dynamic Bundking
//Lazy Loading
//On Demand Loading
//Dynamic Import

const About = lazy(() => import('./components/About'));
const Instamart = lazy(() =>  import("./components/Instamart")); 


const root = ReactDOM.createRoot(document.getElementById("root"));

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const AppRouter = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    errorElement: <Error/>,
    children:[
      {
        path : "/", 
        element : <Body />
      },
      {
        path : "/about",
        element : <Suspense fallback={<h1>Loading....</h1>}> <About /></Suspense>,
        children :[
          { 
            path: 'profile',
            element: <Profile />
          }
        ]
      }, 
      {
        path : "/contact",
        element : <Contact />  
      },
      {
        path : "/restaurent/:resId",
        element : <RestaurentMenu />
      },
      {
        path : "/instamart",
        element : <Suspense fallback = {<Shimmer />}> <Instamart /> </Suspense>
      },
    ]
  } ,
  
]

) 
 
root.render(<RouterProvider router={AppRouter} />);

// const Body = () => {
//     return (
//       <div className="restaurent-list">
//         <RestaurentCard restaurent={RestaurentList[0]} />
//         <RestaurentCard restaurent={RestaurentList[1]} />
//         <RestaurentCard restaurent={RestaurentList[2]} />
//         <RestaurentCard restaurent={RestaurentList[3]} />
//         <RestaurentCard restaurent={RestaurentList[4]} />
//       </div>
//     );
//   };
