import React, { useEffect } from "react";
import img from '../../images/astronauta.png'
import icon from '../../images/mouse-icon.png'
import './style.scss'

const Header = () => {

    function centerItens() {
        const item = document.querySelectorAll('#transform-item')
        item.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateX(0%)'
            }, (index + 1) * 200)
        })

    }

    useEffect(() => {
        centerItens()
    }, [])

    return (
        <div className="header" id="header">
            <div className="nav-bar-conteiner">
                <div className="nav-bar">
                    <a href="">Início</a>
                    <a href="">Sobre</a>
                    <a href="">Projetos</a>
                    <a href="">Contato</a>
                </div>
                <div className="buttom">
                    Contato
                </div>
            </div>
            <div className="container-header-content">
                <div className="container-text-header">
                    <div className="container-text-content">
                        <div id="transform-item" className="text"><strong style={{ color: "#9602D3", fontWeight: 900 }}>Fo</strong>co <div className="circle" style={{ background: "#9602D3" }}></div></div>
                        <div id="transform-item" className="text">Tecno<strong style={{ color: "#9602D3", fontWeight: 900 }}>logia</strong> <div className="circle"></div></div>
                        <div id="transform-item" className="text"><strong style={{ color: "#9602D3", fontWeight: 900 }}>Agili</strong>dade <div className="circle" style={{ background: "#9602D3" }}></div></div>
                        <div id="transform-item" className="how-i-do">
                            Oque Eu Faço
                        </div>
                        <div id="transform-item" className="how-i-do-text">
                            Sempre com foco no desenvolvimento ágil com boas práticas em busca de uma boa experiencia para o usuário
                        </div>
                        <div id="transform-item" className="buttom">Sobre mim</div>
                    </div>
                </div>
                <div className="conteiner-blob">
                    <div className="blob">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div className="scroll-buttom">
                <img className="icon" src={icon} alt="" />
            </div>
        </div>
    )
}

export default Header;
