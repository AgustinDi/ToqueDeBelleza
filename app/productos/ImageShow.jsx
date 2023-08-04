'use client'

import Image from "next/image";
import blurData from '@/app/helper/blurData64.json';

export default function ImageShow({ value }) {
  const { blur } = blurData

  return (
     <div className='prcimageContainer'>
          <Image src={value.images[0]} placeholder="blur" blurDataURL={blur} quality={10} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill alt={value.name}/>
     </div>
  )
}
