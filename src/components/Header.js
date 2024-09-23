import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  
  const navigate = useNavigate();

  function clickHandler(event){
    event.preventDefault();
    navigate('/');
  }

  return (
      <header className='py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed 
      top-0 inset-x-0 bg-gray-700'>
        <h1 
          onClick={clickHandler} 
          className='text-3xl text-yellow-100 font-bold uppercase cursor-pointer text-center'>
          Blogs List</h1>
      </header>
  )
}

export default Header