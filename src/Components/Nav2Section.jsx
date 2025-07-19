import "../css/style.css";
import { useNavigate } from "react-router-dom";
const Nav2Section = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="main-div"
        style={{ backgroundColor: "#eaeaea", color: "#1F1F1F" }}
      >
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

        <p
          onClick={() => {
            navigate("/myorder");
          }}
        >
          My Orders
        </p>

        <p
          onClick={() => {
            navigate("/menu");
          }}
        >
          Menu
        </p>

        <p
          onClick={() => {
            navigate("/delivery");
          }}
        >
          Delivery
        </p>

        {/* <a href="https://red-theme-react-restaurent-web-app.vercel.app/">
  <button style={{ padding: "8px 16px", backgroundColor: "#fff", color: "#000" }}>
    Switch to Red Theme
  </button>
</a> */}

        <a href="https://red-theme-react-restaurent-web-app.vercel.app/">
          <button
            style={{
              padding: "0px 46px",
              width:"100%",
              backgroundColor: "#ffffff",
              color: "#ff0000",
              border: "2px solid #ff0000",
              cursor: "pointer",
            }}
          >
            Red Theme
          </button>
        </a>

  


      </div>
    </>
  );
};

export default Nav2Section;
