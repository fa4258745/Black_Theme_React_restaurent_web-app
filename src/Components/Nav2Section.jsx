import "../css/style.css";
import { useNavigate } from "react-router-dom";
const Nav2Section = () => {
  const navigate = useNavigate();
  return (
    <>
      
      <div className="main-div" style={{backgroundColor:"#eaeaea",color:"#1F1F1F"}}>
        <p
          onClick={() => {
            navigate("/deals");
          }}
        >
          Deals 
        </p>

        <p
          onClick={() => {
            navigate("/aboutus");
          }}
        >
          About Us
        </p>

        <p
          onClick={() => {
            navigate("/customerSupport");
          }}
        >
          Customer Support
        </p>

        <p onClick={()=> {
          navigate("/myorder")
        }}>My Orders</p>

        <p onClick={()=> {
          navigate("/menu")
        }}>Menu</p>

        <p onClick={()=> {
          navigate("/delivery")
        }}>Delivery</p>
      </div>

    </>
  );
};

export default Nav2Section;
