import { useState } from 'react';

// Components
import LayoutComponent from '../../components/global/layout/layout.component';

// Data
import { apolloClient } from '../../lib/apolloClient';
import { GLOBAL_QUERY, MIETEN_QUERY } from '../../lib/queries';
import { useSnapshot } from 'valtio';
import { state } from '../../lib/state';

// Animation
import { useSetGlobals } from '../../lib/hooks';
import CalendarComponent from '../../components/rent/calendar.component';


const Mieten = ({ locale, content, global }) => {

    const snap = useSnapshot(state);
    useSetGlobals( global );
    
    const cultureCalendar = content?.rentEntries[0]?.cultureCalendar || '';
    
	return (
        <>                                
            <CalendarComponent calendarId={ cultureCalendar } />
        </>
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
