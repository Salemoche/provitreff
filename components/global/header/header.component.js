import React, { useState } from 'react'
import { HeaderStyles, MenuItemStyles, BurgerStyles } from './header.styles'
import TitleComponent from '../title/title.component';
import { Link } from 'next/link';
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';
import { useRouter } from 'next/router';

function HeaderComponent() {
    const snap = useSnapshot(state);
    const router = useRouter();
    const locale = router.locale;
    const global = snap.global;

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderStyles backgroundColor={snap?.global?.colors?.current} active={menuOpen}>
            <TitleComponent url={snap?.global?.proviLogo} hoverUrl={snap?.global?.proviLogoHover} link={`/${locale}`} isMain={true} />
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
                <div className="provi-navigation-info">
                    <a href={ global?.proviEmail }>{global?.proviEmail}</a>
                    <div dangerouslySetInnerHTML={{ __html: global?.proviAddress }}></div>
                </div>
            </nav>
            <BurgerStyles onClick={() => { setMenuOpen(!menuOpen) }}>
                <img src="/assets/img/burger.svg" alt="" />
            </BurgerStyles>
        </HeaderStyles>
    )
}

export default HeaderComponent