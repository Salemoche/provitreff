import React from 'react'
import { motion } from 'framer-motion';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar' // a plugin!



const CalendarComponent = ({ calendar }) => {
  return (
    <motion.div
        className="provi-calendar provi-calendar-culture"
    >
        {/* <div dangerouslySetInnerHTML={{ __html: calendar }}></div> */}

        <FullCalendar
            plugins={[ dayGridPlugin, googleCalendarPlugin ]}
            googleCalendarApiKey='AIzaSyCG2fd5-5bIw70I0Kk__iwE_51kNY5UIsU'
            events={{ googleCalendarId: 'samuel.serwart@gmail.com'}}
            initialView="dayGridMonth"
        />
    </motion.div>
  )
}

export default CalendarComponent