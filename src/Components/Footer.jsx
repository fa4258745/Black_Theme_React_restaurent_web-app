import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/style.css"
import footerimg1 from "../Footer-images/American Express.avif"
import footerimg2 from "../Footer-images/brand-chinaunionpay@3x.avif"
import footerimg3 from "../Footer-images/brand-mastercard@3x.avif"
import footerimg4 from "../Footer-images/Diners.avif"
import footerimg5 from "../Footer-images/JCB.avif"
import footerimg6 from "../Footer-images/PayPal.avif"
import footerimg7 from "../Footer-images/Visa.avif"
import './SocialIcons.css'; // Import the CSS file


export default function App() {
  return (
    <>
    <div className="Footer-bg"  >

        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
        

          <section className="" style={{backgroundColor:"#121212"}}>
            <MDBContainer
              className="text-center text-md-start "
              style={{
                background: "#333333",
                color: "white",
                borderRadius: "20px",
                paddingTop: "10px",
              }}
            >
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <MDBIcon
                      color="secondary"
                      icon="gem"
                      className="me-3 text-white"
                    />
                    Restaurent
                  </h6>

                  <p>
                    Our chefs use only the freshest, locally sourced ingredients
                    to craft dishes that delight the senses—from classic
                    favorites to seasonal specialties.
                  </p>
                   <div>




    {/* <div className="container-icons">
      <ul>
        <li><i className="fab fa-facebook-f"></i></li>
        <li><i className="fab fa-twitter"></i></li>
        <li><i className="fab fa-instagram"></i></li>
        <li><i className="fab fa-linkedin-in"></i></li>
        <li><i className="fab fa-youtube"></i></li>
      </ul>
    </div>
 */}
<div className="container-icons">
  <ul className="social-list">
    <li className="social-item facebook">
      <i className="fab fa-facebook-f icon-facebook"></i>
    </li>
    <li className="social-item twitter">
      <i className="fab fa-twitter icon-twitter"></i>
    </li>
    <li className="social-item instagram">
      <i className="fab fa-instagram icon-instagram"></i>
    </li>
    <li className="social-item linkedin">
      <i className="fab fa-linkedin-in icon-linkedin"></i>
    </li>
    <li className="social-item youtube">
      <i className="fab fa-youtube icon-youtube"></i>
    </li>
  </ul>
</div>






             
            </div>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Top Dishes</h6>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Pizza
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Sandwich
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Burger
                    </a>
                  </p>
                  <p>
                    <a
                      href="#!"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Lasania
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>



                  
                  <p>
                    <MDBIcon
                      color="secondary"
                      icon="home"
                      className="me-2  text-white "
                    />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon
                      color="secondary"
                      icon="envelope"
                      className="me-3 text-white"
                    />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon
                      color="secondary"
                      icon="phone"
                      className="me-3 text-white"
                    />{" "}
                    + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon
                      color="secondary"
                      icon="print"
                      className="me-3 text-white"
                    />{" "}
                    + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
           style={{backgroundColor:"#121212 ",color:"white"}}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
 <h5>All Types of Payments can be paid through</h5>
<div className="footer-flex">
  <img src={footerimg1}/>
  <img src={footerimg2}/>
  <img src={footerimg3}/>
  <img src={footerimg4}/>
  <img src={footerimg5}/>
  <img src={footerimg6}/>
  <img src={footerimg7}/>
</div>

          </div>
        </MDBFooter>
    </div>
      
    </>
  );
}
