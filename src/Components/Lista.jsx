import React from 'react'
import { Link } from 'react-router-dom'

export const Lista = ({ ubicacion, nombre }) => {
  return (
    <li>
      <Link to={ubicacion}>{nombre}</Link>
    </li>
  )
}

