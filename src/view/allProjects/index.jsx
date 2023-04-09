import './style.scss'
import Projetos from '../../data-projetos-detalhar/projetos';
import Navbar from './../../navbar/index';

const AllProjects = () => {

    return (
        <>
            <Navbar />
            <div className='Allprojects'>
                <div className='container-cards-projetos'>
                    {
                        Projetos?.map((itens) => {
                            return (
                                <div
                                    key={itens.id}
                                    className='card-project'
                                >
                                    <img className='first-img img' src={itens.img} alt="" />
                                    <img className='second-img img' src={itens.img2} alt="" />
                                    <div className='loading' style={{ background: itens.color }}></div>
                                    <div className='container-info-tecno'>
                                        <div className='container-nome-child info-child'>{itens.nome}</div>
                                        <div className='container-tecno-child info-child'>{itens.tecno}</div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AllProjects;