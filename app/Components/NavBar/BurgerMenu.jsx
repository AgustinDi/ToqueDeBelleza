import Image from "next/image";
import Link from "next/link";

export default function BurgerMenu({ links, setOpenMenu, openMenu, css }) {
  return (
    <div className={css.BurgerMenuContainer} style={{right: openMenu ? '0px' : '-400px'}}>
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
            <a href='tel:3547598556' className={css.iconPlusText} onClick={()=>setOpenMenu(false)}>
                <div className={css.containers}>
                    <Image alt={'instagram'} src={'/instagramm.png'} fill/>
                </div>
                Nuestro Instagram
            </a>  
          </li>
          <li>
            <a href='tel:3547598556' className={css.iconPlusText} onClick={()=>setOpenMenu(false)}>
                <div className={css.containers}>
                    <Image alt={'whatsapp'} src={'/whatsapp.png'} fill/>
                </div>
                Consultas por Whatsapp
            </a>
          </li>
        </ul>
          <div className={css.derechosMenu}>
              Copyright Toque de Belleza - 2023.
              Todos los derechos reservados ®
          </div>
      </div>
    </div>
  )
}
