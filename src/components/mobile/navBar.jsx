import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import curriculo from '../../data-projetos/curriculo.pdf'
import './style.scss'

const Navbar = () => {

    const { i18n, t } = useTranslation(["home"])

    function CallNavBar(value) {
        const menu = document.getElementById('menu')
        menu.style.transform = `translateX(${value}%)`
    }

    useEffect(() => {
        let lng = localStorage.getItem('linguage')
        if (lng)
            i18n.changeLanguage(lng)
    }, [])

    const languageChange = (value) => {
        if (value == 'pt') {
            localStorage.setItem('linguage', 'pt')
        } else {
            localStorage.setItem('linguage', 'en')
        }
        i18n.changeLanguage(value)
    }


    return (
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
    )
}

export default Navbar;