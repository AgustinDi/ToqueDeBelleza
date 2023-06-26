'use client'
import { UseMyContext } from "@/app/Context/Context";

export default function BuyButton({ name }) {
    const { addToCart } = UseMyContext();
    // En un futuro usar addXToCart para agregar mas de uno
    return (
      <button onClick={()=>addToCart(name)}>
        Agregar al Carrito
      </button>
    )
}
