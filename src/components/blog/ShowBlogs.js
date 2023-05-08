import React, { useState, useEffect } from "react"
import axios from "axios"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import SignUp from "../blog/SignUp";
import Login from "../blog/Login";
import Footer from "../footer/footer";
import AddBlog from "../blog/AddBlog";
import EditBlog from "../blog/EditBlog";





const ShowBlogs = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchapi()
    }, [])

    const fetchapi = async () => {
        const api = await axios.get("http://localhost:5000/api/v1/students")
        console.log(api, "data receive in console")
        // setData(api.data)

    }

    // console.log(data, "data fetch from new api")




    return <>
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">

                <Sidebar />



                <div className="layout-page">

                    <Navbar />



                    <div className="content-wrapper">


                        <div className="container-xxl flex-grow-1 container-p-y">
                            {/* Here contain start */}

                            <div className="card">
                                <h5 className="card-header">All Blogs</h5>
                                <div className="table-responsive text-nowrap table-bordered">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Slug</th>
                                                <th>Keywords</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        {data.map((elem, index) => {
                                            return (
                                                <tbody className="table-border-bottom-0" key={index}>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td><img src={`/uploads/${elem.image}`} height="100px" width="150px" /></td>
                                                        <td>{elem.blog_title}</td>
                                                        <td>{elem.blog_slug}</td>
                                                        <td>{elem.blog_keyword}</td>
                                                        <td><span className="badge bg-label-primary me-1">Active</span></td>
                                                        <td>
                                                            <Link to={`/edit-blog/${elem._id}`}>
                                                                <button className="btn btn-sm btn-primary">Edit</button>
                                                            </Link>

                                                            <DeleteModal id={elem._id} fetchapi={fetchapi} />

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </table>

                                </div>
                            </div>
                            {/* Here contain end */}
                        </div>

                        <Footer />


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

export default ShowBlogs;



const DeleteModal = (props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const handleDelete = async () => {
        await axios.delete(`/delete-blog/${props.id}`)
        props.fetchapi()
        onCloseModal()


    }



    return (
        <>
            <button className="btn btn-sm btn-danger" onClick={onOpenModal}>Delete</button>
            <Modal open={open} center onClose={onCloseModal}>
                <br></br>
                <h2>Are you sure you want to delete?'</h2>
                <button className="btn btn-sm btn-danger" onClick={handleDelete}>Yes</button>
                <button className="btn btn-sm btn-primary" onClick={onCloseModal}>No</button>
            </Modal>
        </>
    )
}
