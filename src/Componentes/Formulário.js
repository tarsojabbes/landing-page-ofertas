import React, { useState } from 'react'


export default function Formulario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const cadastrar = (n, e) => {
        localStorage.setItem('nome', n)
        localStorage.setItem('email', e)
        alert(`Obrigado, ${localStorage.getItem('nome')}! Seu email ${localStorage.getItem('email')} foi cadastrado`)
    }
    return (
        <>
            <div className="col d-flex-col">
                <div className="card">

                    <label className="label-margin label-weight">SEU NOME COMPLETO</label>
                    <input type="text" className="input-text" required value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label className="label-margin label-weight">SEU EMAIL</label>
                    <input type="email" className="input-text" required value={email} onChange={(e) => setEmail(e.target.value)} />

                    <div className="form-check form-switch label-margin">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" for="flexSwitchCheckDefault">Eu aceito os <a href="/"> Termos e Condições de Serviço</a></label>
                    </div>

                    <button className="label-margin" type="button" onClick={() => cadastrar(nome, email)}>CADASTRAR</button>

                </div>
            </div>
        </>
    )
}