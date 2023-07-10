import './Footer.css';
import Image from 'next/image';

export default function Footer () {
    return (
        <footer className='footer'>
            <div className='topFooter'>
            <div className='contactUs'>
                <p>
                    Contactanos:
                </p>
                    <a href='tel:3547598556' className='iconPlusText'>
                        <div className='containers'>
                            <Image alt={'telephone redirect'} src={'/telephone.png'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>
                        <span>
                            3547598556
                        </span>
                    </a>
                    <a href='https://goo.gl/maps/fyJAKU1shv8dYq3n8' className='iconPlusText'>
                        <div className='containers'>
                            <Image alt={'google maps'} src={'/ubication.png'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>
                        <span>
                            Calle 4 entre 7 y Brochero N°430
                            Santa Ana, Córdoba, Argentina
                        </span>
                    </a>
            </div>
            <div className='stayContact'>
                <p>
                    Sigamos conectados:
                </p>
                    <a href='tel:3547598556' className='iconPlusText'>
                        <div className='containers'>
                            <Image alt={'instagram'} src={'/instagramm.png'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>
                        <span>
                            Nuestro Instagram
                        </span>
                    </a>
                    <a href='tel:3547598556' className='iconPlusText'>
                        <div className='containers'>
                            <Image alt={'whatsapp'} src={'/whatsapp.png'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>
                        <span>
                            Consultas por Whatsapp
                        </span>
                    </a>
            </div>
            </div>
            <div className='bottomFooter'>
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