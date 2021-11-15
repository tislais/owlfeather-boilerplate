import React from 'react';
import NavItem from './NavItem';

const Nav = () => {
  const links = ['Home', 'Products', 'Docs', 'Company', 'Contact']
  const navItems = links.map(item => 
    <NavItem item={item} />
  )

  return (
    <nav>
      <ul>
        {navItems}
      </ul>
    </nav>
  )
}

export default Nav;
