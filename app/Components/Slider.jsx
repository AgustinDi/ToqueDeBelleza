'use client'

import Image from 'next/image';
import './Slider.css';
import { useEffect, useState, useRef } from 'react';

export default function Slider() {
    const cardWidth = 100;
    const unit = 'vw';
    const sliderRef = useRef(null);
    const [transformSlider, setTransformSlider] = useState(0);
    const [transitionSlider, setTransitionSlider] = useState('transform 0.4s');
    const [slideCounter, setSlideCounter] = useState(0);
    const [isInTransition, setIsTransition] = useState(false);
    const [dotCounter, setDotCounter] = useState(0);
    const [images, setImages] = useState([
        {
            src: "/Banner 1 - Toque de Belleza.png",
            name: "agua 1",
            index: 0
        },
        {
            src: "/Banner 2 - Toque de Belleza.png",
            name: "fuego 2",
            index: 1
        },
        {
            src: "/Loading.png",
            name: "planta 3",
            index: 2
        },
        {
            src: "/Loading.png",
            name: "aire 4",
            index: 3
        },
    ])
    const [dots, setDots] = useState([true, false, false, false])
    
    
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
        setTransitionSlider('transform 0.4s')
        setIsTransition(true)
        if(direction){ 
            setTransformSlider(value => value - cardWidth)
            setSlideCounter(value=> value + 1)
            refreshDot(direction)
        } else {
            setTransformSlider(value => value + cardWidth)
            setSlideCounter(value=> value - 1)
            refreshDot(direction)
        }
    }

    function refreshDot (action) {
        dots[dotCounter] = false
        if(action){
            if(dotCounter === images.length - 1) {
            dots[0] = true    
                return setDotCounter(0)
            }
            dots[dotCounter + 1] = true
            setDotCounter(value => value + 1)
        } else {
            if(dotCounter === 0) {
                dots[images.length - 1] = true
                return setDotCounter(images.length - 1)
            }
            dots[dotCounter - 1] = true
            setDotCounter(value => value - 1)
        }
    }

  return (
    <div className='slidsliderContainer'>
        <div ref={sliderRef} className='slidslider' style={{transform: `translateX(${transformSlider}${unit})`,transition: transitionSlider}} onTransitionEnd={reorderSlider}>
             {images && images.map(({src, name},i)=> <div key={i} className='slidsliderElement'><Image fill src={src} alt={i} style={{objectFit:"cover"}} quality={100}/><p style={{position: 'absolute', zIndex: '10', color: 'green'}}>{name}</p></div>)}
        </div>
        <div className='slidsliderButtons'>
            <button className={`slidbutton slidbuttonLeft`} onClick={()=>moveSlide(false)}>{'<'}</button>
            <div className='slidindexDots'>
                {dots && dots.map((value, index)=><div key={index} className={`sliddot ${value && 'slidactive'}`}></div>)}
            </div>
            <button className={`slidbutton slidbuttonRight`}  onClick={()=>moveSlide(true)}>{'>'}</button>
        </div>
    </div>
  )
}
