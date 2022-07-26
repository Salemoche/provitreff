import styled, {css} from "styled-components";

export const TitleStyles = styled('div')`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    /* height: 120px; */
    height: auto;
    /* margin-bottom: ${ props => props.theme.sizes.M }px; */
    margin-top: ${ props => props.theme.sizes.L }px;
    cursor: pointer;
    /* ${ props => {
        if (props.isMain) {
            return css`
                height: 110px;
            `
        }
    } }; */
    /* &:nth-child(1) {
        margin-top: 0;
    } */
    
    .provi-title-image {
        /* height: 100%;
        width: auto; */
        width: 100%;
        height: auto;
        max-width: ${ props => props.theme.sizes.contentWidth }px;
        position: relative;
        z-index: 1;
        &-hover {
            position: absolute;
            z-index: 0;
        }
    }
    @media screen and ( max-width: ${ props => props.theme.breakpoints.L }px) {
        margin-top: calc(10vw + 32px);
        position: relative;
        .provi-title-image {
            max-width: unset;
            &-hover {
                ${ props => {
                    if ( props.isMobile ) return css` display: none;`
                }}
            }
        }
    }
    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        justify-content: flex-start;
        .provi-title-image {
            /* max-width: calc( 100% - ${ props => props.theme.sizes.M }px - 8vw) !important; */
            max-width: 100% !important;
            width: auto !important;
            object-position: left;
            opacity: 1 !important;
            /* width: auto !important;
            object-position: left;
            /* width: 100%;
            height: auto;
            max-width: 100%; */
        }
    }
    /* @media screen and ( max-width: ${ props => props.theme.breakpoints.S }px) {
        .provi-title-image {
            max-width: calc( 100% - ${ props => props.theme.sizes.S }px - 8vw) !important;
        }
    } */
`