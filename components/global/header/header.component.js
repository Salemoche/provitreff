import React from 'react'
import { HeaderStyles, MenuItemStyles } from './header.styles'
import TitleComponent from '../title/title.component';
import { Link } from 'next/link';
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';
import { useRouter } from 'next/router';

function HeaderComponent() {
    const snap = useSnapshot(state);
    const router = useRouter();
    const locale = router.locale;

    return (
        <HeaderStyles backgroundColor={snap?.global?.colors?.current}>
            <TitleComponent url={snap?.global?.proviLogo} />
            <nav>
                { locale === 'en' ?
                
                    <ul>
                        <li>
                            <MenuItemStyles href="/en" currentMenuItem={router.pathname == "/"}>Current</MenuItemStyles>
                        </li>
                        <li>
                            <MenuItemStyles href="/en/mieten" currentMenuItem={router.pathname == "/mieten"}>Rent</MenuItemStyles>
                        </li>
                        <li>
                            <MenuItemStyles href="/en/provi" currentMenuItem={router.pathname == "/provi"}>Provi</MenuItemStyles>
                        </li>
                    </ul>
                :

                <ul>
                    <li>
                        <MenuItemStyles href="/" currentMenuItem={router.pathname == "/"}>Aktuell</MenuItemStyles>
                    </li>
                    <li>
                        <MenuItemStyles href="/mieten" currentMenuItem={router.pathname == "/mieten"}>Mieten</MenuItemStyles>
                    </li>
                    <li>
                        <MenuItemStyles href="/provi" currentMenuItem={router.pathname == "/provi"}>Provi</MenuItemStyles>
                    </li>
                </ul>
                }
            </nav>
        </HeaderStyles>
    )
}

export default HeaderComponent