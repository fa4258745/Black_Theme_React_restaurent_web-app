// import React, { useState } from "react";

// export default function BookTable() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     date: "",
//     time: "",
//     guests: 1,
//     specialRequest: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking submitted:", form);
//     alert("Table booked successfully!");
//     // You can add API call here later
//   };

//   return (
//     <div className="">
//       <h1 className="">Book a Table</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             className=""
//           />
//         </div>

//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className=""
//           />
//         </div>

//         <div>
//           <label>Date</label>
//           <input
//             type="date"
//             name="date"
//             value={form.date}
//             onChange={handleChange}
//             required
//             className=""
//           />
//         </div>

//         <div>
//           <label>Time</label>
//           <input
//             type="time"
//             name="time"
//             value={form.time}
//             onChange={handleChange}
//             required
//             className=""
//           />
//         </div>

//         <div>
//           <label>Number of Guests</label>
//           <input
//             type="number"
//             name="guests"
//             value={form.guests}
//             onChange={handleChange}
//             min="1"
//             max="20"
//             className=""
//           />
//         </div>

//         <div>
//           <label>Special Requests</label>
//           <textarea
//             name="specialRequest"
//             value={form.specialRequest}
//             onChange={handleChange}
//             rows="3"
//             className=""
//           ></textarea>
//         </div>

//         <button type="submit" className="">
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function BookTable() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    specialRequest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const notify = () => toast("Table booked successfully!");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", form);
  };

  return (
    <>
      <h1 className="heading text-4xl fw-bold text-white  " style={{backgroundColor:"#333333",letterSpacing:"15px",padding:"10px",margin:"0"}}>Book a Table</h1>


      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "100px",
          backgroundColor:"#121212",
          padding:"20px",
          color:"#1F1F1F"
        }}
      >
        <div className="booking-container  bordes">
          <img src="/images/Booking-table.png" width={"270px"}></img>
        </div>

        <div
          style={{
            backgroundColor: "#eaeaea",
            padding: "30px",
            height: "480px",
            borderRadius: "20px",
            fontFamily: "sans-serif",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div style={{ padding: "10px" }}>
              <label className="">Name :</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="inp-design  bordes"
              />
            </div>

            <div style={{ padding: "10px" }}>
              <label className="">Email :</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="inp-design  bordes"
              />
            </div>

            <div style={{ padding: "10px" }}>
              <label className="">Date :</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="inp-design  bordes"
              />
            </div>

            <div style={{ padding: "10px" }}>
              <label className="">Time :</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="inp-design  bordes"
              />
            </div>

            <div style={{ padding: "10px" }}>
              <label className="">Number of Guests :</label>
              <input
                type="number"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                min="1"
                max="20"
                className="inp-design  bordes "
              />
            </div>

            <div style={{ padding: "10px" }}>
              <label className="">Special Requests :</label>
              <textarea
                name="specialRequest"
                value={form.specialRequest}
                onChange={handleChange}
                rows="3"
                className="inp-design bordes"
              ></textarea>
            </div>

            <button
              onClick={() => {
                notify();
              }}
              type="submit"
              className="inp-design"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
