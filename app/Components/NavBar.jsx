import Link from "next/link";
import css from './NavBar.module.css';
import Image from "next/image";
import Logo from '../../public/Logo.png';
import LogoDark from '../../public/Logo_dark.png';

const links = [
    {
    name: 'Inicio',
    link: '/'
    },{
    name: 'about',
    link: '/about'
    },{
    name: 'products',
    link: '/products'
    },{
    name: 'cart',
    link: '/cart'
    }
]

export default function NavBar(){
    return (
        <header className={css.header}>
            <nav>
                <Image src={LogoDark} className="logo" width={'10px'} alt={'logo'} priority={true}/>
                <ul className={css.ul}>
                    {links.map(({name, link})=>
                    <li key={link}>
                        <Link href={link}>
                            {name}
                        </Link>
                    </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}