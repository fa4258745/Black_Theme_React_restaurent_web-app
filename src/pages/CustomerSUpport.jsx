// import React from 'react';

// const CustomerSupport = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-8">
//       {/* Header */}
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-gray-800">Customer Support</h1>
//         <p className="text-gray-600 mt-2">How can we help you?</p>
//       </div>

//       {/* Contact Form */}
//       <form className="bg-white p-6 shadow rounded space-y-4">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="w-full border p-2 rounded focus:outline-none focus:ring"
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           className="w-full border p-2 rounded focus:outline-none focus:ring"
//         />
//         <textarea
//           placeholder="Your Message"
//           rows="4"
//           className="w-full border p-2 rounded focus:outline-none focus:ring"
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//         >
//           Submit
//         </button>
//       </form>

//       {/* FAQs */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
//         <ul className="space-y-2 text-gray-700 list-disc pl-5">
//           <li>Do you offer late-night delivery?</li>
//           <li>Can I cancel my order after placing it?</li>
//           <li>How long does delivery take?</li>
//           <li>What payment methods do you accept?</li>
//         </ul>
//       </div>

//       {/* Contact Info */}
//       <div className="bg-gray-100 p-4 rounded text-gray-800">
//         <h3 className="font-semibold text-lg mb-2">Contact Info</h3>
//         <p>📞 Phone: 123-456-7890</p>
//         <p>📧 Email: support@restaurant.com</p>
//       </div>
//     </div>
//   );
// };

// export default CustomerSupport;
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import "../css/style.css";
const CustomerSupport = () => {
  return (
    <>
    <div className="max-w-4xl text-white mx-auto p-6 space-y-10 " style={{backgroundColor:"#121212"}}>
      <div className="text-center">
        <h1 className="text-4xl fw-bold text-white  heading">
          Customer Support
        </h1>
        <p className="text-gray-600 mt-2">How can we help you today?</p>
      </div>

      <div
        style={{
          backgroundColor: "#1F1F1F",
          boxShadow: "0px 0px 5px #000,0px 0px 5px #000",
          padding: "10px 30px",
        }}
      >
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>Do you offer late-night delivery?</strong> — Yes, until 1 AM
            on weekends.
          </li>
          <li>
            <strong>Can I cancel my order?</strong> — Orders can be canceled
            within 5 minutes of placing them.
          </li>
          <li>
            <strong>How long does delivery take?</strong> — 30–45 minutes
            depending on your location.
          </li>
          <li>
            <strong>What payment methods are accepted?</strong> — UPI, cards,
            COD, and wallets.
          </li>
        </ul>
      </div>

      <div
        style={{
          backgroundColor: "#1F1F1F",
          boxShadow: "0px 0px 5px #000,0px 0px 5px #000",
          padding: "10px 30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <h3>📞 Contact Information</h3>
        <p>
          <span className="font-medium">Phone:</span> 123-456-7890
        </p>
        <p>
          <span className="font-medium">Email:</span> support@restaurant.com
        </p>
        <p>
          <span className="font-medium">Hours:</span> 10 AM – 11 PM (Mon–Sun)
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#1F1F1F",
          boxShadow: "0px 0px 5px #000,0px 0px 5px #000",
          padding: "20px",
        }}
      >
        <h2 className="text-xl font-semibold text-red-600 mb-3">
          Live Chat Support
        </h2>
        <p className="text-gray-700 mb-4">
          Need instant help? Our support agents are available from{" "}
          <strong>10:00 AM to 11:00 PM</strong> every day. Just click the chat
          button below and get connected.
        </p>
        <button className="pizza-btn btn-box">💬 Start Live Chat</button>
      </div>

      <div
        style={{
          backgroundColor: "#1F1F1F",
          boxShadow: "0px 0px 5px #000,0px 0px 5px #000",
          padding: "10px 30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <h2 className="text-lg font-semibold text-red-700 mb-2">
          Order & Delivery Assistance
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Track your current order in real-time via our{" "}
            <a href="/track" className="text-red-500 underline">
              Order Tracker
            </a>
            .
          </li>
          <li>
            Need to modify or cancel an order? Contact us within 5 minutes of
            placing it.
          </li>
          <li>
            Missed delivery or delay? We’ll make it right. Reach out for
            immediate help.
          </li>
        </ul>
      </div>
      <div
        style={{
          backgroundColor: "#1F1F1F",
          boxShadow: "0px 0px 5px #000,0px 0px 5px #000",
          padding: "20px",
        }}
      >
        <h2>We Value Your Feedback</h2>
        <p>
          Your feedback helps us serve you better. Whether it’s about food
          quality, delivery, or your overall experience, we’d love to hear from
          you.
        </p>
        <button className="pizza-btn btn-box">✍️ Leave Feedback</button>
      </div>

      <div
        style={{
          backgroundColor: "#1F1F1F",
          boxShadow: "0px 0px 5px #000,0px 0px 5px #000",
          padding: "10px 30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <h2>Business or Event Catering</h2>
        <p>
          Planning a corporate lunch, birthday party, or special event? We offer
          custom catering packages tailored to your needs.
          <br />
          Email us at: <strong>events@restaurant.com</strong> or call{" "}
          <strong>+91-9876543210</strong> for details.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#1F1F1F",
          boxShadow: "0px 0px 5px #000,0px 0px 5px #000",
          padding: "20px",
        }}
      >
     <div className="bg-dark p-4 rounded-lg shadow flex flex-col items-center space-y-2">
  <h3 className="text-lg font-semibold text-red-600">Connect With Us</h3>
  <div className="flex space-x-4 text-[#EB1414] text-2xl">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook style={{fontSize:"30px",color:"#000"}} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram  style={{fontSize:"30px",color:"#000"}} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter style={{fontSize:"30px",color:"#000"}}  />
    </a>
  </div>
  <p className="text-gray-600 text-sm text-center">
    Stay updated with our latest offers and announcements.
  </p>
</div>
        <p>Stay updated with our latest offers and announcements.</p>
      </div>
    </div>

    </>

  );
};

export default CustomerSupport;
