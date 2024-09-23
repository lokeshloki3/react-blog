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
      <div className='background mt-[70px] rounded-lg h-fit px-4 max-w-screen-sm' >
        <div className="flex flex-col mt-[10px]">
          <button
          className="border-2 w-20 text-black bg-yellow-50 font-bold border-black py-1 px-4 rounded-md"
          onClick={() => navigate(-1)}
          >
              Back
          </button>
          <h2 className='text-center mb-[-50px] text-4xl border-2 border-black rounded-xl mt-7 p-2
           bg-gray-700 text-yellow-100 font-bold uppercase'> 
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
