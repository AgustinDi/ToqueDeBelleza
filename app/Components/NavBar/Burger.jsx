import Image from "next/image";

export default function Burger({ css, openMenu, setOpenMenu }) {
  return (
    <li className={css.containerBurgerImage} onClick={()=>setOpenMenu(value=>!value)}>
      <Image src={'/Burger.png'} alt="burger" fill />
    </li>
  )
}