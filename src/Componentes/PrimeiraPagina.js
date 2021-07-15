import React from 'react'
import Formulario from './Formulário'

export default function PrimeiraPagina() {


    return (
        <>
            <div className="container main fit-content">
                <div className="row">
                    <div className="col d-flex-col">
                        <h1>QUER UM NEWSLETTER CHEIO DE OFERTAS?</h1>
                        <p className="p-main text-color-white">ASSINE O NOSSO NEWSLETTER PARA RECEBER EM PRIMEIRA MÃO NO SEU EMAIL AS MELHORES PROMOÇÕES DA NOSSA LOJA</p>
                    </div>
                    <Formulario />

                </div>
            </div>
        </>
    )
}