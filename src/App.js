import React from 'react'
import PrimeiraPagina from './Componentes/PrimeiraPagina'
import SegundaPagina from './Componentes/SegundaPagina'
import Footer from './Footer'

export default function App() {

  return (
    <>
      <div id="padding-horizontal">
        <PrimeiraPagina />
      </div>
      <div style={{ backgroundColor: "#2F2F2F" }} id="padding-horizontal">
        <SegundaPagina />
      </div>
      <Footer />
    </>
  )
}