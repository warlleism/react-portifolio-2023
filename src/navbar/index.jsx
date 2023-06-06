import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import curriculo from '../data-projetos/curriculo.pdf'
import './style.scss'

const Navbar = () => {

    const [scrollParaBaixo, setScrollParaBaixo] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollAtual = window.pageYOffset;
            const scrollAnterior = scrollRef.current || 0;

            if (scrollAtual > scrollAnterior) {
                setScrollParaBaixo(true);
            } else {
                setScrollParaBaixo(false);
            }
            scrollRef.current = scrollAtual;
        }

        const scrollRef = { current: window.pageYOffset };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nav-bar-conteiner-default" style={{
            transform: scrollParaBaixo ? 'translateY(-100%)' : 'translateY(0%)'
        }}>
            <div className="nav-bar-default">
                <Link to={'/'}>Início</Link>
            </div>
            <a href={curriculo} className="buttom">
                Currículo
            </a>
        </div>
    )
}

export default Navbar;