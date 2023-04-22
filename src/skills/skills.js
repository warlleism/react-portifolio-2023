import Img1 from '../images/html.svg'
import Img2 from '../images/css.svg'
import Img3 from '../images/javascript.svg'
import Img4 from '../images/typescript.svg'
import Img5 from '../images/react.svg'
import Img6 from '../images/react.svg'


function Data(t) {
    const DataSkills = [
        {
            id: 1,
            img: Img1,
            tecno: 'HTML5',
            text: t("skills.html"),
        },
        {
            id: 2,
            img: Img2,
            tecno: 'CSS3',
            text: t("skills.css"),

        },
        {
            id: 3,
            img: Img3,
            tecno: 'JavaScript',
            text: t("skills.javascript"),

        },
        {
            id: 4,
            img: Img4,
            tecno: 'TypeScript',
            text: t("skills.typescript"),

        },
        {
            id: 5,
            img: Img5,
            tecno: 'ReactJS',
            text: t("skills.reactjs"),

        },
        {
            id: 6,
            img: Img6,
            tecno: 'React Native',
            text: t("skills.reactnative"),
        },
    ]

    return DataSkills
}


export default Data;