import css from './Footer.module.css';
import Image from 'next/image';

export default function Footer () {
    return (
        <footer className={css.footer}>
            <div className={css.topFooter}>
            <div className={css.contactUs}>
                <p>
                    Contactanos:
                </p>
                    <a href='tel:3547598556' className={css.iconPlusText}>
                        <div className={css.containers}>
                            <Image alt={'telephone redirect'} src={'/telephone.png'} fill/>
                        </div>
                        3547598556
                    </a>
                    <a href='https://goo.gl/maps/fyJAKU1shv8dYq3n8' className={css.iconPlusText}>
                        <div className={css.containers}>
                            <Image alt={'google maps'} src={'/ubication.png'} fill/>
                        </div>  
                        Calle 4 entre 7 y Brochero N°430
                        Santa Ana, Córdoba, Argentina
                    </a>
            </div>
            <div className={css.stayContact}>
                <p>
                    Sigamos conectados:
                </p>
                    <a href='tel:3547598556' className={css.iconPlusText}>
                        <div className={css.containers}>
                            <Image alt={'instagram'} src={'/instagramm.png'} fill/>
                        </div>
                        Nuestro Instagram
                    </a>
                    <a href='tel:3547598556' className={css.iconPlusText}>
                        <div className={css.containers}>
                            <Image alt={'whatsapp'} src={'/whatsapp.png'} fill/>
                        </div>
                        Consultas por Whatsapp
                    </a>
            </div>
            </div>
            <div className={css.bottomFooter}>
                <h5>
                    Copyright Toque de Belleza - 2023.
                    Todos los derechos reservados ®
                </h5> 
                <h5>
                    Desarrollado por <a href='https://www.linkedin.com/in/agustin-digiacinto/' target='_BLANK'>@Agustin Di giacinto</a>
                </h5>
            </div>
        </footer>
    )
}