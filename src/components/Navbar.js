import React from 'react'
import '../solo2.css';
import Globe from '../images/path1.svg';

export default function Navbar() {
    return (
        <nav>
            <div alt='' className='nav'>
               <img src={Globe} alt='' className='path1'/> 
               <p className='mtj'>my travel journal</p>   
            </div> 
        </nav>
    )
}