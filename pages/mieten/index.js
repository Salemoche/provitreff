import { useState } from 'react';
import dynamic from 'next/dynamic'

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
import { cleanHTML } from '../../lib/helpers';

// Components
import FlexibleContentComponent from '../../components/global/flexible-content/flexible-content.component';
import TitleComponent from '../../components/global/title/title.component';
import { SectionStyles } from '../../styles/global.styles.components';
import { CalendarContainerStyles, DownloadsStyles, CalendarTitlesStyles } from '../../styles/modules/mieten/index.styles';
import { CalendarTitleStyles } from '../../styles/modules/mieten/index.styles';


const CalendarComponent = dynamic( () => import('../../components/rent/calendar/calendar.component'),{
    ssr: false

});


const Mieten = ({ locale, content, global, calendars }) => {

    const snap = useSnapshot(state);
    useSetGlobals( global );
    
    const cultureCalendar = content?.rentEntries[0]?.cultureCalendar || '';
    const cultureTitle = content?.rentEntries[0]?.cultureTitle || '';
    const downloadTitleUrl = content?.rentEntries[0]?.downloadTitle[0]?.url || '';
    const downloadTitleUrlHover = content?.rentEntries[0]?.downloadTitleHover[0]?.url || '';
    const downloads = content?.rentEntries[0]?.downloads
    const infoContent = content?.rentEntries[0]?.infoContent || '';
    const infoTitleUrl = content?.rentEntries[0]?.infoTitle[0]?.url || '';
    const movementCalendar = content?.rentEntries[0]?.movementCalendar || '';
    const movementTitle = content?.rentEntries[0]?.movementTitle || '';
    const occupancyContent = content?.rentEntries[0]?.occupancyContent || '';
    const occupancyTitleUrl = content?.rentEntries[0]?.occupancyTitle[0]?.url || '';
    const occupancyTitleUrlHover = content?.rentEntries[0]?.occupancyTitleHover[0]?.url || '';
    // const termsContent = content?.rentEntries[0]?.termsContent || '';
    // const termsTitleUrl = content?.rentEntries[0]?.termsTitle[0]?.url || '';
    const flexibleContentRent1 = content?.rentEntries[0]?.flexibleContentRent1 || [];
    const flexibleContentRent2 = content?.rentEntries[0]?.flexibleContentRent2 || [];
    const reservedTitle = content?.rentEntries[0]?.reservedTitle || '';
    const freeTitle = content?.rentEntries[0]?.freeTitle || '';
    const occupiedTitle = content?.rentEntries[0]?.occupiedTitle || '';

    const [currentCalendar, setCurrentCalendar] = useState('culture')
    
	return (
        <motion.div
            key="provi-mieten"
            className="provi-page provi-home"
            initial={{ opacity: 0, backgroundColor: 'white' }}
            animate={{ opacity: 1, backgroundColor: snap?.global?.colors?.current || global?.colors?.colors[1] }}
            exit={{ opacity: 0 }}
        >
            <LayoutComponent>
                {/* <TitleComponent url={infoTitleUrl} id="info"/>
                <SectionStyles dangerouslySetInnerHTML={{__html: cleanHTML(infoContent) }}></SectionStyles>
                <SectionStyles dangerouslySetInnerHTML={{__html: cleanHTML(infoContent) }}></SectionStyles> */}
                <FlexibleContentComponent content={flexibleContentRent1} />
                <TitleComponent url={occupancyTitleUrl} hoverUrl={occupancyTitleUrlHover} id="occupancy"/>
                <br />
                <SectionStyles dangerouslySetInnerHTML={{__html: cleanHTML(occupancyContent) }}></SectionStyles>
                <br/><br/>
                <SectionStyles>
                    <CalendarTitlesStyles>
                        <CalendarTitleStyles className="provi-calendar-title-culture" active={ currentCalendar == 'culture' } onClick={ () => setCurrentCalendar('culture') }>{ cultureTitle }</CalendarTitleStyles> 
                        / 
                        <CalendarTitleStyles className="provi-calendar-title-movement" active={ currentCalendar == 'movement' } onClick={ () => setCurrentCalendar('movement') }>{ movementTitle }</CalendarTitleStyles>
                    </CalendarTitlesStyles>
                    <CalendarContainerStyles>
                        <div className="provi-calendar-container">
                            { currentCalendar == 'culture' ?
                                <CalendarComponent calendars={{ reserved: calendars.calendarCultureReserved, fixed: calendars.calendarCultureFixed }} locale={locale} mode="month"/>
                            :
                                <CalendarComponent calendars={{ reserved: calendars.calendarMovementReserved, fixed: calendars.calendarMovementFixed }} locale={locale} mode="week"/>
                            }
                        </div>
                        <div className="provi-calendar-tooltips">
                            <div className="provi-calendar-tooltips__title"> Tooltips </div>
                            <div className="provi-calendar-tooltip reserved"> { reservedTitle } </div>
                            <div className="provi-calendar-tooltip free"> { freeTitle } </div>
                            <div className="provi-calendar-tooltip occupied"> { occupiedTitle } </div>
                        </div>
                    </CalendarContainerStyles>
                </SectionStyles>
                <br/><br/>
                {/* <TitleComponent url={termsTitleUrl} id="terms"/>
                <SectionStyles dangerouslySetInnerHTML={{__html: cleanHTML(termsContent) }}></SectionStyles> */}
                <FlexibleContentComponent content={flexibleContentRent2} />
                <TitleComponent url={downloadTitleUrl} hoverUrl={downloadTitleUrlHover} id="download"/>
                <br />
                <DownloadsStyles>
                    { downloads.map( ( download, i ) => (
                        <a className="provi-hover-text" href={download?.downloadFile[0]?.url} key={`download-{i}`} download>{ download?.downloadName }</a>
                    ))}
                </DownloadsStyles>
            </LayoutComponent>
        </motion.div>
	)
}

export default Mieten;


// export const getStaticProps = async(locale) => {

//     let language = 'default'

//     switch (locale.locale) {
//         case 'en':
//             language = 'english'
//             break;
//     }

//     const contentData = await apolloClient.query({
//         query: MIETEN_QUERY(),
//         variables: {
//             language: language
//         }
//     });

//     const globalData = await apolloClient.query({
//         query: GLOBAL_QUERY()
//     });

    
//     const content = contentData.data;
//     const global = globalData.data;
    
//     return {
//         props: {
//             locale,
//             content,
//             global
//         }
//     }
// } 

const fetchCalendar = async ( id, apiKey ) => {

    const url = `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${apiKey}`;

    const response = await fetch(
        url,
        {
            method: 'GET'
        }
    )

    const data = await response.json();
    return data
}


export async function getServerSideProps(context) {

    const calendarCultureReserved = await fetchCalendar( process.env.NEXT_CAL_ID_CULTURE_RESERVED, process.env.NEXT_CAL_API );
    const calendarCultureFixed = await fetchCalendar( process.env.NEXT_CAL_ID_CULTURE_FIXED, process.env.NEXT_CAL_API );
    const calendarMovementReserved = await fetchCalendar( process.env.NEXT_CAL_ID_MOVEMENT_RESERVED, process.env.NEXT_CAL_API );
    const calendarMovementFixed = await fetchCalendar( process.env.NEXT_CAL_ID_MOVEMENT_FIXED, process.env.NEXT_CAL_API );

    let language = 'default'

    switch (context.locale) {
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
            locale: context.locale,
            content,
            global,
            calendars: {
                calendarCultureReserved,
                calendarCultureFixed,
                calendarMovementReserved,
                calendarMovementFixed,
            }
        }
    }
}
