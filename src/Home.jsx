// import Carousel from "react-bootstrap/Carousel";
// import carousel1 from "../public/images/Banner.jpg";
// import carousel2 from "../public/images/Carousel-img2.avif";
// import carousel3 from "../public/images/Carousel-im-3.jpg";
// import carousel4 from "../public/images/MAIN_BG.jpg";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { addToCart, addToFav } from "./CreateSlice";
// import Banner from "../public/images/Carousel-img-1.jpg";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { IoFastFood } from "react-icons/io5";
// import { GiHamburger } from "react-icons/gi";
// import { FaBowlFood } from "react-icons/fa6";
// // import MenuCard from "../public/images/Menu-card.png"
// import "./css/style.css";
// import { IoPizza } from "react-icons/io5";
// import Burger from "./pages/Typesofburger";
// import { PiBowlFood } from "react-icons/pi";
// import { RiDrinks2Fill } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
// const Home = () => {
//   const [input, setInput] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const dispatch = useDispatch();
//   const [favorites, setFavorites] = useState({});
//   const navigate=useNavigate();

//   const toggleFavorite = (id) => {
//     setFavorites((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const loadAllData = () => {
//     setFilteredData(input);
//   };

//   const loadPizzaData = () => {
//     const pizzaOnly = input.filter((item) => item.category === "pizza");
//     setFilteredData(pizzaOnly);
//   };
//   const loadBurgerData = () => {
//     const BurgerOnly = input.filter((item) => item.category === "burger");
//     setFilteredData(BurgerOnly);
//   };
//   const loadFriesData = () => {
//     const FrenchFries = input.filter((item) => item.category === "pasta");
//     setFilteredData(FrenchFries);
//   };
//   const loadDrinksData = () => {
//     const Softdrinks = input.filter((item) => item.category === "drinks");
//     setFilteredData(Softdrinks);
//   };
//   const loadIndianfoodData = () => {
//     const IndianFood = input.filter((item) => item.category === "indianfood");
//     setFilteredData(IndianFood);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     const api = "http://localhost:3000/CART";
//     const res = await axios.get(api);
//     setInput(res.data);
//     setFilteredData(res.data);
//   };
//   // const loadData2 = async () => {
//   //   const api = "http://localhost:3000/CART";
//   //   const res = await axios.get(api);
//   //   setIncons(res.data);
//   // };

//   // const loadDatapizza=async()=> {
//   //      const api = "http://localhost:3000/CART/?category=pizza";
//   //   const res = await axios.get(api);
//   //   setPizza(res.data);
//   // }

//   const renderedCards = filteredData.map((key) => {
//     const isFavorite = favorites[key.id] || false;
//     return (
//       <Card
//         key={key.id}
//         style={{
//           width: "15rem",
//           margin: "10px",
//           border: "1px solid #000",
//           boxShadow: "0px 0px 5px #000",
//           borderRadius: 5,
//         }}
//       >
//         <div style={{ position: "absolute" }}>
//           {isFavorite ? (
//             <FaHeart
//               style={{
//                 fontSize: "34px",
//                 marginTop: "200px",
//                 marginLeft: "10px",
//                 width: "100%",
//                 color: "#EB1414",
//                 cursor: "pointer",
//               }}
//               onClick={() => toggleFavorite(key.id)}
//             />
//           ) : (
//             <FaRegHeart
//               style={{
//                 fontSize: "25px",
//                 marginTop: "200px",
//                 marginLeft: "10px",
//                 width: "100%",
//                 color: "#EB1414",
//                 cursor: "pointer",
//               }}
//               onClick={() => {
//                 toggleFavorite(key.id);
//                 dispatch(
//                   addToFav({
//                     id: key.id,
//                     name: key.name,
//                     productName: key.productName,
//                     category: key.category,
//                     images: key.images,
//                     qnty: 1,
//                     price: key.price,
//                   })
//                 );
//               }}
//             />
//           )}
//         </div>
//         <Card.Img
//           variant="top"
//           src={key.images}
//           style={{ height: "240px", width: "100%", objectFit: "conver" }}
//         />
//         <div className="overlay">
//           <Card.Body style={{ background: "#fff", color: "black" }}>
//             <Card.Title>{key.name}</Card.Title>
//             <Card.Text>{key.description}</Card.Text>
//             <h3>{key.productName}</h3>
//             <h4>Price: ₹{key.price}</h4>
//             <Button
//               style={{
//                 backgroundColor: "#EB1414",
//                 padding: "10px 45px",
//                 textTransform: "uppercase",

