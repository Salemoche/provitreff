import React, { useState } from 'react'
import { HeaderStyles, MenuItemStyles, BurgerStyles } from './header.styles'
import TitleComponent from '../title/title.component';
import Link from 'next/link';
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';
import { useRouter } from 'next/router';
import { LanguageSwitcherStyles } from '../footer/footer.styles';

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
                            <MenuItemStyles href="/en" currentMenuItem={router.pathname == "/"}>{snap.pages.aktuell.titel[locale]}</MenuItemStyles>
                        </li>
                        <li>
                            <MenuItemStyles href="/en/mieten" currentMenuItem={router.pathname == "/mieten"}>{snap.pages.mieten.titel[locale]}</MenuItemStyles>
                        </li>
                        <li>
                            <MenuItemStyles href="/en/provi" currentMenuItem={router.pathname == "/provi"}>{snap.pages.provi.titel[locale]}</MenuItemStyles>
                        </li>
                        <li className="provi-navigation-language-switcher">
                            <Link className="provi-de" href="" locale="de">
                                <LanguageSwitcherStyles className="provi-hover-text" currentLanguage={locale == "de"}>DE</LanguageSwitcherStyles>
                            </Link>
                        </li>
                    </ul>
                :

                <ul>
                    <li>
                        <MenuItemStyles href="/" currentMenuItem={router.pathname == "/"}>{snap.pages.aktuell.titel[locale]}</MenuItemStyles>
                    </li>
                    <li>
                        <MenuItemStyles href="/mieten" currentMenuItem={router.pathname == "/mieten"}>{snap.pages.mieten.titel[locale]}</MenuItemStyles>
                    </li>
                    <li>
                        <MenuItemStyles href="/provi" currentMenuItem={router.pathname == "/provi"}>{snap.pages.provi.titel[locale]}</MenuItemStyles>
                    </li>
                    <li className="provi-navigation-language-switcher">
                        <Link className="provi-en" href="" locale="en">
                            <LanguageSwitcherStyles className="provi-hover-text" currentLanguage={locale == "en"}>EN</LanguageSwitcherStyles>
                        </Link>
                    </li>
                </ul>
                } 
                <div className="provi-navigation-info">
                    <div className="provi-address" dangerouslySetInnerHTML={{ __html: global?.proviAddress }}></div>
                    {global?.proviNumber && <div className="provi-number">{ global?.proviNumber }</div>}
                    <a className="provi-email" href={ global?.proviEmail }>{global?.proviEmail}</a>
                </div>
            </nav>
            <BurgerStyles onClick={() => { setMenuOpen(!menuOpen) }}>
                <img src="/assets/img/burger.svg" alt="" />
            </BurgerStyles>
        </HeaderStyles>
    )
}

export default HeaderComponent