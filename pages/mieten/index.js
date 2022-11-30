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

// SM TODO
const CalendarComponent = dynamic( () => import('../../components/rent/calendar/calendar.component'),{
    ssr: false

});


const Mieten = ({ locale, content, global, calendars }) => {

    const snap = useSnapshot(state);
    useSetGlobals( global );
    
    const cultureTitle = content?.rentEntries[0]?.cultureTitle || '';
    const downloadTitleUrl = content?.rentEntries[0]?.downloadTitle[0]?.url || '';
    const downloadTitleUrlHover = content?.rentEntries[0]?.downloadTitleHover[0]?.url || '';
    const downloadsCulture = content?.rentEntries[0]?.downloadsCulture;
    const downloadsMovement = content?.rentEntries[0]?.downloadsMovement;
    const movementTitle = content?.rentEntries[0]?.movementTitle || '';
    const occupancyContent = content?.rentEntries[0]?.occupancyContent || '';
    const occupancyTitleUrl = content?.rentEntries[0]?.occupancyTitle[0]?.url || '';
    const occupancyTitleUrlHover = content?.rentEntries[0]?.occupancyTitleHover[0]?.url || '';
    const flexibleContentRent1 = content?.rentEntries[0]?.flexibleContentRent1 || [];
    const flexibleContentRentCulture = content?.rentEntries[0]?.flexibleContentRentCulture || [];
    const flexibleContentRentMovement = content?.rentEntries[0]?.flexibleContentRentMovement || [];
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
                <br/>
                <SectionStyles>
                    <CalendarTitlesStyles>
                        <CalendarTitleStyles className="provi-calendar-title-culture" active={ currentCalendar == 'culture' } onClick={ () => setCurrentCalendar('culture') }>{ cultureTitle }</CalendarTitleStyles> 
                        <span>/</span>
                        <CalendarTitleStyles className="provi-calendar-title-movement" active={ currentCalendar == 'movement' } onClick={ () => setCurrentCalendar('movement') }>{ movementTitle }</CalendarTitleStyles>
                    </CalendarTitlesStyles>
                    <CalendarContainerStyles>
                        <div className="provi-calendar-container">
                            { currentCalendar == 'culture' ?
                                <CalendarComponent calendars={{ reserved: calendars.calendarCultureReserved, fixed: calendars.calendarCultureFixed, blocked: calendars.calendarCultureBlocked }} locale={locale} mode="month"/>
                            :
                                <CalendarComponent calendars={{ reserved: calendars.calendarMovementReserved, fixed: calendars.calendarMovementFixed }} locale={locale} mode="week"/>
                            }
                        </div>
                        <div className="provi-calendar-tooltips">
                            <div className="provi-calendar-tooltip free"> { freeTitle } </div>
                            <div className="provi-calendar-tooltip reserved"> { reservedTitle } </div>
                            <div className="provi-calendar-tooltip occupied"> { occupiedTitle } </div>
                        </div>
                    </CalendarContainerStyles>
                </SectionStyles>
                <br/><br/>
                {/* <TitleComponent url={termsTitleUrl} id="terms"/>
                <SectionStyles dangerouslySetInnerHTML={{__html: cleanHTML(termsContent) }}></SectionStyles> */}
                <FlexibleContentComponent content={ currentCalendar === 'culture' ? flexibleContentRentCulture : flexibleContentRentMovement } />
                <TitleComponent url={downloadTitleUrl} hoverUrl={downloadTitleUrlHover} id="download"/>
                <br />
                <DownloadsStyles>
                    { currentCalendar === 'culture' && downloadsCulture.map( ( download, i ) => (
                        <a className="provi-hover-text" href={download?.downloadFile[0]?.url} key={`download-{i}`} download>{ download?.downloadName }</a>
                    ))}
                    { currentCalendar === 'movement' && downloadsMovement.map( ( download, i ) => (
                        <a className="provi-hover-text" href={download?.downloadFile[0]?.url} key={`download-{i}`} download>{ download?.downloadName }</a>
                    ))}
                </DownloadsStyles>
                <br/><br/>
            </LayoutComponent>
        </motion.div>
	)
}

export default Mieten;

const fetchCalendar = async ( id, apiKey ) => {

    const lastDayOfLastYear = new Date(new Date().getFullYear(), 0, 1).toISOString();
    const lastDayOfNextYear = new Date(new Date().getFullYear() + 2 , 0, 1).toISOString();
    // const lastDayOfLastYear = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 7).toISOString(); // A week ago
    // const lastDayOfNextYear = new Date().toISOString(); // Today

    const url = `https://www.googleapis.com/calendar/v3/calendars/${id}/events?maxResults=2500&timeMin=${lastDayOfLastYear}&timeMax=${lastDayOfNextYear}&key=${apiKey}`;

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
    const calendarMovementReserved = await fetchCalendar( process.env.NEXT_CAL_ID_MOVEMENT_ESERVED, process.env.NEXT_CAL_API );
    const calendarMovementFixed = await fetchCalendar( process.env.NEXT_CAL_ID_MOVEMENT_FIXED, process.env.NEXT_CAL_API );
    const calendarCultureBlocked = await fetchCalendar( process.env.NEXT_CAL_ID_CULTURE_BLOCKED, process.env.NEXT_CAL_API );

    console.log(calendarCultureBlocked)

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
                calendarCultureBlocked,
            }
        }
    }
}
