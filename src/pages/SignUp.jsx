
// import React from "react";
// import "../css/style.css";
// const Login = () => {
//   return (
//     <div>
//       <div className="main-div-login">
//         <div className="img-div">
//           <img
//             src="/images/LOGIN_PAGE.jpg"
//             height={"300px"}
//             className="img-login"
//             alt="login-image"
//           ></img>

//           <div>
//             <div className="sign-up-design">
//               <h1>Sign Up</h1>
//               <div>
//                 Enter Name :<input type="text" className="inp-design" />
//               </div>
//               <div>
//                 Enter Number :<input type="text" className="inp-design" />
//               </div>
//               <div>
//                 Enter Email :<input type="text" className="inp-design" />
//               </div>
//               <div></div>
//               <button className="btn pizza-btn sign-btn" className="inp-design">
//                 SIGN IN
//               </button>
//             </div>
//           </div>

//           <div className="video-container">
//             <img src="/images/no-bg.gif" width={"450px"}></img>
//           </div>
//         </div>

//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import React from 'react';
// import './Login.css'; // Create this CSS file or use inline styles if needed

// const Login = () => {
//   return (
//     <section className="vh-100">
//       <div className="container py-5 h-100">
//         <div className="row d-flex align-items-center justify-content-center h-100">
//           <div className="col-md-8 col-lg-7 col-xl-6">
//             <img
//               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//               className="img-fluid"
//               alt="Phone illustration"
//             />
//           </div>
//           <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
//             <form>
//               {/* Email input */}
//               <div className="form-outline mb-4">
//                 <input
//                   type="email"
//                   id="form1Example13"
//                   className="form-control form-control-lg"
//                 />
//                 <label className="form-label" htmlFor="form1Example13">
//                   Email address
//                 </label>
//               </div>

//               {/* Password input */}
//               <div className="form-outline mb-4">
//                 <input
//                   type="password"
//                   id="form1Example23"
//                   className="form-control form-control-lg"
//                 />
//                 <label className="form-label" htmlFor="form1Example23">
//                   Password
//                 </label>
//               </div>

//               <div className="d-flex justify-content-around align-items-center mb-4">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="form1Example3"
//                     defaultChecked
//                   />
//                   <label className="form-check-label" htmlFor="form1Example3">
//                     Remember me
//                   </label>
//                 </div>
//                 <a href="#!">Forgot password?</a>
//               </div>

//               {/* Submit button */}
//               <button type="submit" className="btn btn-primary btn-lg btn-block">
//                 Sign in
//               </button>

//               <div className="divider d-flex align-items-center my-4">
//                 <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
//               </div>

//               <a
//                 className="btn btn-primary btn-lg btn-block mb-2"
//                 style={{ backgroundColor: '#3b5998' }}
//                 href="#!"
//                 role="button"
//               >
//                 <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
//               </a>
//               <a
//                 className="btn btn-primary btn-lg btn-block"
//                 style={{ backgroundColor: '#55acee' }}
//                 href="#!"
//                 role="button"
//               >
//                 <i className="fab fa-twitter me-2"></i>Continue with Twitter
//               </a>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;






import React from "react";
import "./Login.css"; // For cascading-right styles
import "mdb-ui-kit/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SignupSection = () => {
  return (
    <section className="text-center text-lg-start" style={{backgroundColor:"#262626"}}>
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card cascading-right bg-body-tertiary" style={{ backdropFilter: "blur(30px)" }}>
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form>
                  {/* Name Inputs */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">First name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" />
                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                  </div>

                  {/* Password */}
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>

                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2  " type="checkbox" id="form2Example33" defaultChecked />
                    <label className="form-check-label" htmlFor="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-dark btn-block mb-4">
                    Sign up
                  </button>

                  {/* Social Login */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn  btn-dark btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-dark btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-dark btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-dark btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="/images/LOGIN_IMG5.jpg"
              className="w-100 rounded-4 shadow-4"
              alt="Signup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
