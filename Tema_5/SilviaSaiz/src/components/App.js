import React from 'react'
import { Card } from './Card'
import { Navbar } from './Navbar'
import "../styles/App.css"

export const App = () => {
  const Datos = {
    imagen: require("../images/kotor.jpg"),
    titulo: 'Kotor',
    contenido: 'Kotor es una villa fortificada en la costa adriática de Montenegro situada en una bahía cercana a los acantilados de piedra caliza del monte Lovćen. El casco antiguo medieval se caracteriza por sus sinuosas calles y plazas, y alberga varias iglesias románicas, como la catedral de Kotor.'
  }
  return (
    <div>
      <Navbar />
      <Card Datos={Datos} />
    </div>
  )
}
