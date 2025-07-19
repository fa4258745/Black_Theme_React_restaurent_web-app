// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import "../css/style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../Components/ExampleCrouselImage';

// const dealsData = [
//   {
//     id: 1,
//     title: "Family Feast Combo",
//     description: "Includes 2 large pizzas, garlic bread, and soft drinks.",
//     price: "₹799",
//     image: "/images/CARDOFFER.jpg",
//   },
//   {
//     id: 2,
//     title: "Burger Bonanza",
//     description: "2 juicy burgers, fries, and a soft drink combo.",
//     price: "₹299",
//     image: "/images/CARDOFFER2.jpg",
//   },
//   {
//     id: 3,
//     title: "Tandoori Night Deal",
//     description: "Tandoori platter for two with naan and dips.",
//     price: "₹499",
//     image: "/images/CARDOFFER3.jpg",
//   },
//   {
//     id: 4,
//     title: "Sweet Treats Offer",
//     description: "Buy 1 dessert, get 1 free – cakes, pastries, and more.",
//     price: "₹199",
//     image: "/images/CARDOFFER4.jpg",
//   },
// ];

// const Deals = () => {
//   return (
//     <>
//       <Container className="py-2">
//         <div className="text-center mb-5">
//           <h1 className="text-4xl fw-bold text-dark heading">Special Deals</h1>


//         <Card>
//         <Card.Img variant="top" width={"100%"} style={{height:"50%",objectFit:"cover"}} src="/images/Food Ordering App.jpg" />
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>


//           <p className="text-muted">
//             Grab our delicious offers before they're gone!
//           </p>
//         </div>
  

//         <Row className="g-4">
//           {dealsData.map((deal) => (
//             <Col key={deal.id} xs={12} md={6} lg={6}>
//               <Card className="h-100 shadow-sm border-0 rounded-4">
//                 <Card.Img
//                   variant="top"
//                   src={deal.image}
//                   alt={deal.title}
//                   style={{ height: "300px", objectFit: "contain" }}
//                 />
//                 <Card.Body className="d-flex flex-column justify-content-between">
//                   <div>
//                     <Card.Title className="fw-bold">{deal.title}</Card.Title>
//                     <Card.Text className="text-muted">
//                       {deal.description}
//                     </Card.Text>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <span className="text-danger fw-bold fs-5">
//                       {deal.price}
//                     </span>
//                     <Button variant="danger" className="px-4">
//                       Order Now
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>







// <div style={{display:"flex"}}>

//     <Card style={{padding:"20px"}}>
//         <Card.Img variant="top" width={"100%"} style={{height:"400px",objectFit:"cover"}} src="/images/Carousel-offer..jpg" />
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     <Card style={{padding:"20px"}}>
//         <Card.Img variant="top" width={"100%"} style={{height:"400px",objectFit:"cover"}} src="/images/Carousel-offer2.jpg" />
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
// </div>


    

// <div style={{display:"flex"}}>

//     <Card style={{padding:"20px"}}>
//         <Card.Img variant="top" width={"100%"} style={{height:"400px",objectFit:"cover"}} src="/images/Deals-offer3.jpg" />
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     <Card style={{padding:"20px"}}>
//         <Card.Img variant="top" width={"100%"} style={{height:"400px",objectFit:"cover"}} src="/images/Deals-offer4.jpg" />
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
// </div>

// <div style={{display:"flex"}}>
//     <Card style={{padding:"20px"}}>
//         <Card.Img variant="top"  style={{height:"300px",objectFit:"cover", width:"100%"}} src="/images/offerimages7.jpg" />
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     <Card style={{padding:"20px"}}>
//         <Card.Img variant="top" style={{height:"300px",objectFit:"cover",width:"100%"}} src="/images/offerimage8.jpg" />
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
// </div>

  
//     </>
//   );
// };

// export default Deals;

























import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const dealsData = [
  {
    id: 1,
    title: "Family Feast Combo",
    description: "Includes 2 large pizzas, garlic bread, and soft drinks.",
    price: "₹799",
    image: "/images/CARDOFFER.jpg",
  },
  {
    id: 2,
    title: "Burger Bonanza",
    description: "2 juicy burgers, fries, and a soft drink combo.",
    price: "₹299",
    image: "/images/CARDOFFER2.jpg",
  },
  {
    id: 3,
    title: "Tandoori Night Deal",
    description: "Tandoori platter for two with naan and dips.",
    price: "₹499",
    image: "/images/CARDOFFER3.jpg",
  },
  {
    id: 4,
    title: "Sweet Treats Offer",
    description: "Buy 1 dessert, get 1 free – cakes, pastries, and more.",
    price: "₹199",
    image: "/images/CARDOFFER4.jpg",
  },
];

