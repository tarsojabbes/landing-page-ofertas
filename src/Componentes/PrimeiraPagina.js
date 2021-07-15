import React, { useState } from 'react'

export default function PrimeiraPagina() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const cadastrar = (n, e) => {
        localStorage.setItem('nome', n)
        localStorage.setItem('email', e)
        alert(`Obrigado, ${localStorage.getItem('nome')}! Seu email ${localStorage.getItem('email')} foi cadastrado`)
    }
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
                            <input type="text" className="input-text" required value={nome} onChange={(e) => setNome(e.target.value)} />

                            <label className="text-color-white">SEU EMAIL</label>
                            <input type="email" className="input-text" required value={email} onChange={(e) => setEmail(e.target.value)} />

                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label text-color-white" for="flexSwitchCheckDefault">Eu aceito os <a href="/"> Termos e Condições de Serviço</a></label>
                            </div>

                            <button type="button" onClick={() => cadastrar(nome, email)}>CADASTRAR</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}