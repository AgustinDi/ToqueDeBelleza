import Image from "next/image";

export default function Burger({ css, links}) {
  return (
    <li className={css.containerBurgerImage}>
    <Image src={'/Burger.png'} alt="burger" fill />

    </li>
  )
}