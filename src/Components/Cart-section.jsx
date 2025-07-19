import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/style.css";

const Cardy = () => {
  const [input, setInput] = useState([]);
  const loadData = async () => {
    let api = "http://localhost:3001/CART";
    const res = await axios.get(api);
    setInput(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = input.map((key) => {
    return (
      <>
        <h2>{key.productName}</h2>
        <p>{key.quantity}</p>
        <h4>{key.price}</h4>
        <Card.Img variant="top" src={`/$key.images`} />
      </>
    );
  });
  return (
    <>
      <div className="card-flex" >
        <div className="cover" >
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="../images/LOGO.png" />
            <Card.Body>
              <Card.Title>{ans}</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="danger=">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Cardy;