const Deals = () => {
  return (
    <>
    <div className="cards-bg "  >


      <Container className="py-2">
        <div className="text-center mb-3">
          <h1 className="display-5 fw-bold  heading" style={{color:"#eaeaea"}}>Today's Special Deals</h1>
          <p className=" fs-5" style={{color:"#eaeaea"}}>
            Grab our delicious offers before they're gone!
          </p>
        </div>

        <Card className="hero-banner mb-5 overflow-hidden border-0 shadow-lg rounded-4">
          <Card.Img
            variant="top"
            className="img-fluid"
            style={{ height: "560px", objectFit: "cover", borderRadius: "15px" }}
            src="/images/Food Ordering App.jpg"
          />
          <Card.Body className=" text-center p-4" style={{backgroundColor:"#333333",color:"#eaeaea"}}>
            <Card.Text className="fs-5 " style={{}}>
              Enjoy the hottest meals delivered to your doorstep – fast, fresh, and delicious.
            </Card.Text>
          </Card.Body>
        </Card>

        <Row className="g-4 mb-5">
          {dealsData.map((deal) => (
            <Col key={deal.id} xs={12} md={6} lg={6}>
              <Card className="h-100 shadow border-0 rounded-4 hover-scale">
                <Card.Img
                  variant="top"
                  src={deal.image}
                  alt={deal.title}
                  style={{ height: "400px", objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between"  style={{backgroundColor:"#333333",color:"#eaeaea"}}>
                  <div>
                    <Card.Title className="fw-bold fs-4  text-white">{deal.title}</Card.Title>
                    <Card.Text className="text-white fs-6">{deal.description}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="text-white fw-bold fs-5">{deal.price}</span>
                    <Button style={{backgroundColor:"#000",color:"#eaeaea"}}  className="px-4 py-2 rounded-3 shadow-sm">
                      Order Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mb-4">
          <h2 className="fw-bold display-6 text-white ">Popular Offers</h2>
          <p className="text-white fs-5">Don’t miss out on customer favorites!</p>
        </div>

        <Row className="g-4 mb-5">
          {["Carousel-offer..jpg", "Carousel-offer2.jpg", "Deals-offer3.jpg", "Deals-offer4.jpg"].map((img, i) => (
            <Col key={i} xs={12} md={6}>
              <Card className="border-0 shadow-lg rounded-4 hover-scale">
                <Card.Img
                  variant="top"
                  className="img-fluid"
                  style={{ height: "300px", objectFit: "cover" }}
                  src={`/images/${img}`}
                />
                <Card.Body style={{backgroundColor:"#000",color:"#eaeaea"}} >
                  <Card.Text className=" text-center fs-5">
                    Some quick example text to build excitement around our deals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center my-4">
          <h2 className="fw-bold display-6 text-white">More Exciting Combos</h2>
          <p className="text-white fs-5">Explore additional combos curated just for you!</p>
        </div>

        <Row className="g-4 mb-5">
          <Col xs={12} md={6}>
            <Card className="h-100 shadow border-0 rounded-4 hover-scale">
              <Card.Img
                variant="top"
                src="/images/FOOD_OFFER10.jpg"
                alt="Pizza & Pasta Combo"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between" style={{backgroundColor:"#333333",color:"#eaeaea"}}>
                <div>
                  <Card.Title className="fw-bold fs-4 text-white">Pizza & Pasta Combo</Card.Title>
                  <Card.Text className="text-white fs-6">
                    Enjoy a cheesy pizza with creamy pasta and garlic bread.
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="text-white fw-bold fs-5">₹599</span>
                  <Button variant="" className="px-4 py-2 rounded-3 shadow-sm text-white bg-black">
                    Order Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="h-100 shadow border-0 rounded-4 hover-scale">
              <Card.Img
                variant="top"
                src="/images/FOOD-OFFER9.jpg"
                alt="Healthy Delight Pack"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between " style={{backgroundColor:"#333333",color:"#eaeaea"}}>
                <div>
                  <Card.Title className="fw-bold fs-4 text-white">Healthy Delight Pack</Card.Title>
                  <Card.Text className="text-white fs-6">
                    Fresh salad bowl, smoothie, and multigrain sandwich combo.
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="text-white fw-bold fs-5">₹399</span>
                  <Button variant="danger" className="px-4 py-2 rounded-3 shadow-sm text-white bg-black">
                    Order Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

    </>
  );
};

export default Deals;



















































// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import "../css/style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Deals = () => {
//   return (
//     <Container className="deals-section py-5">
//       {/* Hero */}
//       <Card className="hero-card mb-5">
//         <Card.Img src="/images/Food Ordering App.jpg" />
//         <Card.Body>
//           <h2 className="hero-title">🔥 Today's Featured Deal</h2>
//           <p className="hero-subtext">
//             Discover our hottest offer! Fresh, fast, and flavorful – don’t miss out.
//           </p>
//         </Card.Body>
//       </Card>

//       {/* Special Deals */}
//       <div className="section-header text-center mb-5">
//         <h2>Special Deals</h2>
//         <p>Hand-picked combos curated for your cravings</p>
//       </div>

//       <Row className="g-4 mb-5">
//         <Col xs={12} md={6}>
//           <Card className="deal-card">
//             <Card.Img variant="top" src="/images/CARDOFFER.jpg" />
//             <Card.Body>
//               <Card.Title>Family Feast Combo</Card.Title>
//               <Card.Text>
//                 Includes 2 large pizzas, garlic bread, and soft drinks.
//               </Card.Text>
//               <div className="deal-footer">
//                 <span className="price">₹799</span>
//                 <Button className="order-btn">Order Now</Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col xs={12} md={6}>
//           <Card className="deal-card">
//             <Card.Img variant="top" src="/images/Burger-offer.jpg" />
//             <Card.Body>
//               <Card.Title>Burger Bonanza</Card.Title>
//               <Card.Text>
//                 2 juicy burgers, fries, and a soft drink combo.
//               </Card.Text>
//               <div className="deal-footer">
//                 <span className="price">₹299</span>
//                 <Button className="order-btn">Order Now</Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col xs={12} md={6}>
//           <Card className="deal-card">
//             <Card.Img variant="top" src="/images/Pepporoni-pizza.png" />
//             <Card.Body>
//               <Card.Title>Tandoori Night Deal</Card.Title>
//               <Card.Text>
//                 Tandoori platter for two with naan and dips.
//               </Card.Text>
//               <div className="deal-footer">
//                 <span className="price">₹499</span>
//                 <Button className="order-btn">Order Now</Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col xs={12} md={6}>
//           <Card className="deal-card">
//             <Card.Img variant="top" src="/images/spaghetti-9335477_1280.png" />
//             <Card.Body>
//               <Card.Title>Sweet Treats Offer</Card.Title>
//               <Card.Text>
//                 Buy 1 dessert, get 1 free – cakes, pastries, and more.
//               </Card.Text>
//               <div className="deal-footer">
//                 <span className="price">₹199</span>
//                 <Button className="order-btn">Order Now</Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Popular Offers */}
//       <div className="section-header text-center mb-4">
//         <h2>🎉 Popular Offers</h2>
//         <p>Don't miss out on customer favorites!</p>
//       </div>

//       <Row className="g-4">
//         <Col xs={12} md={6}>
//           <Card className="deal-card">
//             <Card.Img variant="top" src="/images/Carousel-offer..jpg" />
//             <Card.Body>
//               <Card.Text>Try something new from our best-sellers this week!</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col xs={12} md={6}>
//           <Card className="deal-card">
//             <Card.Img variant="top" src="/images/Carousel-offer2.jpg" />
//             <Card.Body>
//               <Card.Text>Try something new from our best-sellers this week!</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col xs={12} md={6}>
//           <Card className="deal-card">
//             <Card.Img variant="top" src="/images/Deals-offer3.jpg" />
//             <Card.Body>
//               <Card.Text>Try something new from our best-sellers this week!</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col xs={12} md={6}>
//           <Card className="deal-card">
//             <Card.Img variant="top" src="/images/Deals-offer4.jpg" />
//             <Card.Body>
//               <Card.Text>Try something new from our best-sellers this week!</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={12} md={6}>
//           <Card className="deal-card">
//             <Card.Img variant="top" src="/images/offerimages7.jpg" />
//             <Card.Body>
//               <Card.Text>Try something new from our best-sellers this week!</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col xs={12} md={6}>
//           <Card className="deal-card">
//             <Card.Img variant="top" src="/images/offerimage8.jpg" />
//             <Card.Body>
//               <Card.Text>Try something new from our best-sellers this week!</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Deals;




















