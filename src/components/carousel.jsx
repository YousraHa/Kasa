import React, {useState} from 'react'
import '../css/carousel.css'
import BtnSlider from './btnSlider'
// import dataSlider from './dataSlider'
import Banner from "../components/banner"

export default function Slider(props) {

console.log(props.slides, 'pripspict');
  
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== props.slides.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === props.slides.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(props.slides.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    
    {
        if(props.slides.length == 1){
            return (
                <Banner pic={props.slides} height="400px"/>
            )
    } 
    return (
        <div className="container-slider">
            {props.slides.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={obj} 
                        />
                    </div>
                )
            })}0

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            {/* <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div> */}
        </div>
    )
    }
}