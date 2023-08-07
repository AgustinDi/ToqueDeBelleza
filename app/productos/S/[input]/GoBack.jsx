'use client'

import { useRouter } from "next/navigation"

export default function GoBack() {
     const router = useRouter();
  return <button onClick={()=>router.back()} className='prodSear_BackButton categoryContainer'>Volver</button>
}
