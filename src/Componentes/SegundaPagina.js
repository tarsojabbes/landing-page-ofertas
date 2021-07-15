import React from 'react'

export default function SegundaPagina() {
    return (
        <>
            <div className="container main fit-content">
                <div className="row text-align-right">
                    <div className="col order-lg-2 text-align-right d-flex-col">
                        <h1>CONFIRA ALGUMAS <br />DAS NOSSAS ÚLTIMAS PROMOÇÕES</h1>
                        <p className="text-color-white p-main">ESSAS E OUTRAS SOMENTE PARA OS NOSSOS ASSINANTES DO NEWSLETTER</p>
                    </div>
                    <div className="col order-lg-1 grid">
                        <div className="product-card">
                            <div className="img-center">
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1551226038669"
                                    alt="iPhone XR" />
                            </div>
                            <p className="product-name">iPhone XR 64GB</p>
                            <p className="product-prize"><s>R$4.999.00</s></p>
                            <h4>R$4.499.99</h4>
                        </div>
                        <div className="product-card">
                            <img src="https://cdn.awsli.com.br/600x450/991/991246/produto/36649270/0fda51e913.jpg" alt="iPhone XS Max" />
                            <p className="product-name">iPhone XS Max 64GB</p>
                            <p className="product-prize"><s>R$3.899.99</s></p>
                            <h4>R$3.599,99</h4>
                        </div>
                        <div className="product-card">
                            <img id="mac" src="https://images-na.ssl-images-amazon.com/images/I/31sq02%2BO6HL._AC_.jpg" alt="Macbook Pro" />
                            <p className="product-name">Macbook Pro 13" 256GB</p>
                            <p className="product-prize"><s>R$9.199.99</s></p>
                            <h4>R$8.899.99</h4>
                        </div>
                        <div className="product-card">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/51IYu924UoL._AC_SL1000_.jpg" alt="iPad Pro" />
                            <p className="product-name">iPad Pro 10.9" 256GB</p>
                            <p className="product-prize"><s>R$6.099.00</s></p>
                            <h4>R$5.899.99</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}