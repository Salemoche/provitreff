import React from 'react'
import { HeaderStyles } from './header.styles'
import TitleComponent from '../title/title.component';
import { Link } from 'next/link';
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';

function HeaderComponent() {
    const snap = useSnapshot(state);

    console.log(state.global.provitreffLogo)
    return (
        <HeaderStyles>
            <TitleComponent url={state.global.proviLogo} />
            <nav>
                <ul>
                    {/* <li>
                        <Link href="/aktuell">Aktuell</Link>
                    </li>
                    <li>
                        <Link href="/mieten">Mieten</Link>
                    </li>
                    <li>
                        <Link href="/provi">Provi</Link>
                    </li> */}
                </ul>
            </nav>
        </HeaderStyles>
    )
}

export default HeaderComponent