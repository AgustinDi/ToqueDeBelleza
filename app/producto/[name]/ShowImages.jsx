'use client'

import Image from "next/image";
import { Fancybox, Carousel } from "@fancyapps/ui";
import { useRef, useEffect } from "react";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import './ShowImages.css'

export default function ShowImages({ product }) {
    const container = useRef(null)

    Fancybox.bind(`[data-fancybox]`, {
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: [],
            right: ["close"],
          },
        },
    });

    useEffect(()=>{
      const options = { };
      const result = new Carousel(container.current, options)
    },[])

    return (
        <>
            <div className="f-carousel" ref={container}>
                    {product.images.map((src, index)=> 
                        <a key={index} data-src={src} data-fancybox={`gallery`} data-caption={`${product.name} - ${index + 1}`} className="f-carousel__slide">
                            <Image fill src={src} alt={product.name} quality={100} className='f-carousel__imageContainer'  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </a>
                    )}
            </div>
        </>
    )
}
