import React, {useState} from 'react'
import BtnSlider from './btnSlider'
import Banner from "../components/banner"
import '../css/carousel.css'

export default function Slider(props) {
  
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
    
    if(props.slides.length === 1){
            return (
                <Banner pic={props.slides} height="400px" disabled />
            )
    } 
    return (
        <div className="container-slider">
            {props.slides.map((obj, index) => {
                return (
                    <div
                        key={obj}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={obj} 
                        alt="housing "
                        />
                    </div>
                )
            })}0

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: props.slides.length}).map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
    }
