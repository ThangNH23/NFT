import React from 'react'
import NFT1 from '../asset/NFT1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Header =()=> {
  return (
    <div className='navs'>
        <div className='logo'>
            <img src={NFT1} alt=''></img>
        </div>

        <div className='navigation'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Event</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>

        <div className="navigationIcn">
            <ul>
                <li><a href="#"><FontAwesomeIcon icon={faCoffee} /></a></li>
                <li><button>Donate</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Header