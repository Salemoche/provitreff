import styled, { css } from "styled-components";
import { getFontSize } from "../../../lib/helpers";

export const HeaderStyles = styled('header')`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${ props => props.backgroundColor };
    padding:  ${ props => props.theme.sizes.S }px;

    nav {
        width: ${ props => props.theme.sizes.contentWidth }px;
        max-width: 100%;
        ${ props => getFontSize( 'L', props )};
        
        ul {
            display: flex;
            justify-content: space-between;
        }
    }

`

export const MenuItemStyles = styled('a')`

    text-transform: uppercase;

    ${ props => {
        if (props.currentMenuItem) {
            return css`
                color: transparent;
                -webkit-text-stroke: 2px black;
                text-stroke: 2px black;
            `
        }
    } };
`