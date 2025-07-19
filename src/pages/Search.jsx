import { useState, useEffect } from "react";
import axios from "axios";
// import BackEndURL from "../config/db.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCart } from "../CreateSlice";
import { useDispatch } from "react-redux";
import "../css/style.css"
const Search = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const [pro, setPro] = useState("");

  const loadData = async () => {
    const response = await axios.get("http://localhost:3000/CART");
    console.log(response.data);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    let proval = e.target.value;
    setPro(proval);
  };

  const ans = mydata.map((key) => {
    let myval = pro.toLocaleLowerCase();
    let mystring = key.productName.toLocaleLowerCase();
    const status = mystring.includes(myval);
    console.log(status);

    if (status) {
      return (
        <>
          <Card className="card-hover-3d" style={{ width: "19rem" }}>
            <Card.Img variant="top" src={key.images}  className="card-design card-designs"/>
            <Card.Body>
              <Card.Title>{key.productName}</Card.Title>
              <Card.Text>{key.quantity}</Card.Text>
              <h3  className="color-red"> Price : {key.price}</h3>
              <Button
                  className="button-box pizza-btn"
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: key.id,
                      productname: key.productname,

                      category: key.category,
                      images: key.images,
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
    }
  });

  return (
    <>
    <div style={{backgroundColor:"#1F1F1F",color:"#fff"}}>

      <center>
        <h1 className="text-4xl fw-bold text-light heading"> Our Food</h1>
     
     <span style={{fontFamily:"sans-serif",fontSize:"20px",padding:"0px 5px"}}>Enter Foods Name:</span>   
        <input type="text" className="inp-design" value={pro} onChange={handleInput} />
      </center>
      <div className="homeProduct" style={{display:"flex",width:"100%",flexWrap:"wrap",justifyContent:"around",alignItems:"center",gap:"30px",height:"100%",padding:"20px"}}>{ans}</div>
    </div>
    </>
  );
};
export default Search;
