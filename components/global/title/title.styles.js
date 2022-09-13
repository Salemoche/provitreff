import styled, {css} from "styled-components";

export const TitleStyles = styled('div')`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    /* height: 120px; */
    height: auto;
    margin-bottom: ${ props => props.theme.sizes.M }px;
    cursor: pointer;

    /* ${ props => {
        if (props.isMain) {
            return css`
                height: 110px;
            `
        }
    } }; */
    

    img {
        /* height: 100%;
        width: auto; */
        width: 100%;
        height: auto;
        max-width: ${ props => props.theme.sizes.contentWidth }px;
    }


    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        /* height: 60px; */
        justify-content: flex-start;

        /* ${ props => {
            if (!props.isMain) {
                return css`
                `
            }
        } }; */

        img {
            width: auto !important;
            object-position: left;
            /* width: 100%;
            height: auto;
            max-width: 100%; */
        }
    }
`