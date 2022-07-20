import React from 'react'
import { FooterStyles } from './footer.styles'
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';

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
                <div className="provi-de" onClick={() => changeLanguage('de')}>DE</div>/
                <div className="provi-en" onClick={() => changeLanguage('en')}>EN</div>
            </div>
        </FooterStyles>
    )
}

export default FooterComponent