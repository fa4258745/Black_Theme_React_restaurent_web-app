// import "../css/style.css";
// const MyOrder = () => {
//   return (
//     <>
//       <h6 className="text-4xl fw-bold text-dark heading">My Order</h6>
//       <div className="main-oder-div">
//         <div className="order-img" style={{ padding: "10px" }}>
//           <img src="/images/location-delivery.jpg" width={"550px"} style={{borderRadius:"50px"}}></img>
//         </div>

//         <div className="content-div">
//           <h5>
//             Fill out this form with any quarry on <br />
//             your mind and well get back to u as
//             <br /> soon as possible
//           </h5>
//           <div className=" inp-flex-container-main">
//             <div className="inp-flex-container">
//               <p>First Name</p>
//               <input type="text" />
//             </div>
//             <div className="inp-flex-container">
//               <p>Last Name</p>
//               <input type="text" />
//             </div>
//           </div>
//           <div className=" inp-flex-container-main">
//             <div className="inp-flex-container">
//               <p>Email</p>
//               <input type="email" />
//             </div>
//             <div className="inp-flex-container">
//               <p>Phone</p>
//               <input type="text" />
//             </div>
//           </div>
//           <div className=" inp-flex-container-main">
//             <div className="inp-flex-container">
//               <p>Leave us a message</p>
//               <textarea
//                 rows="4"
//                 cols="53" 
//               ></textarea>
//             </div>
//           </div>
//           <button type="submit" className="btn-box pizza-btn sub-btn">
//             Submit
//           </button>
//         <div className="myorder-container2">
//         <h4>Chat with our support team</h4>
//         <p>Click here to add your own text and edit</p>
//         <button className="btn-box pizza-btn message-btn">Message Us</button>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyOrder;










import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../css/style.css";
import "react-toastify/dist/ReactToastify.css";

const MyOrder = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const { firstName, lastName, email, phone, message } = formData;
    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("Your message has been submitted!");

    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <h6 className="text-4xl fw-bold text-white heading " style={{backgroundColor:"#121212",margin:"0",padding:"10px"}} >My Order</h6>
      <div className="main-oder-div" style={{backgroundColor:"#121212"}}>
        <div className="order-img" >
          <img
            src="/images/StockCake-Navigating city map_1747431255.jpg"
            width={"550px"}
            style={{ borderRadius: "50px" }}
            alt="Delivery Location"
          />
        </div>

        <div className="content-div">
          <h5 style={{color:"#fff"}}>
            Fill out this form with any query on <br />
            your mind and we’ll get back to you as
            <br /> soon as possible
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="inp-flex-container-main">
              <div className="inp-flex-container">
                <p style={{color:"#fff"}}>First Name</p>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="inp-flex-container">
                <p style={{color:"#fff"}}>Last Name</p>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="inp-flex-container-main">
              <div className="inp-flex-container">
                <p style={{color:"#fff"}}>Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="inp-flex-container">
                <p style={{color:"#fff"}}>Phone</p>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="inp-flex-container-main">
              <div className="inp-flex-container">
                <p style={{color:"#fff"}}>Leave us a message</p>
                <textarea
                  name="message"
                  rows="4"
                  cols="53"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn-box pizza-btn sub-btn">
              Submit
            </button>
          </form>

          <div className="myorder-container2">
            <h4 style={{color:"#fff"}}>Chat with our support team</h4>
            <p style={{color:"#fff"}}>Click here to add your own text and edit</p>
            <button
              className="btn-box pizza-btn message-btn"
              onClick={() => toast.info("Chat feature coming soon!")}
            >
              Message Us
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
};

export default MyOrder;





