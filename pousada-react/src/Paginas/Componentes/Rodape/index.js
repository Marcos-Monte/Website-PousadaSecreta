import React from 'react';

import './style.css';


const Footer = () => {
    return (
        <footer className="rodape">

            <div className="largura-tela">

                <div className="rodape-contatos">

                    <div>
                        <h3>Entre em contato conosco:</h3>
                    </div>

                    <div>

                        <a href="https://goo.gl/maps/vzYXGFpdaaKrud3Y8">


                            <img src="./assets/icones/endereco.png" alt="" />
                            Endereço Av. 123, 222 - Rio de Janeiro RJ
                        </a>
                    </div>

                    <div>
                        <a href="tel:+5521000000000">

                            <img src="./assets/icones/telefone.png" alt="" />
                            Cel: +5521999999999
                        </a>
                    </div>

                    <div>
                        <a href="www.booking.com">

                            <img src="./assets/icones/calendario.png" alt="" />
                            Faça sua reserva pelo Booking.com
                        </a>
                    </div>

                </div>

                <div className="assinatura">
                    &COPY; Copyright - PousadaDev
                </div>
            </div>

        </footer>
    )
}

export default Footer;