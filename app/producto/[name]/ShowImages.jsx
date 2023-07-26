'use client'

import Image from "next/image";
// import Carousel from "@/app/Components/Carousel";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function ShowImages({ product }) {

    Fancybox.bind(`[data-fancybox]="gallery-${product.name}"`, {
    });

    return (
        <a data-src={product.image} data-fancybox={`gallery-${product.name}`} data-caption={product.name}>
            <Image fill src={product.images[0]} alt={product.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            {/* complete later...*/}
        </a> 
  )
}
