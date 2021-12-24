import React from 'react';
import img from './NotFound.jpg';
import { Link } from 'react-router-dom';

function NotFound() {
  const notFound = {
    minHeight :"87vh",
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center"
  }
  return (
    <>
      <div className="container" style={notFound}>
        <img src={img} alt="not found" />
        <h1 className='my-5'>Uh oh! The page you are looking for does not exist!</h1>
        <Link to="/" className='btn mb-5'>Go back</Link>
      </div> 
    </>
  )
}

export default NotFound
