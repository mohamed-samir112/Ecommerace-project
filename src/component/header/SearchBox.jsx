import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
    const[searchTerm,setsearchTerm] = useState('');
    const navigate =useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(searchTerm.trim()){
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`)
        }
    }
return (
    <div className='search-box-container'>
        <form  onSubmit={handleSubmit}className="search-box">
        <input type="text" name='search' id='search' placeholder='Search for products' onChange={(e)=>setsearchTerm(e.target.value)}/>
        <button type='submit'><FaSearch/></button>
        </form>
    </div>
)
}
