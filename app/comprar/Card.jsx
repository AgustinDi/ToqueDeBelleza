/* eslint-disable @next/next/no-img-element */
import './page.css';

export default function Card({ data }) {
    const {alt, image, title, subTitle} = data;

  return (
    <div className='dataCard'>
        <img className='dataImageContainer' src={image} alt={alt}/>
        <h5>{title}</h5>
        <h6>
            {subTitle}
        </h6>
    </div>
  )
}
