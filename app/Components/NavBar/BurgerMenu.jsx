import Link from "next/link";

export default function BurgerMenu({ links, css }) {
  return (
    <div>
        {
        links.map(({name, link})=>
        <li key={name} className={css.BurgerMenu}>
            <Link href={link}>
                {name}
            </Link>
        </li>
        )
        }
    </div>
  )
}
