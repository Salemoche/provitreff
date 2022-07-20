import React from 'react'
import Head from 'next/head';

const MetaComponent = ( {title, description, imageUrl }) => {
    return (
        <Head>
            {/* <title>Provi Treff { !!title && `– ${ title }` }</title> */}
            <meta name="description" content={description} />
            <meta name="viewport" content= "width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="og:title" content={title}/>
            <meta name="og:site_name" content="Provi Treff" />
            <meta name="og:description" content={description} />
            <meta name="og:image" content={imageUrl} />
            <meta property="og:NEXT_PUBLIC_SITE_NAME" content="Provi Treff" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preload" href="/fonts/Rodger-Bold.otf" as="font" crossOrigin=""/>
            <link rel="preload" href="/fonts/Rodger-BoldItalic.woff" as="font" crossOrigin=""/>
        </Head>
    )
}

export default MetaComponent
