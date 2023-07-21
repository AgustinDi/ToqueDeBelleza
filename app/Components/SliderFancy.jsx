'use client'

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Fancybox, Carousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@fancyapps/ui/dist/carousel/carousel.css";

export default function SliderFancy() {
    const currentRef = useRef(null);
    const [images, setImages] = useState([
        {
            src: "/Banner 1 - Toque de Belleza.png",
            index: 0
        },
        {
            src: "/Banner 2 - Toque de Belleza.png",
            index: 1
        },
        {
            src: "/Loading.png",
            index: 2
        },
        {
            src: "/Loading.png",
            index: 3
        },
    ])

    useEffect(()=>{
            const container = currentRef.current;
            const options = { infinite: false };
        
            const carousel = new Carousel(container, options);
    })

    Fancybox.bind('[data-fancybox="Slider"]', {
    });

     return (
        <div id="sliderContainer" ref={currentRef}>
        {images.map(({src, index})=>
            <a key={index} data-src={src} data-fancybox='Slider' data-caption={src} style={{position: 'relative', width: '100vw', height: '400px'}}>
                <Image fill src={src} alt={src} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </a>
        )}
        </div>
  )
}