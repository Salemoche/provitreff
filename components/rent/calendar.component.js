import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar' // a plugin!
import deLocale from '@fullcalendar/core/locales/de'
import { useSnapshot } from 'valtio';
import { state } from '../../lib/state';


const CalendarComponent = ({ calendarId, locale }) => {
        
    const calendarRef = useRef();

    useEffect(() => {
        // const days = document.querySelectorAll('td');
        // days.forEach( (day, i) => {
        //     console.log(day.querySelector('.fc-event-title'))

        //     if ( day.querySelector('.fc-event-title')?.innerHTML?.toLowerCase() == 'res' ) {
        //         day.style.background = 'green';
        //         console.log(day.querySelector('.fc-event-title'))
        //     }
        // });

    }, [ calendarRef.current ])

    return (
        <motion.div
            className="provi-calendar provi-calendar-culture"
        >
            {/* <div dangerouslySetInnerHTML={{ __html: calendar }}></div> */}

            <FullCalendar                
                ref={ calendarRef }
                plugins={[ dayGridPlugin, googleCalendarPlugin ]}
                googleCalendarApiKey='AIzaSyCG2fd5-5bIw70I0Kk__iwE_51kNY5UIsU'
                events={{ googleCalendarId: calendarId }}
                initialView="dayGridMonth"
                height='auto'
                locales={[ deLocale ]}
                locale={ locale.locale }
            />
        </motion.div>
    )
}

export default CalendarComponent