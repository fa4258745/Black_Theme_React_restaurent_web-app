import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import "./SocialIcons.css"
// import logo from "../LOGO/pizza-logo.png"
// import logo from "../LOGO/MC-logo.png"
import logo from "../LOGO/Fries-bg.png";
// import logo from "../LOGO/Burger-fries-bg.png"
import {logout} from "../AuthSlice"
function NavScrollExample() {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.myCart.cart);
  console.log(cartData);
  const cartLength = cartData.length;
  const favData = useSelector((state) => state.myCart.favourite);
  console.log(favData);
  const favLength = favData.length;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Optional: Redirect to login page
  };

  return (
    <Navbar
      expand="lg"
      style={{
        background: "#121212",
        position: "sticky",
        color: "white",
        top: 0,
        zIndex: 1000,
      }}
    >
      
      <Container fluid>
        <img
          src={logo}
          alt="logo"
          height="75"
          style={{ borderRadius: "200px" }}
        />
        <Navbar.Brand
          as={Link}
          to="/home"
          style={{ color: "white", fontSize: "30px" }}
        ></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/home"
              style={{
                color: "white",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/pizza"
              style={{ color: "white", fontSize: "20px" }}
            >
              Pizza
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/burger"
              style={{ color: "white", fontSize: "20px" }}
            >
              Burgers
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/pasta"
              style={{ color: "white", fontSize: "20px" }}
            >
              Pasta
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/drinks"
              style={{ color: "white", fontSize: "20px" }}
            >
              Beverages
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/indianfood"
              style={{ color: "white", fontSize: "20px" }}
            >
              Indian Food
            </Nav.Link>

          </Nav>

          <Nav.Link as={Link} to="search" style={{fontSize:"25px"}} >
            Search
              <CiSearch style={{fontSize:"40px"}} />
          </Nav.Link>
         
           
        </Navbar.Collapse>
      </Container>

      <div
        style={{
          display: "flex",
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div id="favourite-num">
          {favLength}
          <FaHeart
            style={{ fontSize: "30px" }}
            onClick={() => {
              navigate("/favourites");
            }}
            className="heart-icon"
          />
        </div>
        <FaLocationDot className="heart-icon" style={{ fontSize: "30px" }} onClick={()=> {
          navigate("/location")
        }} />
        <div id="header">
          {cartLength}
          <FaCartShopping
            onClick={() => {
              navigate("/mycart");
            }}
            style={{ fontSize: "30px" }}
          />
        </div>
     

{isLoggedIn ? (
     <button onClick={handleLogout}>
      Logout
    </button>
) : (
<>

        <button className="btn" onClick={()=> {
          navigate("/signin")
        }}>Signin</button>

        <button className="btn" onClick={()=> {
          navigate("/login")
        }}>Login</button>
</>)}

      </div>
    </Navbar>
  );
}

export default NavScrollExample;
