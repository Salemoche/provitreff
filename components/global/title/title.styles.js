import styled from "styled-components";

export const TitleStyles = styled('div')`
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    height: 90px;
    margin-bottom: ${ props => props.theme.sizes.M }px
`