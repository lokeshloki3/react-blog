import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

  // consume
  const {posts, loading} =useContext(AppContext);
  
  return (
    <div className='w-11/12 max-w-[670px] bg-white rounded-lg h-full flex flex-col py-6 gap-y-3 mt-[66px] mb-[30px] px-4 justify-center items-center'>
    {
      loading ? 

      (<Spinner/>) : 

      (
        posts.length === 0 ? 
        (<div>
          <p>No Post Found</p>
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
