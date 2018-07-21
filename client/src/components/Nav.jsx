import React from 'react';
import NavLink from 'react-router-dom/NavLink'

let Nav = () => {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact to='/' activeClassName='active'>
          Search
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;