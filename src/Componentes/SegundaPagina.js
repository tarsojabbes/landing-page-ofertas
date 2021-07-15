import React from 'react'
import Produtos from './Produtos'

export default function SegundaPagina() {
    return (
        <>
            <div className="container main fit-content">
                <div className="row text-align-right">
                    <div className="col order-lg-2 text-align-right d-flex-col">
                        <h1 className="text">CONFIRA ALGUMAS <br />DAS NOSSAS ÚLTIMAS PROMOÇÕES</h1>
                        <p className=" p-main penis">ESSAS E OUTRAS SOMENTE PARA OS NOSSOS ASSINANTES DO NEWSLETTER</p>
                    </div>
                    <Produtos />
                </div>
            </div>
        </>
    )
}