import styled, { css } from "styled-components";

export const ImageSliderStyles = styled('div')`
    margin-bottom: ${ props => props.theme.sizes.M }px;

    .swiper-button-next,
    .swiper-button-prev {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        z-index: 1;
        cursor: pointer;
    }

    .swiper-button-next {
        left: 50%;
    }
    
`