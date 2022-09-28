import React from 'react'
import Image from 'next/image'
import { ImageSliderStyles } from './image-slider.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import "swiper/css";
import "./styles.css";

const ImageSliderComponent = ({ images }) => {

    return (
        <ImageSliderStyles>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
            >
                {images.map( (image, i) => (
                    <SwiperSlide key={`image-${i}`}>
                        <img src={image.url}/>
                        {/* {image.url} */}
                    </SwiperSlide>
                ))}
            </Swiper>
        </ImageSliderStyles>
    )
}

export default ImageSliderComponent