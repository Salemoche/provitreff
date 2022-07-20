import styled from 'styled-components';

export const ContentStyles = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
    padding-bottom: ${ props => props.theme.sizes.L }px;
    

    > * {
        max-width: 100%;
        width: ${props => props.theme.sizes.contentWidth}px;

        &.provi-title {
            width: 100%;
        }
    }
`

export const SectionStyles = styled('div')`
    margin-bottom: ${ props => props.theme.sizes.M }px
`