import React, { useEffect } from "react";
import img from '../../images/astronauta.png'
import icon from '../../images/mouse-icon.png'
import curriculo from '../../data-projetos/curriculo.pdf'
import './style.scss'

const Header = () => {

    function centerItens() {
        const item = document.querySelectorAll('#transform-item')
        const icon = document.getElementById('icon')
        item.forEach((item, index) => {
            setTimeout(() => {
                icon.style.opacity = '1'
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
                    <a href="#sobre">Sobre</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#skills">Tecnologias</a>
                </div>
                <a href={curriculo} className="buttom">
                    Currículo
                </a>
            </div>
            <div className="nav-bar-conteiner-mobile" id="menu" onClick={() => CallNavBar(120)}>
                <span className="material-symbols-outlined close" translate="no">
                    close
                </span>
                <div className="nav-bar">
                    <a href="#">Início</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#skills">Tecnologias</a>
                    <a href={curriculo}>Currículo</a>
                </div>
            </div>
            <div className="container-header-content">
                <div className="container-text-header">
                    <div className="container-text-content">
                        <div id="transform-item" className="text"><strong style={{ color: "#03d500", fontWeight: 900 }}>Fo</strong>co <div className="circle" style={{ background: "#03d500" }}></div></div>
                        <div id="transform-item" className="text">Tecno<strong style={{ color: "#03d500", fontWeight: 900 }}>logia</strong> <div className="circle"></div></div>
                        <div id="transform-item" className="text"><strong style={{ color: "#03d500", fontWeight: 900 }}>Agili</strong>dade <div className="circle" style={{ background: "#03d500" }}></div></div>
                        <div id="transform-item" className="how-i-do">
                            Oque Eu Faço
                        </div>
                        <div id="transform-item" className="how-i-do-text">
                            Sempre com foco no desenvolvimento ágil com boas práticas em busca de uma boa experiencia para o usuário
                        </div>
                        <a href="#sobre" id="transform-item" className="buttom">Sobre mim</a>
                    </div>
                </div>
                <div className="conteiner-blob" id="icon">
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
