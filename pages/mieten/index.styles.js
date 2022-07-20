import styled from 'styled-components';
import { getFontSize } from '../../lib/helpers';
import { SectionStyles } from "../../styles/global.styles.components";

export const DownloadsStyles = styled(SectionStyles)`
    text-align: center;
    ${ props => getFontSize( 'L', props )};
`