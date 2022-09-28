import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar' // a plugin!
import deLocale from '@fullcalendar/core/locales/de'
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';
import { CalendarEventStyles } from './calendar.styles';

const CalendarComponent = ({ calendarId, locale }) => {
        
    const calendarRef = useRef();

    const calculateRowHeight = () => {
        const calendarRows = calendarRef.current.querySelector('.fc-scrollgrid-section-body').querySelectorAll('tr');

        calendarRows.forEach(row => {
            // Set To 3/2 Ratio
            row.style.height = row.offsetWidth / 10.5 + 'px';
        });
    }

    useEffect(() => {
        calculateRowHeight();
    }, [ calendarRef.current ])

    useEffect(() => {
        window.addEventListener('resize', calculateRowHeight)
        return () => {
            window.removeEventListener('resize', calculateRowHeight)  
        }
    }, [])
    

    const renderEventContent = (eventInfo) => {
        const description = eventInfo.event.extendedProps.description;
        let isReserved = false;

        if ( description?.match(/res/gi)) {
            isReserved = true;
        }

        return (
            <CalendarEventStyles isReserved={isReserved} className="provi-event-content">{ /*isReserved ? 'o' : 'x'*/ }</CalendarEventStyles>
        )
    }

    return (
        <motion.div
            className="provi-calendar provi-calendar-culture"                
            ref={ calendarRef }
        >
            {/* <div dangerouslySetInnerHTML={{ __html: calendar }}></div> */}

            <FullCalendar
                plugins={[ dayGridPlugin, googleCalendarPlugin ]}
                googleCalendarApiKey='AIzaSyCG2fd5-5bIw70I0Kk__iwE_51kNY5UIsU'
                events={{ googleCalendarId: calendarId }}
                initialView="dayGridMonth"
                height='auto'
                locales={[ deLocale ]}
                locale={ locale.locale }
                eventContent={ renderEventContent }
            />
        </motion.div>
    )
}

export default CalendarComponent