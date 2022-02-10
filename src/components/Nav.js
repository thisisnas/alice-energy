import React, {useRef, useEffect} from 'react'
import '../styles/nav.scss'
import {VscMenu} from 'react-icons/vsc'
import {NavLink as Link} from 'react-router-dom'

import logo from '../alice_energie.png'

const Nav = () => {
  const navRef = useRef(null)

  const handleClick = () => {
    const ref = navRef.current
    if (ref.className == 'responsive') {
      ref.className = ' '
    } else {
      ref.className = 'responsive'
    }
  }

  return (
    <>
      <nav ref={navRef} className=''>
        <li>
          <a href=''>
            <img src={logo} alt=' logo' />
          </a>
        </li>
      </nav>
    </>
  )
}

export default Nav
