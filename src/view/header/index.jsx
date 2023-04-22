import React, { useEffect, useState } from "react";
import img from '../../images/astronauta.png'
import icon from '../../images/mouse-icon.png'
import curriculo from '../../data-projetos/curriculo.pdf'
import { useTranslation } from 'react-i18next'
import './style.scss'

const Header = () => {

    const { i18n, t } = useTranslation(["home"])

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


    const languageChange = (value) => {

        const block = document.getElementById('block')

        if (value == 'pt') {
            block.style.transform = 'translateX(0%)'
        } else {
            block.style.transform = 'translateX(100%)'
        }
        i18n.changeLanguage(value)
    }

    function CallNavBar(value) {
        const menu = document.getElementById('menu')
        menu.style.transform = `translateX(${value}%)`
    }

    return (
        <div className="header" id="header">

            <div className="switch">
                <div className="block" id="block"></div>
                <span className="linguage" onClick={() => languageChange('pt')}>PT</span>
                <span className="linguage" onClick={() => languageChange('en')}>EN</span>
            </div>

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
                <a href={curriculo} className="buttom">
                    {t("header.curriculo")}
                </a>
            </div>
            <div className="nav-bar-conteiner-mobile" id="menu" onClick={() => CallNavBar(120)}>
                <span className="material-symbols-outlined close" translate="no">
                    close
                </span>
                <div className="nav-bar">
                    <a href="#">{t("header.inicio")}</a>
                    <a href="#sobre">{t("header.projetos")}</a>
                    <a href="#projetos">{t("header.projetos")}</a>
                    <a href="#skills">{t("header.tecnologias")}</a>
                    <a href={curriculo}>{t("header.curriculo")}</a>
                </div>
                <div className="switch-mobile">
                    <div className="block" id="block"></div>
                    <span className="linguage" onClick={() => languageChange('pt')}>PT</span>
                    <span className="linguage" onClick={() => languageChange('en')}>EN</span>
                </div>
            </div>
            <div className="container-header-content">
                <div className="container-text-header">
                    <div className="container-text-content">
                        <div id="transform-item" className="text"><strong style={{ color: "#03d500", fontWeight: 900 }}>{t("header.text1-1")}</strong>{t("header.text1-2")}<div className="circle" style={{ background: "#03d500" }}></div></div>
                        <div id="transform-item" className="text">{t("header.text2-1")}<strong style={{ color: "#03d500", fontWeight: 900 }}>{t("header.text2-2")}</strong> <div className="circle"></div></div>
                        <div id="transform-item" className="text"><strong style={{ color: "#03d500", fontWeight: 900 }}>{t("header.text3-1")}</strong>{t("header.text3-2")}<div className="circle" style={{ background: "#03d500" }}></div></div>
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
