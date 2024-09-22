import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className="w-full h-full flex flex-col background justify-center items-center">
      <Header/>
      <div className='bg-white mt-[70px] rounded-lg h-full px-4 max-w-[670px]' >
        <div className="mt-[10px] max-w-2xl pb-4">
          <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigate(-1)}
          >
              Back
          </button>
          <h2 className='text-center text-red-700'> 
              Blogs on <span>{category}</span>
          </h2>
        </div>
        <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
