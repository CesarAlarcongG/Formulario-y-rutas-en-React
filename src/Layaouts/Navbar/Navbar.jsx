import React from 'react';
import "./Navbar.css"
import { Outlet } from 'react-router-dom';
import { Lista } from '../../Components/Lista';

export const Navbar = () => {
  return (
    <div>
      <nav>
      <ul>
       <Lista ubicacion = "/principal" nombre="Principal"></Lista>
       <Lista ubicacion = "/secundario" nombre="Secundario"></Lista>
       <Lista ubicacion = "/terciario" nombre="Terciario"></Lista>
      </ul>
    </nav>
    
    <div className='visual'>
      <Outlet/>
    </div>
    
    </div>
    
  );
};
