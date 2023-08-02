import React from 'react';
import Link from 'next/link';
import './ProductBanner.css';

export default function ProductBanner({ text, big }) {
  return (
     <div className={big ? 'productBannerBig' : 'productBanner'}>
          <h1 className={big ? 'productBannerTitle' : 'productBannerText'}>
               <Link href='/productos' className="pinkyText">{text}</Link>
          </h1> 
     </div>
  )
}
