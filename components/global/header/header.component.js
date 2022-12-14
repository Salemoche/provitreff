import React, { useState, useEffect } from 'react'
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
    const [isMobile, setIsMobile] = useState()

    const handleResize = () => {
        if ( window.innerWidth < 768 ) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        
        handleResize()
        window.addEventListener( 'resize', handleResize )
        
        return () => {
            window.removeEventListener( 'resize', handleResize )
        }
    }, [])
    

    return (
        <HeaderStyles backgroundColor={snap?.global?.colors?.current} active={menuOpen}>
            <TitleComponent url={ isMobile ? snap?.global?.proviLogoBurger : snap?.global?.proviLogo } hoverUrl={snap?.global?.proviLogoHover} link={`/${locale}`} isMain={true} />
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
                                <LanguageSwitcherStyles className="provi-hover-text" onClick={() => setMenuOpen(false)} currentLanguage={locale == "de"}>DE</LanguageSwitcherStyles>
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
                            <LanguageSwitcherStyles className="provi-hover-text" onClick={() => setMenuOpen(false)} currentLanguage={locale == "en"}>EN</LanguageSwitcherStyles>
                        </Link>
                    </li>
                </ul>
                } 
                <div className="provi-navigation-info">
                    <div className="provi-address" dangerouslySetInnerHTML={{ __html: global?.proviAddress }}></div>
                    {global?.proviNumber && <a className="provi-number" href={`tel:${ global?.proviNumber }`}>{ global?.proviNumber }</a>}
                    <a className="provi-email" href={ global?.proviEmail }>{global?.proviEmail}</a>
                </div>
            </nav>
            <BurgerStyles onClick={() => { setMenuOpen(!menuOpen) }}>
                {/* <img src="/assets/img/burger.svg" alt="" /> */}
            </BurgerStyles>
        </HeaderStyles>
    )
}

export default HeaderComponent