import React from 'react'
import { Link } from 'react-router-dom'
export const Direccion = (ubication, nombre) => {
  return (
    <div>
      <li>
        <Link to = {ubication}> {nombre}</Link>
      </li>
    </div>
  )
}

