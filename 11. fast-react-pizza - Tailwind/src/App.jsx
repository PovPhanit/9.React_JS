import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu,{loader as menuLoader} from "./features/menu/Menu";
import Card from "./features/cart/Cart";
import CreateOrder,{action as createOrderAction} from "./features/order/CreateOrder";
import Order, {loader as orderLoader} from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
const router = createBrowserRouter([
  {
    //navigate and send element in Applayout
    element: <AppLayout />,
    //send error to page Error
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        //get data from API
        loader:menuLoader,
        //error Block Menu
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Card />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action:createOrderAction
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        //get data from API
        loader:orderLoader,
        //error Block Order
        errorElement: <Error />
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}


// createBrowserRouter([
//   {
//     element: for page Applayout (provide outlet join in Applayout),
//     errorElement: for error page outside,
//     children:[
//       path:"..." for path page,
//       element: for go to page,
//       loader: for store data API  (page in block can use data in API by useLoaderData() ),
//       errorElement: for error page inside Applayout
//       action: for post to API
//     ]
//   }
// ])

/* <RouterProvider variCBR={variCBR}/> : for provide route to App  */
// useNavigation(); : loading when request api (when request already then false)
//useRouteError(); : for output data and message when error
// useLoaderData(); : for use data in API 
// useParams(); : for catch ID from HTTP (like /:...)
// useActionData(); : for use data action in API (Post)
// redirect('path') : for go to path of page
// vari.FormData()  : use data in Form 