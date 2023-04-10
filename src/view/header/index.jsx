import React, { useEffect } from "react";
import img from '../../images/astronauta.png'
import icon from '../../images/mouse-icon.png'
import curriculo from '../../data-projetos/curriculo.pdf'
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

    function CallNavBar(value) {
        const menu = document.getElementById('menu')
        menu.style.transform = `translateX(${value}%)`
    }

    return (
        <div className="header" id="header">

            <span className="material-symbols-outlined menu" translate="no" onClick={() => CallNavBar(0)}>
                menu
            </span>

            <div className="nav-bar-conteiner">
                <div className="nav-bar">
                    <a href="#">Início</a>
                    <a href="#">Sobre</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#skills">Tecnologias</a>
                </div>
                <a href={curriculo} className="buttom">
                    Currículo
                </a>
            </div>
            <div className="nav-bar-conteiner-mobile" id="menu">
                <span className="material-symbols-outlined close" translate="no" onClick={() => CallNavBar(120)}>
                    close
                </span>
                <div className="nav-bar">
                    <a href="#" onClick={() => CallNavBar(120)}>Início</a>
                    <a href="#" onClick={() => CallNavBar(120)}>Sobre</a>
                    <a href="#projetos" onClick={() => CallNavBar(120)}>Projetos</a>
                    <a href="#skills" onClick={() => CallNavBar(120)}>Tecnologias</a>
                </div>
                <a href={curriculo} className="buttom">
                    Currículo
                </a>
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
            <a className="scroll-buttom" href="#skills">
                <img className="icon" src={icon} alt="" />
            </a>
        </div>
    )
}

export default Header;
