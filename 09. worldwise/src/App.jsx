import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="Product" element={<Product />} />
            <Route path="Pricing" element={<Pricing />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

// npm i react-leaflet leaflet
// npm i react-datepicker





/* <BrowserRouter>
  <Routes>
  <Route path="/" element={<Homepage />} />
  </Routes>
</BrowserRouter> */
//        /       : for Homepage
//    nameBrowser : for go to page
//        *       : for dont have name page
// ================================
  /* <Link to="/namePage"></Link>   : click go to page (no refresh the same a href) 
<NavLink to="/namepage"></NavLink>     : click go to page (navbar) */

    /* <Route index element={<Navigate replace to="cities"/>} /> : put default to .../cities and replace (can back to page by step) */
  
  
    /* <Outlet /> : for many element in parent routes(import from Router ) */
  
  // const {id}=useParams(); : for catch id on htpp
  // const navigate=useNavigate(); : fir click but it will go to htpp by set useNavigate
  // Navigate(-1);  back to pevious htpp
  // ==================================================
  // const [searchParams,setSearchParams]=useSearchParams(); : get ot htpp
  //   const lat=searchParams.get('lat');

// const nameContext=createContext(); : for create context from React
//const context= useContext(variCreateContext) : use the value from createContext
