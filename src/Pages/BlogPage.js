import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import Spinner from '../components/Spinner';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const {loading,setLoading} =useContext(AppContext);
    const location= useLocation();
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const navigate= useNavigate();

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const response = await fetch(url);
            const data =await response.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error in blog id call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname] )
    
  return (
    <div className="w-full h-full flex flex-col background justify-center items-center">
        <Header/>
        <div className='bg-white mt-[70px] rounded-lg h-full px-4 max-w-[670px]' >
            {
            loading ?

            (<Spinner/>) :

            blog ?

            (<div className='w-11/12 flex flex-col justify-center items-center'>
                <div className="mt-[10px] max-w-2xl pb-4">
                    <button
                    className="border-2 border-gray-300 py-1 px-4 rounded-md"
                    onClick={() => navigate(-1)}
                    >
                    Back
                    </button>
                </div>
                <BlogDetails post={blog} />
                <h2 className="max-w-2xl mx-auto mt-6 font-bold text-3xl mb-6"> Related Blogs </h2>
                {
                relatedblogs.map( (post) => (
                    <div key = {post.id}>
                        <BlogDetails post={post} />
                    </div>
                ) )
                }
            </div>) :

            (<div>
                <p>No Blog Found</p>
            </div>)  
            }
        </div>
    </div>
  )
}

export default BlogPage