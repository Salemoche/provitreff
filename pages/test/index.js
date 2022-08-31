import { useState } from 'react';

// Components
import LayoutComponent from '../../components/global/layout/layout.component';

// Data
import { apolloClient } from '../../lib/apolloClient';
import { GLOBAL_QUERY, MIETEN_QUERY } from '../../lib/queries';
import { useSnapshot } from 'valtio';
import { state } from '../../lib/state';

// Animation
import { motion } from 'framer-motion'
import { useSetGlobals } from '../../lib/hooks';
import TitleComponent from '../../components/global/title/title.component';
import { SectionStyles } from '../../styles/global.styles.components';
import { CalendarContainerStyles, DownloadsStyles, CalendarTitlesStyles } from '../../styles/modules/mieten/index.styles';
import { CalendarTitleStyles } from '../../styles/modules/mieten/index.styles';
import CalendarComponent from '../../components/rent/calendar.component';


const Mieten = ({ locale, content, global }) => {
    
	return (
        <div>
            <CalendarComponent calendar={ 'cultureCalendar' } />
        </div>
	)
}

export default Mieten;


export const getStaticProps = async(locale) => {

    let language = 'default'

    switch (locale.locale) {
        case 'en':
            language = 'english'
            break;
    }

    const contentData = await apolloClient.query({
        query: MIETEN_QUERY(),
        variables: {
            language: language
        }
    });

    const globalData = await apolloClient.query({
        query: GLOBAL_QUERY()
    });

    
    const content = contentData.data;
    const global = globalData.data;
    
    return {
        props: {
            locale,
            content,
            global
        }
    }
}  
