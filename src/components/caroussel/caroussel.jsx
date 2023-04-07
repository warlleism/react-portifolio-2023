import './style.scss'
import Projetos from '../../data-projetos/projetos';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Carousel = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        }
    }, [])

    return (
        <div className='container-carousel'>
            <div className='container-title-carousel'>
                <div className='container-title-text'>
                    <div className='titulo-txt'>Ultimos <strong style={{ color: "#9602D3" }}>Projetos</strong></div>
                    <div></div>
                </div>
                <div className='buttom-all-projects'>
                    Ver Todos
                </div>
            </div>

            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    className='inner'
                    drag="x"
                    animate={{ x: 0 }}
                    initial={{ x: 100 }}
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {
                        Projetos?.map((itens) => {
                            return (
                                <motion.div
                                    key={itens.id}
                                    className='item'
                                    id='item'
                                >
                                    <div className='img-content' style={{ backgroundImage: `url(${itens.img})` }}></div>
                                    <div className='container-nome-projeto'>{itens.nome}</div>
                                    <div className='container-nome-tecno'>{itens.tecno}</div>
                                </motion.div>

                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Carousel;