import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import MyCart from "./Mycart";
import Burger from "./pages/Typesofburger";
import Pasta from "./pages/Pasta";
import Pizza from "./pages/Typesofpizza";
import Drinks from "./pages/Drinks";
import Search from "./pages/Search";
import Indianfood from "./pages/IndianFood";
import FavoritesPage from "./Components/favourite";
import Aboutus from "./pages/About-us";
import CustomerSupport from "./pages/CustomerSUpport";
import Deals from "./pages/Deals";
import MyOrder from "./pages/MyOrder";
import Location from "./Components/Location";
import Menu from "./Menu";
import Delivery from "./pages/Delivery";
import BookTable from "./pages/booktable";
import Login from "./pages/Login";
import Signin from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentPlaced from "./pages/PaymentPlaced";
const App = () => {
  return (
    <>
    
      <ToastContainer position="top-center" autoClose={2000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signin />} />
            <Route index path="/home" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/pizza" element={<Pizza />}></Route>
            <Route path="/mycart" element={<MyCart />}></Route>
            <Route path="/burger" element={<Burger />}></Route>
            <Route path="/pasta" element={<Pasta />}></Route>
            <Route path="/drinks" element={<Drinks />}></Route>
            <Route path="aboutus" element={<Aboutus />}></Route>
            <Route path="/deals" element={<Deals />}></Route>
            <Route path="/customerSupport" element={<CustomerSupport />}></Route>
            <Route path="search" element={<Search />} />
            <Route path="/indianfood" element={<Indianfood />} />
            <Route path="/favourites" element={<FavoritesPage />} />
            <Route path="/myorder" element={<MyOrder />} />
            <Route path="/location" element={<Location />} />
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/delivery" element={<Delivery />}></Route>
            <Route path="/booktable" element={<BookTable />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/paymentplaced" element={<PaymentPlaced />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