//                 border: "none",
//                 color: "#eaeaea",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//               onClick={() =>
//                 dispatch(
//                   addToCart({
//                     id: key.id,
//                     name: key.name,
//                     productName: key.productName,
//                     category: key.category,
//                     images: key.images,
//                     qnty: 1,
//                     price: key.price,
//                   })
//                 )
//               }
//             >
//               Add to Cart
//             </Button>
//           </Card.Body>
//         </div>
//       </Card>
//     );
//   });

//   return (
//     <>
//       <div
//         className="flex items-center justify-center h-screen bg-green-500"
//         style={{
//           position: "fixed",
//           zIndex: "1000",
//           right: "10px",
//           bottom: "35px",
//         }}

//         onClick={()=> {
//           navigate("/booktable")
//         }}
//       >
//         <svg width="120" height="120" viewBox="0 0 300 300">
//           <defs>
//             <path
//               id="circlePath"
//               d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
//             />
//           </defs>

//           {/* Circular Text */}
//           <text fill="black" fontSize="20" fontWeight="bold">
//             <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
//               BOOK A TABLE • BOOK A TABLE • BOOK A TABLE •BOOK A TABLE•
//             </textPath>
//           </text>

//           {/* Center Image */}
//           <image
//             href="/images/pizza-6.png"
//             x="90"
//             y="90"
//             height="120"
//             width="120"
//             clipPath="circle(50px at center)"
//           />
//         </svg>
//       </div>

//       <Carousel fade>
//         <Carousel.Item>
//           <img
//             src={carousel4}
//             style={{ height: "550px", objectFit: "cover", width: "100%" }}
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             src={carousel1}
//             style={{ height: "550px", objectFit: "cover", width: "100%" }}
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             src={carousel2}
//             style={{ height: "550px", objectFit: "cover", width: "100%" }}
//           />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             src={carousel3}
//             style={{ height: "550px", objectFit: "cover", width: "100%" }}
//           />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       {/*
//       <div
//         style={{
//           display: "flex",
//           gap: "0px",
//           flexWrap: "wrap",
//           padding: "20px",
//           justifyContent: "space-around",
//           backgroundColor: "#eaeaea",
//         }}
//       > */}

//       <h2
//         className="heading text-4xl fw-bold text-dark"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "5px",
//         }}
//       >
//         Our Popular Foods
//       </h2>
//       <div className="button-box">
//         <div className="container-text-icon" onClick={loadAllData}>
//           <IoFastFood className="food-icon" />
//           <p>All Food</p>
//         </div>

//         <div className="container-text-icon" onClick={loadPizzaData}>
//           <IoPizza className="food-icon" />
//           <p>Pizza</p>
//         </div>

//         <div className="container-text-icon" onClick={loadBurgerData}>
//           <GiHamburger className="food-icon" />
//           <p>Burger</p>
//         </div>

//         {/* <button onClick={loadFriesData} className="btn-box">
//           Pasta
//         </button> */}

//         <div className="container-text-icon" onClick={loadFriesData}>
//           <PiBowlFood className="food-icon" />
//           <p>Pasta</p>
//         </div>

//         <div className="container-text-icon" onClick={loadDrinksData}>
//           <RiDrinks2Fill className="food-icon" />
//           <p>Beverages</p>
//         </div>
//         <div className="container-text-icon" onClick={loadIndianfoodData}>
//           <FaBowlFood className="food-icon" />
//           <p>Indian Food</p>
//         </div>
//       </div>

