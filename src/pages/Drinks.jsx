import { useState, useEffect } from "react";
import axios from "axios";
import BackEndURL from "../config/db.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCart } from "../CreateSlice";
import { useDispatch } from "react-redux";
import "../css/style.css";
const Drinks = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData = async () => {
    const response = await axios.get(
      "http://localhost:3000/CART/?category=drinks"
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
        <Card className="card-hover-3d" style={{ width: "15rem"}}>
          <Card.Img variant="top" src={key.images} className="card-design card-designs"/>
          <Card.Body>
            <Card.Title>{key.productName}</Card.Title>
            <Card.Text>{key.description}</Card.Text>
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

      </>
    );
  });

  return (
    <>
      <h1 className="text-4xl fw-bold text-dark heading"> Beverages</h1>
      <div className="pizza" style={{flexWrap:"wrap",display:"flex",alignItems:"center",justifyContent:"center" }}>
      
      {ans}</div>
    </>
  );
};
export default Drinks;
