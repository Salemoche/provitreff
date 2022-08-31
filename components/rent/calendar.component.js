import React from 'react'
import { motion } from 'framer-motion';
import Calendar from "/lib/react-google-calendar/src";


const CalendarComponent = ({ calendar }) => {

    const calendars = [
        { 
            calendarId: "samuel.serwart@gmail.com",
        }
    ]

  return (
    <motion.div
        className="provi-calendar provi-calendar-culture"
    >
        {/* <div dangerouslySetInnerHTML={{ __html: calendar }}></div> */}
        <Calendar apiKey="AIzaSyCG2fd5-5bIw70I0Kk__iwE_51kNY5UIsU" calendars={calendars} language="DE" showFooter={false} />
    </motion.div>
  )
}

export default CalendarComponent