//       <div
//         style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//       >
//         {renderedCards}
//         <button className="load-btn">Load More</button>
//       </div>

//       <div className="banner-img">
//         <img src={Banner} className="bannerimg" />
//       </div>

//       <div className="footerbg">
//         <div className="coverBg">
//           <div className="background-text">
//             <div className="menu-container">
//               <h2 className="heading text-3xl fw-bold text-dark">Our Menu</h2>
//               <div className="main-container-1">
//                 <div className="container1">
//                   <h4>Types of Pizza</h4>
//                   <p>Pepperoni Pizza</p>
//                   <p>Vegie Delight Pizza</p>
//                   <p>Classic Pizza</p>
//                   <p>Supreme Pizza</p>
//                   <p>Tomato Pizza</p>
//                   <p>Pepproni Basil Pizza</p>
//                   <p>Cheesy Pepproni Pizza</p>
//                   <p>Margherita Pizza</p>
//                   <p>Tomato Eggplant Pizza</p>
//                   <p>Veggie Deluxe Pizza</p>
//                 </div>

//                 <div className="container2">
//                   <h4>Types of Burgers</h4>
//                   <p>Beef Burger</p>
//                   <p>Chicken Burger</p>
//                   <p>Veggie Burger</p>
//                   <p>Lamb Burger</p>
//                   <p>Cheese Burger</p>
//                   <h4>Pasta</h4>
//                   <p>Basil Pasta</p>
//                   <p>Mezze Spread</p>
//                   <p>Pasta</p>
//                   <p>Noodles</p>
//                   <p>Sapghetti Pasta</p>
//                 </div>
//                 <div className="container3">
//                   <h4>Beverages</h4>
//                 <p>Cherry Juice</p>
//                 <p>Lemonade</p>
//                 <p>Ginger Juice</p>
//                 <p>Cola</p>
//                 <p>Orange Juice
// </p>
//                 <p>Beverage</p>
//                 <p>Cherry Ice</p>
//                 <p>Lemon Juice</p>
//                 <p>Orange Juice</p>
//                 <p>Cold Coffee</p>
//                 </div>
//                 <div className="container4">
//                   <h4>Indian Food</h4>
//                   <p>Chole-Bhature</p>
//                   <p>Butter Chicken</p>
//                   <p>Dal-Makhni</p>
//                   <p>Biryani</p>
//                   <p>Idli-Dosa</p>
//                   <p>Palak-Paneer</p>
//                   <p>Paneer-Tikka</p>
//                   <p>Rogan-Josh</p>
//                   <p>Aloo-Paratha</p>
//                   <p>Samosa</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../public/images/hero-slider-1.jpg";
import carousel2 from "../public/images/hero-slider-2.jpg";
import carousel3 from "../public/images/footer-bg.jpg";
import carousel4 from "../public/images/MAIN_BG.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, addToFav } from "./CreateSlice";
import Banner from "../public/images/Carousel-img-1.jpg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import "./css/style.css";
import { IoPizza } from "react-icons/io5";
import { PiBowlFood } from "react-icons/pi";
import { RiDrinks2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const [input, setInput] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); // <-- for load more
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  // <-------------LOGIN------------>
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleAddToCart = (item) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      dispatch(addToCart(item));
    }
  };

  // <----------FAVOURTIE------------->
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const loadAllData = () => {
    setFilteredData(input);
    setVisibleCount(6); // reset visible count
  };

  const loadPizzaData = () => {
    const pizzaOnly = input.filter((item) => item.category === "pizza");
    setFilteredData(pizzaOnly);
    setVisibleCount(10);
  };

  const loadBurgerData = () => {
    const BurgerOnly = input.filter((item) => item.category === "burger");
    setFilteredData(BurgerOnly);
    setVisibleCount(10);
  };

  const loadFriesData = () => {
    const FrenchFries = input.filter((item) => item.category === "pasta");
    setFilteredData(FrenchFries);
    setVisibleCount(10);
  };

  const loadDrinksData = () => {
    const Softdrinks = input.filter((item) => item.category === "drinks");
    setFilteredData(Softdrinks);
    setVisibleCount(10);
  };

  const loadIndianfoodData = () => {
    const IndianFood = input.filter((item) => item.category === "indianfood");
    setFilteredData(IndianFood);
    setVisibleCount(10);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const api = "http://localhost:3000/CART";
    const res = await axios.get(api);
    setInput(res.data);
    setFilteredData(res.data);
  };

  const renderedCards = filteredData.slice(0, visibleCount).map((key) => {
    const isFavorite = favorites[key.id] || false;
    return (
      <Card
        key={key.id}
        style={{
          width: "14rem",
          margin: "10px",
          border: "1px solid #333333 ",
          boxShadow: "0px 0px 5px #1F1F1F",
          borderRadius: 5,
          overflow: "hidden",
          backgroundColor: "#eaeaea",
        }}
        className="card-hover-3d"
      >
        <div style={{ position: "absolute" }}>
          {isFavorite ? (
            <FaHeart
              style={{
                fontSize: "34px",
                marginTop: "200px",
                marginLeft: "10px",
                width: "100%",
                color: "#EB1414",
                cursor: "pointer",
              }}
              onClick={() => toggleFavorite(key.id)}
            />
          ) : (
            <FaRegHeart
              style={{
                fontSize: "25px",
                marginTop: "200px",
                marginLeft: "10px",
                width: "100%",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => {
                toggleFavorite(key.id);
                dispatch(
                  addToFav({
                    id: key.id,
                    name: key.name,
                    productName: key.productName,
                    category: key.category,
                    images: key.images,
                    qnty: 1,
                    price: key.price,
                  })
                );
              }}
            />
          )}
        </div>
        <Card.Img
          variant="top"
          src={key.images}
          style={{ height: "200px", width:"100%", objectFit: "cover" }}
        />
        <div className="overlay">
          <Card.Body
            style={{
              backgroundColor: "#eaeaea",
              overflow: "hidden",
              color: "#000",
            }}
          >
            <Card.Title>{key.name}</Card.Title>
            <Card.Text>{key.description}</Card.Text>
            <h3>{key.productName}</h3>
            <h4>Price: ₹{key.price}</h4>

            <Button
              style={{
                backgroundColor: "#000",
                padding: "10px 45px",
                textTransform: "uppercase",
                border: "none",
                color: "#eaeaea",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:"none"
              }}
              onClick={() =>
                handleAddToCart({
                  id: key.id,
                  name: key.name,
                  productName: key.productName,
                  category: key.category,
                  images: key.images,
                  qnty: 1,
                  price: key.price,
                })
              }
            >
              Add to Cart
            </Button>
          </Card.Body>
        </div>
      </Card>
    );
  });

  return (
    <>
      {/* BOOK A TABLE BUTTON */}
      <div
        className="flex items-center justify-center h-screen  card-hover-3d"
        style={{
          position: "fixed",
          zIndex: "1000",
          right: "10px",
          bottom: "35px",
          color:"white"
        }}
        onClick={() => {
          navigate("/booktable");
        }}
      >
        <svg width="120" height="120" viewBox="0 0 300 300">
          <defs>
            <path
              id="circlePath"
              d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
            />
          </defs>
          <text fill="white" fontSize="20" fontWeight="bold">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              BOOK A TABLE • BOOK A TABLE • BOOK A TABLE •BOOK A TABLE•
            </textPath>
          </text>
          <image
            href="/images/pizza-6.png"
            x="90"
            y="90"
            height="120"
            width="120"
            clipPath="circle(50px at center)"
          />
        </svg>
      </div>

      {/* CAROUSEL */}
      <Carousel fade>
        {[carousel4, carousel1, carousel2, carousel3].map((src, i) => (
          <Carousel.Item key={i}>
            <img
              src={src}
              style={{ height: "100%", objectFit: "cover", width: "100%" }}
            />
            <Carousel.Caption>
              <h3>{`Slide ${i + 1}`}</h3>
              <p>Sample caption for slide {i + 1}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="cards-bg" >
        {/* CATEGORY FILTER BUTTONS */}
        <h2
          className="heading text-4xl fw-bold text-dark"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",

           
            
          }}
        >
          Our Popular Foods
        </h2>

        <div className="button-box">
          <div className="container-text-icon" onClick={loadAllData}>
            <IoFastFood className="food-icon" />
            <p>All Food</p>
          </div>
          <div className="container-text-icon" onClick={loadPizzaData}>
            <IoPizza className="food-icon" />
            <p>Pizza</p>
          </div>
          <div className="container-text-icon" onClick={loadBurgerData}>
            <GiHamburger className="food-icon" />
            <p>Burger</p>
          </div>
          <div className="container-text-icon" onClick={loadFriesData}>
            <PiBowlFood className="food-icon" />
            <p>Pasta</p>
          </div>
          <div className="container-text-icon" onClick={loadDrinksData}>
            <RiDrinks2Fill className="food-icon" />
            <p>Beverages</p>
          </div>
          <div className="container-text-icon" onClick={loadIndianfoodData}>
            <FaBowlFood className="food-icon" />
            <p>Indian Food</p>
          </div>
        </div>

        {/* PRODUCT LISTING + LOAD MORE */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {renderedCards}
        </div>
        {visibleCount < filteredData.length && (
          <div style={{ textAlign: "center", margin: "20px" }}>
            <button
              className="load-btn"
              onClick={() => setVisibleCount((prev) => prev + 5)}
            >
              Load More
            </button>
          </div>
        )}

        {/* BANNER IMAGE */}

        <div className="banner-img">
          <img src={Banner} className="bannerimg" />
        </div>

        {/* FOOTER MENU */}
        <div className="footerbg" style={{ backgroundColor: "#1F1F1F " }}>
          <div className="coverBg">
            <div className="background-text">
              <div className="menu-container">
                <h2 className="heading text-3xl fw-bold text-dark">Our Menu</h2>
                <div className="main-container-1">
                  <div className="container1">
                    <h4>Types of Pizza</h4>
                    <p>Pepperoni Pizza</p>
                    <p>Vegie Delight Pizza</p>
                    <p>Classic Pizza</p>
                    <p>Supreme Pizza</p>
                    <p>Tomato Pizza</p>
                    <p>Pepproni Basil Pizza</p>
                    <p>Cheesy Pepproni Pizza</p>
                    <p>Margherita Pizza</p>
                    <p>Tomato Eggplant Pizza</p>
                    <p>Veggie Deluxe Pizza</p>
                  </div>
                  <div className="container2">
                    <h4>Types of Burgers</h4>
                    <p>Beef Burger</p>
                    <p>Chicken Burger</p>
                    <p>Veggie Burger</p>
                    <p>Lamb Burger</p>
                    <p>Cheese Burger</p>
                    <h4>Pasta</h4>
                    <p>Basil Pasta</p>
                    <p>Mezze Spread</p>
                    <p>Pasta</p>
                    <p>Noodles</p>
                    <p>Spaghetti Pasta</p>
                  </div>
                  <div className="container3">
                    <h4>Beverages</h4>
                    <p>Cherry Juice</p>
                    <p>Lemonade</p>
                    <p>Ginger Juice</p>
                    <p>Cola</p>
                    <p>Orange Juice</p>
                    <p>Beverage</p>
                    <p>Cherry Ice</p>
                    <p>Lemon Juice</p>
                    <p>Orange Juice</p>
                    <p>Cold Coffee</p>
                  </div>
                  <div className="container4">
                    <h4>Indian Food</h4>
                    <p>Chole-Bhature</p>
                    <p>Butter Chicken</p>
                    <p>Dal-Makhni</p>
                    <p>Biryani</p>
                    <p>Idli-Dosa</p>
                    <p>Palak-Paneer</p>
                    <p>Paneer-Tikka</p>
                    <p>Rogan-Josh</p>
                    <p>Aloo-Paratha</p>
                    <p>Samosa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
