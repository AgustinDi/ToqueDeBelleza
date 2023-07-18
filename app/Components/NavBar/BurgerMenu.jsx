import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import CopyClipboard from "./CopyClipboard";

export default function BurgerMenu({ links, setOpenMenu, openMenu }) {

  useEffect(()=>{
    openMenu
    ? document.body.style.overflow = 'hidden'
    : document.body.style.overflow = 'unset';
  },[openMenu])

  return (
    <div className='navBBurgerMenuContainer' style={{right: openMenu ? '0px' : '-400px'}}>
      <ul>
        {
        links.map(({name, link})=>
        <li key={name}>
            <Link href={link} onClick={()=>setOpenMenu(false)}>
                {name}
            </Link>
        </li>
        )
        }
        <li>
          <CopyClipboard content={'nuestro alias!'} copy={'alias de cande:'} popUpInfo={'Copiado al portapapeles'}/>
        </li>
      </ul>
      <div>
        <ul>  
          <li>
            <a href='https://www.instagram.com/ttoquedebelleza/' target='_blank' className='navBiconPlusText' onClick={()=>setOpenMenu(false)}>
                <div className='navBcontainers'>
                    <Image alt={'instagram'} src={'/instagramm.png'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                Nuestro Instagram
            </a>  
          </li>
          <li>
            <a href='https://wa.me/5493547667348?text=Hola cande, tengo una consulta:' className='navBiconPlusText' onClick={()=>setOpenMenu(false)}>
                <div className='navBcontainers'>
                    <Image alt={'whatsapp'} src={'/whatsapp.png'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                Consultas por Whatsapp
            </a>
          </li>
        </ul>
          <div className='navBderechosMenu'>
              Copyright Toque de Belleza - 2023.
              Todos los derechos reservados ®
          </div>
      </div>
    </div>
  )
}
