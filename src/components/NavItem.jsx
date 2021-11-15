import { list } from 'purgecss/node_modules/postcss';
import React from 'react';

const NavItem = ({ item }) => {
  return (
    <li className={li}>{item}</li>
  )
}

const li = `
  p-4
  text-gray-300
  text-sm
  tracking-wider
  hover:text-green-300
  hover:bg-gray-900

  sm:w-full
  sm:text-center

  lg:w-60
  lg:hover:bg-white
  lg:hover:bg-opacity-5
  lg:rounded-full
  lg:text-lg
  lg:text-left
  lg:py-2
  lg:px-6
`

export default NavItem;
