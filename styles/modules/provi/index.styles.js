import styled from 'styled-components';
import { getFontSize } from '../../../lib/helpers';
import { SectionStyles } from "../../global.styles.components";

export const ContactStyles = styled(SectionStyles)`
    text-align: center;

    p {
        margin-bottom: 0;
    }

    a {

        transition: .1s;

        &:hover {
            color: transparent;
            -webkit-text-stroke: 2px black;
            text-stroke: 2px black;
            font-weight: 300;
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.L }px) {
        text-align: left;
    }
`