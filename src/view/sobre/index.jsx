import "./style.scss"

const Sobre = () => {
    return (
        <div className="sobre-mim" id="sobre">
            <div className="titulo-sobre-mim">
                <div>Estudos & Experiência</div>
                <div>Sobre Mim</div>
                <div>Olá! Meu nome é Warllei Martins. Sou um desenvolvedor front end sempre com foco em melhorar.</div>
            </div>
            <div className="timeline">
                <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                    <div className="timeline__event__icon ">
                        <i className="lni-cake"></i>
                    </div>
                    <div className="timeline__event__date">
                        05/06/2021
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            análise e desenvolvimento de sistemas (UVV)
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                    <div className="timeline__event__icon">
                        <i className="lni-slim"></i>
                    </div>
                    <div className="timeline__event__date">
                        15/02/2022
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            ReactJs
                        </div>

                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                    <div className="timeline__event__icon">
                        <i className="lni-burger"></i>
                    </div>
                    <div className="timeline__event__date">
                        03/03/2022
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Quattror Comercial (Estágio)
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-cake"></i>

                    </div>
                    <div className="timeline__event__date">
                        15/07/2022
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            React Native
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-cake"></i>
                    </div>
                    <div className="timeline__event__date">
                        25/07/2022
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            NodeJs
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-cake"></i>
                    </div>
                    <div className="timeline__event__date">
                        01/09/2022
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Ui Design
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-cake"></i>
                    </div>
                    <div className="timeline__event__date">
                        30/01/2023
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            TypeScript
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;