import React from 'react'
import { FooterStyles, LanguageSwitcherStyles } from './footer.styles'
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';
import Link from 'next/link';
import { useRouter } from 'next/router';

function FooterComponent() {

    const snap = useSnapshot( state );
    const global = snap.global;
    const router = useRouter();
    const locale = router.locale;

    return (
        <FooterStyles backgroundColor={ global?.colors?.current}>
            <div className="provi-footer-email">
                <a href={ global?.proviEmail }>{global?.proviEmail}</a>
            </div>
            <div className="provi-footer-address" dangerouslySetInnerHTML={{ __html: global?.proviAddress }}></div>
            <div className="provi-footer-language-switcher">
                <Link className="provi-de" href="" locale="de">
                    <LanguageSwitcherStyles currentLanguage={locale == "de"}>DE</LanguageSwitcherStyles>
                </Link>/
                <Link className="provi-en" href="" locale="en">
                    <LanguageSwitcherStyles currentLanguage={locale == "en"}>EN</LanguageSwitcherStyles>
                </Link>
            </div>
        </FooterStyles>
    )
}

export default FooterComponent