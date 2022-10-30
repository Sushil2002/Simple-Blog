// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filtter(blog=>blog.id!==id);
    //     setBlogs(newBlogs);
    // }
    

    return (
        <div className="home">
            <h2>All Blogs!</h2>
            {error && <div>{error}</div>}
            {
                isPending && <div>Loding...</div>
            }
            {
                blogs && <BlogList blogs={blogs} title="All BLogs" />
            }
        </div>
    );
}

export default Home;