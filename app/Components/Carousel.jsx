'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Carousel as CarouselFancy } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
import './Carousel.css';

export default function Carousel({ images, name }) {
  const container = useRef(null)

  useEffect(()=>{
    const options = { 
      Autoplay: {
        timeout: 3000
      }
     };
    const result = new CarouselFancy(container.current, options, { Autoplay })
  },[])

  return (
     <div className="f-carousel c-carousel" ref={container}>
          {images.map(({src, index})=>
              <div key={index} data-src={src} data-fancybox={name} data-caption={src} className="f-carousel__slide c-slide">
                  <Image fill src={src} alt={src} quality={100} priority={index === 0} className='f-carousel__imageContainer c-imageContainer'  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"/>
              </div>
          )}
     </div>
  )
}
