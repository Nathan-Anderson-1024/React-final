import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
  return (
    <div className='not-found'>
        <h1 className='not-found-header'>404 PAGE NOT FOUND</h1>
        <h2>Looks like we're a little lost...Let's get back on track!</h2>
        <button className='go-back-button' onClick={handleClick}>Take Me Back!</button>
    </div>
  )
}
