import React, { useEffect, useState } from "react";
import img from '../../images/astronauta.png'
import icon from '../../images/mouse-icon.png'
import curriculo from '../../data-projetos/curriculo.pdf'
import { useTranslation } from 'react-i18next'
import Navbar from "../../components/mobile/navBar";
import linkedin from '../../images/linkedin.png'
import profile from '../../images/profile.png'
import github from '../../images/github.png'
import instagram from '../../images/instagram.png'
import './style.scss'

const Header = () => {

    const { i18n, t } = useTranslation(["home"])
    const [count, setCount] = useState(0)

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
        contactIcons()
        const block = document.getElementById('block')
        let lng = localStorage.getItem('linguage')
        if (lng)
            i18n.changeLanguage(lng)
        if (lng == 'en')
            block.style.transform = 'translateX(100%)'

    }, [])

    const contactIcons = () => {
        setCount(count === 1 ? 0 : 1)
        const icons = document.querySelectorAll('#iconContact')
        const translateY = count === 1 ? '130%' : '0px'
        const translateX = count === 1 ? ['-60px', '0px', '60px'] : ['0px', '0px', '0px']
        icons.forEach((icon, i) => {
            setTimeout(() => {
                icon.style.transform = `translateY(${translateY}) translateX(${translateX[i]})`
            }, (i + 1) * 100)
        })
    }

    const languageChange = (value) => {
        const block = document.getElementById('block')
        if (value == 'pt') {
            block.style.transform = 'translateX(0%)'
            localStorage.setItem('linguage', 'pt')
        } else {
            block.style.transform = 'translateX(100%)'
            localStorage.setItem('linguage', 'en')
        }
        i18n.changeLanguage(value)
    }

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
                    <a href="#">{t("header.inicio")}</a>
                    <a href="#sobre">{t("header.sobre")}</a>
                    <a href="#projetos">{t("header.projetos")}</a>
                    <a href="#skills">{t("header.tecnologias")}</a>
                </div>

                <div className="container-curriculo">
                    <a href={curriculo} className="buttom">
                        {t("header.curriculo")}
                    </a>
                    <div className="switch">
                        <div className="block" id="block"></div>
                        <span className="linguage" onClick={() => languageChange('pt')}>PT</span>
                        <span className="linguage" onClick={() => languageChange('en')}>EN</span>
                    </div>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/warllei-martins-823510153/" target="_blank" className="icon1 contact" id="iconContact">
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="https://github.com/warlleism" target="_blank" className="icon2 contact" id="iconContact">
                            <img src={github} alt="" />
                        </a>
                        <a href="https://www.instagram.com/warlleimartinsdev/" target="_blank" className="icon3 contact" id="iconContact">
                            <img src={instagram} alt="" />
                        </a>
                        <div className="profile" onClick={() => contactIcons()} >
                            <img src={profile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
            <div className="container-header-content">
                <div className="container-text-header">
                    <div className="container-text-content">
                        <div id="transform-item" className="text"><strong style={{ color: "#03d500", fontWeight: 900 }}>{t("header.text1-1")}</strong>{t("header.text1-2")}</div>
                        <div id="transform-item" className="text">{t("header.text2-1")}<strong style={{ color: "#03d500", fontWeight: 900 }}>{t("header.text2-2")}</strong></div>
                        <div id="transform-item" className="text"><strong style={{ color: "#03d500", fontWeight: 900 }}>{t("header.text3-1")}</strong>{t("header.text3-2")}</div>
                        <div id="transform-item" className="how-i-do">
                            {t("header.oque-faco")}
                        </div>
                        <div id="transform-item" className="how-i-do-text">
                            {t("header.text")}
                        </div>
                        <a href="#sobre" id="transform-item" className="buttom">{t("header.sobre-mim")}</a>
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
