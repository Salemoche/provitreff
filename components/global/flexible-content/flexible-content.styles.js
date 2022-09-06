import styled from 'styled-components';
import { SectionStyles } from "../../../styles/global.styles.components";

export const ContentStyles = styled('div')`

    margin-bottom: ${ props => props.theme.sizes.M }px;

    h2 {
        margin-bottom: ${ props => props.theme.sizes.S }px;
    }
`