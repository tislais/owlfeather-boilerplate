import React from 'react';
import NavItem from './NavItem';

const Nav = ({ navOpen }) => {
  const links = ['Home', 'Products', 'Docs', 'Company', 'Contact']
  const navItems = links.map(item => 
    <NavItem item={item} />
  )

  return (
    <nav>
      <ul className={navOpen ? ul : 'hidden' + ul} >
        {navItems}
      </ul>
    </nav>
  )
}

const ul = `
  bg-gray-800
  sm:flex

  lg:flex-col
  lg:my-4
  lg:ml-4
  lg:bg-gray-900
  lg:rounded-xl
  lg:p-4
  lg:gap-2
`

export default Nav;
