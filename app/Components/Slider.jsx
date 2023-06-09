'use client'

import Image from 'next/image';
import css from './Slider.module.css';
import { useEffect, useState, useRef } from 'react';

export default function Slider() {
    const cardWidth = 100;
    const unit = 'vw';
    const sliderRef = useRef(null);
    const [transformSlider, setTransformSlider] = useState(0);
    const [transitionSlider, setTransitionSlider] = useState('transform 1s');
    const [slideCounter, setSlideCounter] = useState(0);
    const [isInTransition, setIsTransition] = useState(false);
    const [images, setImages] = useState([
        {
            src: "/Loading.png",
            name: "agua 1",
        },
        {
            src: "/Loading.png",
            name: "fuego 2",
        },
        {
            src: "/Loading.png",
            name: "planta 3",
        },
        {
            src: "/Loading.png",
            name: "aire 4",
        },
    ])
    

    useEffect(()=>{
        reorderSlider();
    },[])

    async function reorderSlider(){
        // funcion para reordenar las imagenes para el slide infinito
        const updatedImages = []
        setTransitionSlider('none')
        if(slideCounter == images.length -1){ //estamos en el ultimo elemento
        const firstImage = images[0];
        images.forEach((item, i) => {
            if(i !== 0) updatedImages.push(item)
            if(i === images.length -1) updatedImages.push(firstImage)
        })
        setImages(updatedImages);
        setTransformSlider(value => value + cardWidth)
        setSlideCounter(value=> value - 1)
        } else if(slideCounter == 0){  // estamos en el primer elemento
        const lastImage = images[images.length - 1];
        images.forEach((item, i) => {
            if(i !== images.length -1){
                updatedImages.push(item)
            } else {
                updatedImages.unshift(lastImage)
            }
        })
        setImages(updatedImages);
        setTransformSlider(value => value - cardWidth)
        setSlideCounter(value=> value + 1)
        }
        setIsTransition(false)
    }

    function moveSlide(direction){
        if(isInTransition) return
        // true es derecha, left es izquierda
        setTransitionSlider('transform 1s')
        setIsTransition(true)
        if(direction){ 
            setTransformSlider(value => value - cardWidth)
            setSlideCounter(value=> value + 1)
        } else {
            setTransformSlider(value => value + cardWidth)
            setSlideCounter(value=> value - 1)
        }
    }

  return (
    <div className={css.sliderContainer}>
        <div ref={sliderRef} className={css.slider} style={{transform: `translateX(${transformSlider}${unit})`,transition: transitionSlider}} onTransitionEnd={reorderSlider}>
             {images && images.map(({src, name},i)=> <div key={i} className={css.sliderElement}><Image fill src={src} alt={i}/><p style={{position: 'absolute', zIndex: '1000', color: 'green'}}>{name}</p></div>)}
        </div>
        <div className={css.sliderButtons}>
            <button className={`${css.button} ${css.buttonLeft}`} onClick={()=>moveSlide(false)}>{'<'}</button>
            <div style={{display: 'flex', color: 'red', flexDirection:'flex'}}>{slideCounter}</div>
            <button className={`${css.button} ${css.buttonRight}`}  onClick={()=>moveSlide(true)}>{'>'}</button>
        </div>
    </div>
  )
}
