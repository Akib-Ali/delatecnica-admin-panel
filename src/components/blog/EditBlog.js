import { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import SignUp from "../blog/SignUp";
import Login from "../blog/Login";
import Footer from "../footer/footer";
import AddBlog from "../blog/AddBlog";
import ShowBlogs from "../blog/ShowBlogs";
const EditBlog = () => {
    const [blog_title, setBlog_Title] = useState('');
    const [blog_slug, setBlog_Slug] = useState('');
    const [blog_summary, setBlog_Summary] = useState('');
    const [blog_keyword, setBlog_Keyword] = useState('')
    const [image, setImage] = useState('')
    const [blog_content, setBlog_Content] = useState('')

    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        getBlogDetails()
    }, [])

    const getBlogDetails = async () => {
        let result = await fetch(`/blog/${params.id}`)
        result = await result.json()
        setBlog_Title(result.blog_title)
        setBlog_Slug(result.blog_slug)
        setBlog_Summary(result.blog_summary)
        setBlog_Keyword(result.blog_keyword)
        setImage(result.image)
        setBlog_Content(result.blog_content)



    }




    const handleUpdate = async (e) => {
        e.preventDefault()
        var formData = new FormData()
        formData.append('blog_title', blog_title)
        formData.append('blog_slug', blog_slug)
        formData.append('blog_summary', blog_summary)
        formData.append('blog_keyword', blog_keyword)
        formData.append('photo', image)
        formData.append('blog_content', blog_content)
        const config = {
            headers: {
                // 'Content-Type': 'multiple/form-data',

                'Content-Type': 'multipart/form-data',

            },
        }
        const res = await axios.post(`/blogupdate/${params.id}`, formData, config)
        // navigate("/all-blogs")

    }


    return <>
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">

                <Sidebar />



                <div className="layout-page">

                    <Navbar />



                    <div className="content-wrapper">


                        <div className="container-xxl flex-grow-1 container-p-y">
                            {/* Here edit blog contain start */}


                            <div className="col-xl">
                                <div className="card mb-4">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">Update Blog </h5>
                                        <small className="text-muted float-end">Dellatecnica</small>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="basic-default-fullname">Edit Title</label>
                                                        <input type="text" className="form-control" id="basic-default-fullname" placeholder="The Title for the Blog Update"
                                                            // name="blog_title"
                                                            value={blog_title}
                                                            onChange={(e) => setBlog_Title(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="basic-default-company">Edit Slug</label>
                                                        <input type="text" className="form-control" id="basic-default-company" placeholder="The Permalink/Slug for the Blog Update"
                                                            // name="blog_slug"
                                                            value={blog_slug}
                                                            onChange={(e) => setBlog_Slug(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="basic-default-email">Edit Summary</label>
                                                <div className="input-group input-group-merge">
                                                    <textarea id="basic-default-message" className="form-control" placeholder="Short Summary, Used as the Meta Description Update"
                                                        // name="blog_summary"
                                                        value={blog_summary}
                                                        onChange={(e) => setBlog_Summary(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="basic-default-phone">EDIT Keywords</label>
                                                <input type="text" id="basic-default-phone" className="form-control phone-mask" placeholder="Used as Meta Keywords Update"
                                                    // name="blog_keyword"
                                                    value={blog_keyword}
                                                    onChange={(e) => setBlog_Keyword(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="basic-default-email">EDIT Thumbnail</label>
                                                <div className="input-group input-group-merge">
                                                    <input type="file" id="basic-default-email" className="form-control" placeholder="Short Summary,Used as the Meta Description" aria-label="john.doe" aria-describedby="basic-default-email2"
                                                        name="photo"
                                                        onChange={(e) => setImage(e.target.files[0])}
                                                    />
                                                </div>
                                                {/* <div className="form-text">You can use letters, numbers &amp; periods</div> */}
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="basic-default-message">EDIT Content</label>
                                                <textarea id="basic-default-message" className="form-control"
                                                    // name="blog_content"
                                                    value={blog_content}
                                                    onChange={(e) => setBlog_Content(e.target.value)}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update Blog</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Here edit blog end contain */}
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

export default EditBlog;