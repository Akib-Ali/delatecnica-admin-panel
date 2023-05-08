import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import SignUp from "../blog/SignUp";
import Login from "../blog/Login";
import Footer from "../footer/footer";
import AddBlog from "../blog/AddBlog";
import EditBlog from "../blog/EditBlog";
import ShowBlogs from "../blog/ShowBlogs";

const Layout = () => {
    return <>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/create-blog" element={<AddBlog />}></Route>
            <Route path="/edit-blog/:id" element={<EditBlog />}></Route>
            <Route path="/all-blogs" element={<ShowBlogs />}></Route>
        </Routes>

    </>
}

export default Layout;