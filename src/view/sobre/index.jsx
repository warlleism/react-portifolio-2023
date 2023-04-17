import "./style.scss"

const Sobre = () => {
    return (
        <div className="sobre-mim" id="sobre">

            <div className="titulo-sobre-mim">
                <div>Estudos & Experiência</div>
                <div>SOBRE MIM</div>
                <div>Olá! Meu nome é Warllei Martins. Sou um desenvolvedor front end sempre com foco em melhorar.</div>
            </div>

            <div class="timeline">

                <div class="column">
                    <div class="title">
                        <h1> 2021 </h1>
                        <h2>UNIVERSIDADE VILA VELHA</h2>
                    </div>
                    <div class="description">
                        <p>Análise e desenvolvimento de sistemas.</p>
                    </div>
                </div>

                <div class="column right">
                    <div class="title">
                        <h1>2022</h1>
                        <h2>FRAMEWORK REACTJS</h2>
                    </div>
                    <div class="description">
                        <p>O React (também denominado React.js ou ReactJS) é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
                    </div>
                </div>

                <div class="column">
                    <div class="title">
                        <h1>2022</h1>
                        <h2>FRAMEWORK REACT NATIVE</h2>
                    </div>
                    <div class="description">
                        <p>React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.</p>
                    </div>
                </div>

                <div class="column right">
                    <div class="title">
                        <h1>2022 </h1>
                        <h2>QUATTROR COMERCIAL (ESTÁGIO)</h2>
                    </div>
                    <div class="description">
                        <p>A Quattror se destaca no mercado nacional e internacional pela qualidade, transparência, otimização de tempo e custos na prestação dos serviços de Exportação, Importação e Logística em geral, incluindo administração, coordenação, acompanhamento e execução de todo o processo. Nos comprometemos em atender as exigências e expectativas do cliente, assegurando sempre os prazos pré estabelecidos.</p>
                    </div>
                </div>

                <div class="column">
                    <div class="title">
                        <h1>2022</h1>
                        <h2>NODEJS</h2>
                    </div>
                    <div class="description">
                        <p>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos</p>
                    </div>
                </div>

                <div class="column right">
                    <div class="title">
                        <h1>2022</h1>
                        <h2>UI & WEB DESIGN</h2>
                    </div>
                    <div class="description">
                        <p>Design de interface de utilizador ou engenharia de interface de utilizador é o desenvolvimento de computadores, aplicações, máquinas, dispositivos de comunicação móveis, softwares e sítios web com o foco na experiência do utilizadores e interação.</p>
                    </div>
                </div>

                <div class="column">
                    <div class="title">
                        <h1>2023</h1>
                        <h2>TYPESCRIPT</h2>
                    </div>
                    <div class="description">
                        <p>TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.</p>
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default Sobre;