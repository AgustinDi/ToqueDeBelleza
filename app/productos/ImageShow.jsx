'use client'

import Image from "next/image";
import { blur as blurData } from '@/app/helper/blurData64.json';

export default function ImageShow({ value }) {
  return (
     <div className='prcimageContainer'>
          <Image src={value.images[0]} placeholder="blur" blurDataURL={blurData} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill alt={value.name}/>
     </div>
  )
}
