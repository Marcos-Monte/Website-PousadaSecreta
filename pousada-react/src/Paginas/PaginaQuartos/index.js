import React from 'react';

import './style.css';

import Footer from '../Componentes/Rodape';
import Header from '../Componentes/Topo';

export default function PaginaQuartos() {
    return (
        <div className="quartos">
            <Header />
            <main>
                <section class="banner banner-quarto">

                </section>

                <section class="largura-tela">

                    <div class="conteudo" id="solteiro">
                        <h2>quarto de solteiro</h2>
                        <p>Conheça os nossos quartos de solteiro.</p>

                    </div>

                    <div id="quartos">

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-solteiro1.jpg" alt="Quarto de solteiro" />
                        </figure>

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-solteiro2.jpg" alt="Quarto de solteiro" />
                        </figure>

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-solteiro3.jpg" alt="Quarto solteiro" />
                        </figure>

                    </div>

                    <div class="informacoes">

                        <h3>Informações sobre o quarto</h3>

                        <ul class="quarto-informacoes">
                            <li>TV de tela plana a cabo</li>
                            <li>Cozinha compacta</li>
                            <li>Área para refeições</li>
                            <li>Ar-condiconado</li>
                            <li>1 ou 2 camas de solteiro</li>
                            <li>Não permite cancelamento</li>
                        </ul>

                    </div>

                    <div class="conteudo" id="casal">
                        <h2>quarto de casal</h2>
                        <p>Conheça os nossos quartos de casal.</p>

                    </div>

                    <div id="quartos">

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-casal1.jpg" alt="Quarto de casa" />
                        </figure>

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-casal2.jpg" alt="Quarto de casal" />
                        </figure>

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-casal3.jpg" alt="Quarto de casal" />
                        </figure>

                    </div>

                    <div class="informacoes">
                        <h3>Informações sobre o quarto</h3>

                        <ul class="quarto-informacoes">
                            <li>TV de tela plana a cabo</li>
                            <li>Cozinha compacta</li>
                            <li>Área para refeições</li>
                            <li>Ar-condiconado</li>
                            <li>1 cama de casal</li>
                            <li>Cancelamento grátis.</li>
                        </ul>
                    </div>

                    <div class="conteudo" id="familia">
                        <h2>quarto família</h2>
                        <p>Conheça os nossos quartos família.</p>

                    </div>

                    <div id="quartos">

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-familia1.jpg" alt="Quarto Família" />
                        </figure>

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-familia2.jpg" alt="Quarto Família" />
                        </figure>

                        <figure class="quarto__opcao">
                            <img src="./assets/quarto-familia3.jpg" alt="Quarto Família" />
                        </figure>

                    </div>

                    <div class="informacoes">
                        <h3>Informações sobre o quarto</h3>

                        <ul class="quarto-informacoes">

                            <li>TV de tela plana a cabo</li>
                            <li>Cozinha compacta</li>
                            <li>Área para refeições</li>
                            <li>Ar-condiconado</li>
                            <li>1 cama de casal e 1 de solteiro</li>
                            <li>Cancelamento grátis.</li>

                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}