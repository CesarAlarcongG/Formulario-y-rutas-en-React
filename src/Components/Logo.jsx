import React from 'react';

export const Logo = ({ ubicaciónImagen, linkPagina }) => {
  return (
    <a href={linkPagina}>
      <img src={ubicaciónImagen} alt="Logo" />
    </a>
  );
};


