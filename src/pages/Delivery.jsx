import React from "react";
import { RiLetterSpacing2 } from "react-icons/ri";

export default function DeliveryPage() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      color: "#fff",
      lineHeight: 1.6,
      backgroundColor:"#121212"
       

    },
    header: {
      color: "#eaeaea",
      padding: "20px",
      textAlign: "center",
      fontWeight:"bold",
      letterSpacing: "2px",
    },
    hero: {
      backgroundColor: "#333333",

      padding: "60px 20px",
      textAlign: "center",
    },
    heroHeading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "16px",
    },
    heroText: {
      fontSize: "1.1rem",
      marginBottom: "24px",
    },
    searchBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
      maxWidth: "400px",
      margin: "0 auto",
    },
    input: {
      padding: "10px",
      border:"1px solid #000 ",
      borderRadius: "4px",
      width: "100%",
    },
    button: {
      padding: "10px 30px",
      backgroundColor: "#fff",
      color: "#000",
      border: "2px solid #000",
      borderRadius: "4px",
      cursor: "pointer",
    },
    section: {
      padding: "60px 20px",
      textAlign: "center",
    },
    sectionHeading: {
      fontSize: "1.8rem",
      marginBottom: "32px",
    },
    cardsContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    card: {
           backgroundColor: "#333333",

      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      width: "250px",
      color:"#eaeaea"
    },
    cta: {
      // backgroundColor: "#2563eb",
            backgroundColor: "#333333",

      color: "#fff",
      padding: "60px 20px",
      textAlign: "center",
    },
    footer: {
      // backgroundColor: "#1f2937",
      color: "#fff",
      textAlign: "center",
      padding: "16px",

    },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 className="heading">Restaurant Delivery</h1>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h2 style={styles.heroHeading}>Delicious Food, Delivered Fast</h2>
        <p style={styles.heroText}>Enter your location to find nearby restaurants.</p>
        <div style={styles.searchBox}>
          <input type="text" placeholder="Enter your location" style={styles.input} />
          <button style={styles.button}>Find Restaurants</button>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.section}>
        <h3 style={styles.sectionHeading}>What We Offer</h3>
        <div style={styles.cardsContainer}>
          {[
            {
              title: "Food Delivery",
              desc: "Quick and fresh food delivery to your home.",
            },
            {
              title: "Live Tracking",
              desc: "Track your order in real-time.",
            },
            {
              title: "Fast Dispatch",
              desc: "Orders dispatched in minutes.",
            },
            {
              title: "On-Time Guarantee",
              desc: "We value your time and hunger.",
            },
          ].map((service, index) => (
            <div key={index} style={styles.card}>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurants Section */}
      <section style={styles.section}>
        <h3 style={styles.sectionHeading}>Popular Restaurants</h3>
        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <h4>Pizza Hub</h4>
            <p>Italian, Fast Food</p>
          </div>
          <div style={styles.card}>
            <h4>Biryani Express</h4>
            <p>Indian, Hyderabadi</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h3 style={{ fontSize: "2rem", marginBottom: "12px" }}>Hungry?</h3>
        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
          Start ordering now from top-rated restaurants near you!
        </p>
        <button style={{ ...styles.button, backgroundColor: "#fff", color: "#EB1414" }}>
          Start Ordering
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} FoodDelivery Inc.</p>
      </footer>
    </div>
  );
}
