import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

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
        <a href="#">Copiá nuestro CVU</a>
        </li>
      </ul>
      <div>
        <ul>  
          <li>
            <a href='tel:3547598556' className='navBiconPlusText' onClick={()=>setOpenMenu(false)}>
                <div className='navBcontainers'>
                    <Image alt={'instagram'} src={'/instagramm.png'} fill/>
                </div>
                Nuestro Instagram
            </a>  
          </li>
          <li>
            <a href='tel:3547598556' className='navBiconPlusText' onClick={()=>setOpenMenu(false)}>
                <div className='navBcontainers'>
                    <Image alt={'whatsapp'} src={'/whatsapp.png'} fill/>
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
