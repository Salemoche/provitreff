import React from 'react'
import { motion } from 'framer-motion';



const CalendarComponent = ({ calendar }) => {
  return (
    <motion.div
        className="provi-calendar provi-calendar-culture"
    >
        <div dangerouslySetInnerHTML={{ __html: calendar }}></div>
    </motion.div>
  )
}

export default CalendarComponent