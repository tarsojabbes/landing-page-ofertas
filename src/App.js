import React from 'react'

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>QUER UM NEWSLETTER CHEIO DE OFERTAS?</h1>
            <p>🔥 ASSINE O NOSSO NEWSLETTER PARA RECEBER EM PRIMEIRA MÃO NO SEU EMAIL AS MELHORES PROMOÇÕES DA NOSSA LOJA</p>
          </div>
          <div className="col">
            <div className="card">
              <label>SEU NOME COMPLETO</label>
              <input type="text" required />
              <label>SEU EMAIL</label>
              <input type="email" required />
              <button>CADASTRAR</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}