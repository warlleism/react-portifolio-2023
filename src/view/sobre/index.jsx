import { useTranslation } from "react-i18next";
import "./style.scss"

const Sobre = () => {
    
    const { t } = useTranslation(["home"])

    return (
        <div className="sobre-mim" id="sobre">

            <div className="titulo-sobre-mim">
                <div>{t("sobreMim.estudos")}</div>
                <div>{t("sobreMim.sobre-mim")}</div>
                <div>{t("sobreMim.text")}</div>
            </div>

            <div class="timeline">

                <div class="column">
                    <div class="title">
                        <h1> 2021 </h1>
                        <h2>{t("sobreMim.titulo-1")}</h2>
                    </div>
                    <div class="description">
                        <p>{t("sobreMim.desc-1")}</p>
                    </div>
                </div>

                <div class="column right">
                    <div class="title">
                        <h1>2022</h1>
                        <h2>{t("sobreMim.titulo-2")}</h2>
                    </div>
                    <div class="description">
                        <p>{t("sobreMim.desc-2")}</p>
                    </div>
                </div>

                <div class="column">
                    <div class="title">
                        <h1>2022</h1>
                        <h2>{t("sobreMim.titulo-3")}</h2>
                    </div>
                    <div class="description">
                        <p>{t("sobreMim.desc-3")}</p>
                    </div>
                </div>

                <div class="column right">
                    <div class="title">
                        <h1>2022 </h1>
                        <h2>{t("sobreMim.titulo-4")}</h2>
                    </div>
                    <div class="description">
                        <p>{t("sobreMim.desc-4")}</p>
                    </div>
                </div>

                <div class="column">
                    <div class="title">
                        <h1>2022</h1>
                        <h2>{t("sobreMim.titulo-5")}</h2>
                    </div>
                    <div class="description">
                        <p>{t("sobreMim.desc-5")}</p>
                    </div>
                </div>

                <div class="column right">
                    <div class="title">
                        <h1>2022</h1>
                        <h2>{t("sobreMim.titulo-6")}</h2>
                    </div>
                    <div class="description">
                        <p>{t("sobreMim.desc-6")}</p>
                    </div>
                </div>

                <div class="column">
                    <div class="title">
                        <h1>2023</h1>
                        <h2>{t("sobreMim.titulo-7")}</h2>
                    </div>
                    <div class="description">
                        <p>{t("sobreMim.desc-7")}</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Sobre;