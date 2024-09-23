import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div className="flex flex-col background justify-center items-center">
        <Header/>
        <div className='min-h-screen background mt-[10px] rounded-lg px-4 max-w-[670px]'>
            <div className="mt-[70px] max-w-2xl pb-4 mb-0">
                <button
                className="border-2 text-black bg-yellow-50 font-bold border-black py-1 px-4 rounded-md" 
                onClick={() => navigate(-1)}
                >
                    Back
                </button>
                <h2 className='text-center mb-[-70px] text-4xl border-2 border-black rounded-xl mt-7 p-1
                 bg-gray-700 text-yellow-100 font-bold uppercase'>
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs/>
        </div>
        <Pagination/> 
    </div>
  )
}

export default TagPage
