'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Carousel as CarouselFancy } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import './Carousel.css';

export default function Carousel({ images, name }) {
  const container = useRef(null)

  useEffect(()=>{
    const options = {  };
    const result = new CarouselFancy(container.current, options)
  },[])

  return (
     <div className="f-carousel" ref={container}>
          {images.map(({src, index})=>
              <div key={index} data-src={src} data-fancybox={name} data-caption={src} className="f-carousel__slide">
                  <Image fill src={src} alt={src} quality={100} className='f-carousel__imageContainer'  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </div>
          )}
     </div>
  )
}
