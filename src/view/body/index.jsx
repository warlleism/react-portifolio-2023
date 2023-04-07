import React, { useEffect } from "react";
import DataSkills from "../../skills/skills";
import './style.scss'

const Skills = () => {

    // function centerItens() {
    //     const item = document.querySelectorAll('#transform-item')
    //     item.forEach((item, index) => {
    //         setTimeout(() => {
    //             item.style.transform = 'translateX(0%)'
    //         }, (index + 1) * 200)
    //     })

    // }

    // useEffect(() => {
    //     centerItens()
    // }, [])

    return (
        <div className="skills" id="skills">
            {console.log(DataSkills)}
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
                    DataSkills.map((e) => {
                        return (
                            <div className="card-skills">
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
