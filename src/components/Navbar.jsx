import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const counter = useSelector(state => state.product.addedProduct)

  return (
    <nav>
        <ul>
            <li>
                <NavLink to={"/"} className="link">Market</NavLink>
            </li>
            <li>
                <NavLink to={"/basket"} className="link">Basket</NavLink>
            </li>
        </ul>
        <div className='basket--counter'>{counter.length}</div>
    </nav>
  )
}

export default Navbar