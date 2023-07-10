import Image from "next/image";

export default function Burger({ setOpenMenu, setIsSearching }) {
  return (
    <li className='navBcontainerBurgerImage' onClick={()=>{setOpenMenu(value=>!value);setIsSearching(false)}}>
      <Image src={'/Burger.png'} alt="burger" fill />
    </li>
  )
}