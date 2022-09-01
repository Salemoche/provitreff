import styled from 'styled-components';

export const ContentStyles = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${ props => props.theme.sizes.navPadding }px;
    padding-bottom: ${ props => props.theme.sizes.L }px;
    

    > * {
        max-width: 100%;
        width: ${props => props.theme.sizes.contentWidth}px;

        &.provi-title {
            width: 100%;
        }
    }


    @media screen and ( max-width: ${ props => props.theme.breakpoints.L }px) {
        padding-left: ${ props => props.theme.sizes.L }px;
        padding-right: ${ props => props.theme.sizes.L }px;
        width: unset;
        max-width: 100%;

        > * {
            width: 100%;
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        padding-left: ${ props => props.theme.sizes.S }px;
        padding-right: ${ props => props.theme.sizes.S }px;
        padding-top: ${ props => props.theme.sizes.navPaddingMedium }px;
    }
`

export const SectionStyles = styled('div')`
    margin-bottom: ${ props => props.theme.sizes.M }px
`