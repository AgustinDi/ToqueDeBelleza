import Image from "next/image";
import Link from "next/link";

export default function BurgerMenu({ links, css }) {
  return (
    <div className={css.BurgerMenuContainer}>
      <ul>
        {
        links.map(({name, link})=>
        <li key={name}>
            <Link href={link}>
                {name}
            </Link>
        </li>
        )
        }
        <li>
        <a href="#">Copiar nuestro CVU</a>
        </li>
      </ul>
      <div>
        {/* <a href='tel:3547598556' className={css.iconPlusText}>
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
        </a> */}

      </div>
    </div>
  )
}
