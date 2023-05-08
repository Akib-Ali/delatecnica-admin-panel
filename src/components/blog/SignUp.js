// import "./Signup.css"
// import { Link } from "react-router-dom"
// import { Route,Routes } from "react-router-dom"
// import Navbar from "../navbar/navbar"
// import Sidebar from "../sidebar/sidebar"
// import Footer from "../footer/footer"
// import Login from "./Login"
// import AddUser from "./AddBlog"
// import EditUser from "./EditBlog"
// import 

// const SignUp = () => {
//   return (
//     <>
//        <div className="layout-wrapper layout-content-navbar">
//             <div className="layout-container">

//                 <Sidebar />



//                 <div className="layout-page">

//                     {/* <Navbar /> */}



//                     <div className="content-wrapper">


//                         <div className="container-xxl flex-grow-1 container-p-y">
//                             <Routes>
//                                 <Route path="/" element={<SignUp/>}></Route>
//                                 <Route path="/login" element={<Login/>}></Route>
//                                 <Route path="/create-blog" element={<AddUser />}></Route>
//                                 <Route path="/edit-blog/:id" element={<EditUser />}></Route>
//                                 <Route path="/all-blogs" element={<ShowUsers />}></Route>
//                             </Routes>
//                         </div>

//                          <Footer/>


//                         <div className="content-backdrop fade"></div>
//                     </div>
//                     {/* <!-- Content wrapper --> */}
//                 </div>
//                 {/* <!-- / Layout page --> */}
//             </div>

//             {/* <!-- Overlay --> */}
//             <div className="layout-overlay layout-menu-toggle"></div>
//         </div>
//     </>
//   )
// }

// export default SignUp

import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Login from "../blog/Login";
import Footer from "../footer/footer";

import { Link } from "react-router-dom";

const SignUp = () => {
    return <>
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">

                <Sidebar />



                <div className="layout-page">

                    {/* <Navbar />   */}



                    <div className="content-wrapper">


                        <div className="container-xxl flex-grow-1 container-p-y">
                            <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>

                                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                                    <div className="container h-100">
                                        <div className="row d-flex justify-content-center align-items-center h-100">
                                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                                <div className="card" style={{ borderRadius: "15px" }}>
                                                    <div className="card-body p-5">
                                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                                        <form>

                                                            <div className="form-outline mb-4">
                                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                                                <label className="form-label" for="form3Example1cg">Your Name</label>
                                                            </div>

                                                            <div className="form-outline mb-4">
                                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                                                                <label className="form-label" for="form3Example3cg">Your Email</label>
                                                            </div>

                                                            <div className="form-outline mb-4">
                                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                                                <label className="form-label" for="form3Example4cg">Password</label>
                                                            </div>

                                                            <div className="form-check d-flex justify-content-center mb-5">
                                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                                <label className="form-check-label" for="form2Example3g">
                                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                                </label>
                                                            </div>

                                                            <div className="d-flex justify-content-center">
                                                                <button type="button"
                                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                                            </div>

                                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"
                                                                className="fw-bold text-body"><u>Login here</u></Link></p>

                                                        </form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* <Footer /> */}


                        <div className="content-backdrop fade"></div>
                    </div>
                    {/* <!-- Content wrapper --> */}
                </div>
                {/* <!-- / Layout page --> */}
            </div>

            {/* <!-- Overlay --> */}
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    </>


}

export default SignUp