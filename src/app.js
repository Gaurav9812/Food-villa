const React  = require("react");
const ReactDOM = require("react-dom/client");
//Default Import and Named Imort
import Header, { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";

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
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />  
      },
      {
        path : "/restaurent/:resId",
        element : <RestaurentMenu />
      }
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
