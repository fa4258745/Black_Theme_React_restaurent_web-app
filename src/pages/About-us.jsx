import React from "react";
import "../css/style.css"
const Aboutus = () => {
  return (
    <>
      <div className="about-bg" style={{ height: "100%" }} >
      <div className="about-bg2" style={{backgroundColor:"#121212",color:"white"}} >

        <h1 className="text-4xl fw-bold text-white heading">About Us</h1>
        <div>
          <div className="text-center">
            <p className="mt-4 text-gray-600">
              Welcome to Flavor Haven – where taste meets tradition!
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="/images/pizza-6.png"
              alt="Our Restaurant"
              style={{ width: "200px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "400px",
              }}
            >
              <h2 className="text-4xl fw-bold text-white heading">Our Story</h2>
              <p className="text-gray-700">
                Founded in 2010, Flavor Haven started as a small family-run
                eatery. Our mission is to bring heartwarming dishes and
                exceptional service to every guest. We use fresh, locally
                sourced ingredients and authentic recipes passed down through
                generations.
              </p>
              <p className="text-gray-700">
                Whether you're dining in or ordering out, we promise a flavorful
                experience that feels just like home.
              </p>
              <img
                src="/images/pizza-9.png"
                alt="Our Restaurant"
                style={{ width: "200px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2 className="text-4xl fw-bold text-white heading">Our Mission</h2>
            <p>
              To serve delicious, affordable food that brings people together –
              one plate at a time.
            </p>
              <img
                src="/images/Margerita-Pizza.png"
                alt="Our Restaurant"
                style={{ width: "200px" }}
              />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2 className="text-4xl fw-bold text-white heading">Meet Our Team</h2>
            <div>
              <div style={{ display: "flex", gap: "20px" ,flexWrap:"wrap",justifyContent:"center"}}>
                <div
                  className="text-center"
                  style={{
                    border :"1px solid #eaeaea",
                    padding: "30px",
                    borderRadius: "30px",
                                        margin:"15px"

                  }}
                >
                  <img
                    src="/images/CHEF_1.jpg"
                    alt="Manager"
                    width={"250px"}
                    style={{ borderRadius: "50%" }}
                  />
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "30px",
                    }}
                  >
                    Rahul Mehra
                  </p>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    Manager
                  </p>
                </div>
                <div
                  className="text-center"
                  style={{
                                        border :"1px solid #eaeaea",
                    padding: "30px",
                    borderRadius: "30px",
                    margin:"15px"

                  }}
                >
                  <img
                    src="/images/CHEF2.jpg"
                    alt="Manager"
                    width={"250px"}
                    style={{ borderRadius: "50%" }}
                  />

                  <p
                    style={{
                      
                      fontFamily: "sans-serif",
                      fontSize: "30px",
                    }}
                  >
                    Saksham Sharma
                  </p>
                  <p
                    style={{
                    
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    Chef
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default Aboutus;
