import React from 'react'
import SegundaPagina from './SegundaPagina'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <div className="container main">
        <div className="row">
          <div className="col d-flex-col">
            <h1>QUER UM NEWSLETTER CHEIO DE OFERTAS?</h1>
            <p className="p-main">🔥 ASSINE O NOSSO NEWSLETTER PARA RECEBER EM PRIMEIRA MÃO NO SEU EMAIL AS MELHORES PROMOÇÕES DA NOSSA LOJA</p>
          </div>
          <div className="col d-flex-col">
            <div className="card">
              <label className="text-color-white">SEU NOME COMPLETO</label>
              <input type="text" className="input-text" required />
              <label className="text-color-white">SEU EMAIL</label>
              <input type="email" className="input-text" required />
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label text-color-white" for="flexSwitchCheckDefault">Eu aceito os <a href="/"> Termos e Condições de Serviço</a></label>
              </div>
              <button>CADASTRAR</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#2F2F2F" }} id="segpag">
        <SegundaPagina />
      </div>
      <Footer />
    </>
  )
}