/* eslint-disable @next/next/no-img-element */

export default function Card({ data, style }) {
    const {alt, image, title, subTitle} = data;

  return (
    <div className={style}>
        <img src={image} width={150} alt={alt}/>
        <h5>{title}</h5>
        <h6>
            {subTitle}
        </h6>
    </div>
  )
}
