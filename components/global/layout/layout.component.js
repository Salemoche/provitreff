import React from 'react'
import MetaComponent from '../meta/meta.component';
import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';
import { ContentStyles } from '../../../styles/global.styles.components';

const LayoutComponent = ({ children }) => {
    return (
        <>
            <MetaComponent title={'Provitreff'} description={ 'description' } imageUrl={ 'imageUrl' } />
            <HeaderComponent/>
            <main ref={ null } className="">
                <ContentStyles className="provi-content">
                { children }
                </ContentStyles>
            </main>
            <FooterComponent/>

        </>
    )
}

export default LayoutComponent
