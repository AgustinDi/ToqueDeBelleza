import Image from "next/image";

export default function Burger({ css, openMenu, setOpenMenu, setIsSearching }) {
  return (
    <li className={css.containerBurgerImage} onClick={()=>{setOpenMenu(value=>!value);setIsSearching(false)}}>
      <Image src={'/Burger.png'} alt="burger" fill />
    </li>
  )
}