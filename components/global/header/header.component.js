import React from 'react'
import { HeaderStyles } from './header.styles'
import TitleComponent from '../title/title.component';

function HeaderComponent() {
  return (
    <HeaderStyles>
        <TitleComponent url={''} />
        <nav>
            <ul>
                <li></li>
            </ul>
        </nav>
    </HeaderStyles>
  )
}

export default HeaderComponent