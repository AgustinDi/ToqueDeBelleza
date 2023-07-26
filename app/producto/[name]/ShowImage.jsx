'use client'

import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function ShowImage({ product }) {

    Fancybox.bind("[data-fancybox]", {
    });

    return (
        <a data-src={product.image} data-fancybox='gallery' data-caption={product.name}>
            <Image fill src={product.images[0]} alt={product.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            {/* complete later...*/}
        </a> 
  )
}
