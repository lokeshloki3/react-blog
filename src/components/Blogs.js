import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
  
  // consume
  const {posts, loading} =useContext(AppContext);
  
  return (
    <div className='max-w-screen-sm background rounded-lg h-full flex flex-col py-6 gap-y-3
     mt-[66px] mb-[30px] px-4 justify-center items-center'>
    {
      loading ? 

      (<Spinner/>) : 

      (
        posts.length === 0 ? 
        (<div className='uppercase text-3xl font-bold'>
          <span className='text-red-700 mr-2'>ERROR!!</span><span>No Post Found</span>
        </div>) :
        (posts.map( (post) => (
          <BlogDetails key={post.id} post={post}/>
        ) ))
      )
    }
    </div>
  )
}

export default Blogs;
