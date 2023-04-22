import React, { useEffect } from "react";
import Data from "../../skills/skills";
import { useTranslation } from 'react-i18next'
import './style.scss'

const Skills = () => {


    const { t } = useTranslation(["home"])

    function centerItens() {
        const item = document.querySelectorAll('#cards')
        item.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateY(0%)'
                item.style.transition = '1s ease-in-out';
            }, (index + 1) * 200)
            setTimeout(() => {
                item.style.transition = '.8s ease-in-out';
            }, (index + 1) * 200)
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                centerItens()
            }
        })
    }, [])

    return (
        <div className="skills" id="skills">
            <div className="title-skills">
                <div>Technologies</div>
                <div>Tecnologias</div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="container-cards">
                {
                    Data(t).map((e) => {
                        return (
                            <div className="card-skills" id="cards">
                                <div className="container-img">
                                    <img src={e.img} alt="" />
                                </div>
                                <div>{e.tecno}</div>
                                <div>{e.text}</div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Skills;
