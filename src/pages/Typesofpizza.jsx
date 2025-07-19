import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCart } from "../CreateSlice";
import { useDispatch } from "react-redux";
import "../css/style.css";
const Pizza = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData = async () => {
    const response = await axios.get(
      "http://localhost:3000/CART/?category=pizza"
    );
    console.log(response.data);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => {
    return (
      <>
     <div style={{backgroundColor:" #111111",color:"#fff"}}>
        <Card className="card-hover-3d" style={{ width: "15rem" }} >
          <Card.Img variant="top" src={key.images} className="card-design" />
          <Card.Body  >
            <Card.Title className="color-red">{key.productName}</Card.Title>
            <Card.Text >{key.description}</Card.Text>
            <h3 className="color-red"> Price : {key.price}</h3>
            <Button
              className="button-box pizza-btn"
              onClick={() => {
                dispatch(
                  addToCart({
                    id: key.id,
                    name: key.name,
                    description: key.description,
                    category: key.category,
                    image: key.image,
                    qnty: 1,
                    price: key.price,
                  })
                );
              }}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
</div>
      </>
    );
  });

  return (
    <>
      <h1 className="text-4xl fw-bold text-dark heading"> Pizza</h1>
      <div className="pizza "  style={{flexWrap:"wrap",display:"flex",alignItems:"center",justifyContent:"center" }}>
      
      {ans}</div>
      <div className="background-pizza">
      <div className="pizza-container">
   {/* <h1 className="pizza-heading">Pizza Menu</h1> */}


    <div className="pizza-container1">
     <h4>Pepperoni Pizza</h4>
     <h4>Vegie Delight Pizza</h4>
     <h4>Classic Pepperoni Pizza</h4>
     <h4>Supreme Pizza
</h4>
     <h4>Tomato Pizza</h4>
    </div>
    <div className="pizza-container2">
     <h4>Pepproni Basil Pizza</h4>
     <h4>Margherita Pizza
</h4>
     <h4>Cheesy Pepproni Pizza</h4>
     <h4>Veggie Deluxe Pizza</h4>
     <h4>Tomato Eggplant Pizza</h4>
      </div>
    </div>

      </div>
    </>
  );
};
export default Pizza;
