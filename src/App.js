import React from 'react'
import PrimeiraPagina from './Componentes/PrimeiraPagina'
import SegundaPagina from './Componentes/SegundaPagina'
import Footer from './Footer'

export default function App() {

  return (
    <>
      <div style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1015&q=80)",
        backgroundRepeat: "no-repeat", backgroundSize: "cover"
      }} id="padding-horizontal">
        <PrimeiraPagina />
      </div>
      <div style={{ backgroundColor: "#e0e0e0" }} id="padding-horizontal">
        <SegundaPagina />
      </div>
      <Footer />
    </>
  )
}