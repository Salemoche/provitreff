import React from 'react'
import { FooterStyles } from './footer.styles'
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';
import Link from 'next/link';

function FooterComponent() {

    const snap = useSnapshot( state );
    const global = snap.global

    const changeLanguage = ( language ) => {
    }

    return (
        <FooterStyles>
            <div className="provi-footer-email">
                <a href={ global?.proviEmail }>{global?.proviEmail}</a>
            </div>
            <div className="provi-footer-address" dangerouslySetInnerHTML={{ __html: global?.proviAddress }}></div>
            <div className="provi-footer-language-switcher">
                <Link className="provi-de" href="" locale="de">DE</Link>/
                <Link className="provi-en" href="" locale="en">EN</Link>
            </div>
        </FooterStyles>
    )
}

export default FooterComponent