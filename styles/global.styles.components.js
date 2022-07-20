import styled from 'styled-components';

export const ContentStyles = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 240px;

    > * {
        max-width: ${props => props.theme.sizes.contentWidth}px;

        &.provi-title {
            max-width: unset;
        }
    }
`