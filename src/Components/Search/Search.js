import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './Search.css'
export default function Search() {
    const searchInputRef = useRef();

    let navigate = useNavigate();
    
    const onSearchHandler = (event) => {
        event.preventDefault();
        const searchQuery = new URLSearchParams({
            name: searchInputRef.current.value
        }).toString();
        navigate('/search?' + searchQuery)
        searchInputRef.current.value = '';
        
    }


  return (
    <form onSubmit={onSearchHandler} className='search-form'>
        <input type='text' className='search' ref={searchInputRef} placeholder='Looking for something?'></input>
        <button type='submit' className='search-button'>🔎</button>
    </form>
  )
}
