import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';
import { CalendarEventStyles } from './calendar.styles';

const CalendarComponent = ({ calendars, locale, calendarData }) => {

    // const [calendarData, setCalendarData] = useState(null)


    // const getCalendarData = async () => {

    //     const url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_CAL_ID}/events?key=${process.env.NEXT_CAL_API}`;

    //     const response = await fetch(
    //         url,
    //         {
    //             method: 'GET'
    //         }
    //     )

    //     const data = await response.json();
    //     setCalendarData(data)
    // }
        
    useEffect(() => {
        // getCalendarData()
        console.log(calendars)
    }, [])
        
    // useEffect(() => {
    //     console.log(calendarData, process.env.NEXT_CAL_ID)
    // }, [calendarData])

    return (
        <motion.div
            className="provi-calendar provi-calendar-culture"    
        >
            This is the new calendar!
        </motion.div>
    )
}

export default CalendarComponent