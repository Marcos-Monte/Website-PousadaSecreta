import React from 'react';

import './style.css';

import Footer from '../Componentes/Rodape';
import Header from '../Componentes/Topo';

export default function PaginaInicial() {
    return (
        <div className="inicial">
            <Header />
            <main>

                <section class="banner">

                    <div class="largura-tela banner__container">
                        <h1>Pousada Secreta</h1>
                        <p>A pousada reservada em Angra dos Reis</p>
                    </div>

                </section>

                <section class="largura-tela">

                    <div class="conteudo">

                        <h2>seja bem-vindo(a)!</h2>
                        <p>Relaze em nossas acomodações e curta o melhor de Andra dos Reis</p>
                        <p>Temos quartos para solteiro, casal ou família.</p>

                    </div>

                    <div id="quartos">

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-solteiro1.jpg" alt="Quarto de solteiro" />
                            <a href="quartos.html#solteiro">quarto de solteiro</a>
                        </figure>

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-casal1.jpg" alt="Quarto de casal" />
                            <a href="quartos.html#casal">quarto de casal</a>
                        </figure>

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-familia1.jpg" alt="Quarto família" />
                            <a href="quartos.html#familia">quarto família</a>
                        </figure>

                    </div>

                </section>

                <section class="largura-tela" id="rota">

                    <div class="conteudo">
                        <h2>rota</h2>
                        <p>Veja como chegar até a pousada</p>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1168145507445!2d-43.36346255946189!3d-22.982731540677694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-003!5e0!3m2!1spt-BR!2sbr!4v1692621716538!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </section>

                <section class="largura-tela" id="sobre">

                    <div class="conteudo">
                        <h2>sobre a pousada!</h2>
                        <p>Conheça um pouco sobre a nossa pousada.</p>
                    </div>

                    <div class="sobre__diferenciais">

                        <div class="diferencial">

                            <div class="diferencial-descricao">
                                <h3>A pousaca</h3>
                                <p>A pousada Dev dispõe de estacionamento privativo gratuito, piscina ao ar livre e bar</p>
                            </div>

                            <img src="./assets/img1.jpg" alt="" />

                        </div>

                        <div class="diferencial">

                            <div class="diferencial-descricao">
                                <h3>Nossos quartos</h3>
                                <p>Os quartos possuem TV de tela plana a cabo, cozinha compacta e área para refeições. Além disso, as unidades da Pousada Dev contam com ar-condicionado e quarda-roupa.</p>
                            </div>

                            <img src="./assets/img2.jpg" alt="" />

                        </div>

                        <div class="diferencial">

                            <div class="diferencial-descricao">

                                <h3>Alimentação</h3>
                                <p>A pousada serve café da manhã em estilo continental ou buffet. Nossos restaurantes funcionam 24hrs.</p>
                            </div>

                            <img src="./assets/img3.jpg" alt="" />

                        </div>

                        <div class="diferencial">

                            <div class="diferencial-descricao">
                                <h3>Recepção</h3>
                                <p>Nossa recepção fica aberta 24hrs.</p>
                            </div>

                            <img src="./assets/img5.jpg" alt="" />

                        </div>

                    </div>

                </section>

            </main>
            <Footer />
        </div>

    )
}