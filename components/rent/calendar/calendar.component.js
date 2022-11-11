import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';
import { CalendarEventStyles, MonthLayoutStyles, WeekLayoutStyles } from './calendar.styles';

const MonthLayoutComponent = ({ locale, calendars, calendar, handleChangeMonth }) => {

    const daysOfMonth = () => {

        const days = []

        for ( let i = 1; i <= calendar.lastDateOfMonth; i++ ){
            days.push(i)
        }

        return days
    }

    const daysOfLastMonth = () => {
        
        const days = []
        
        for ( let i = calendar.firstDayOfMonth - 1 ; i > 0; i-- ){
            days.push(calendar.lastDateOfLastMonth + 1 - i);
        }
        return days
    }

    const daysOfNextMonth = () => {

        const days = []
        const remainingDays = 35 - (daysOfMonth().length + daysOfLastMonth().length);

        for ( let i = 1 ; i <= remainingDays; i++ ){
            days.push(i);
        }
        return days
    }

    return(
        <MonthLayoutStyles>
            <div className="bs-calendar-header">
                <h4>{ calendar.names[locale].months[calendar.currentMonth] } { calendar.currentYear }</h4>
                <div className="bs-calendar-header-button bs-calendar-header-button-prev" onClick={() => handleChangeMonth('prev')}></div>
                <div className="bs-calendar-header-button bs-calendar-header-button-next" onClick={() => handleChangeMonth('next')}></div>
            </div>
            <div className="bs-calendar-days">
                <div className="bs-calendar-days-heading">
                    { calendar.names[locale].days.map( day => <div className="bs-calendar-day bs-calendar-days-heading-item"><span>{day}</span></div> ) }
                </div>
                <div className="bs-calendar-days-dates">
                    { daysOfLastMonth().map( ( day, i ) => (
                        <div key={`bs-calendar-day-prev-${i}`} className={`bs-calendar-day bs-calendar-days-dates-item-0${day} inactive`}>
                            <span>{day < 10 && 0}{day}</span>
                        </div>
                    ))}
                    { daysOfMonth().map( ( day, i ) => (
                        <div key={`bs-calendar-day-current-${i}`} className={`bs-calendar-day bs-calendar-days-dates-item-0${day}`}>
                            <span>{day < 10 && 0}{day}</span>
                        </div>
                    ))}
                    { daysOfNextMonth().map( ( day, i ) => (
                        <div key={`bs-calendar-day-next-${i}`} className={`bs-calendar-day bs-calendar-days-dates-item-0${day} inactive`}>
                            <span>{day < 10 && 0}{day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </MonthLayoutStyles>
    )
}


const WeekLayoutComponent = ({ calendars, calendar }) => {

    return(
        <WeekLayoutStyles>Week Layout</WeekLayoutStyles>
    )
}

const CalendarComponent = ({ calendars, mode, locale }) => {

    
    const date = new Date();
    const [calendar, setCalendar] = useState({
        names: {
            en: {
                days: [
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat',
                    'Sun',
                ],
                months: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ]
            },
            de: {
                days: [
                    'Mo',
                    'Di',
                    'Mi',
                    'Do',
                    'Fr',
                    'Sa',
                    'So',
                ],
                months: [
                    'Januar',
                    'Februar',
                    'März',
                    'April',
                    'Mai',
                    'Juni',
                    'Juli',
                    'August',
                    'September',
                    'Oktober',
                    'November',
                    'Dezember',
                ]
            }
        },
        currentYear: date.getFullYear(),
        currentMonth: date.getMonth(),
        firstDayOfMonth: new Date( date.getFullYear(), date.getMonth(), 1 ).getDay(),
        lastDateOfMonth: new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate(),
        lastDateOfLastMonth: new Date( date.getFullYear(), date.getMonth(), 0 ).getDate(),
    })

    const changeMonth = ( direction ) => {
        
        let newMonth
        let newYear   

        if ( direction == 'next' ) {
            newMonth = calendar.currentMonth + 1 > 11 ? 0 : calendar.currentMonth + 1;
            newYear = calendar.currentMonth + 1 > 11 ? calendar.currentYear + 1 : calendar.currentYear;

        } else {
            newMonth = calendar.currentMonth - 1 < 0 ? 12 : calendar.currentMonth - 1;
            newYear = calendar.currentMonth - 1 < 0 ? calendar.currentYear - 1 : calendar.currentYear;
        }
            
        return setCalendar( prev => { return ({
            ...prev,
            currentYear: newYear,
            currentMonth: newMonth,
            firstDayOfMonth: new Date( newYear, newMonth, 1 ).getDay(),
            lastDateOfMonth: new Date( newYear, newMonth + 1, 0 ).getDate(),
            lastDateOfLastMonth: new Date( newYear, newMonth, 0 ).getDate(),
        })} )

        // return setCalendar( prev => {({
        //     ...prev,
        //     lastDateOfMonth: new Date( prev.currentYear, prev.currentMonth, 0 ).getDate()
        // })} )
    }
        
    useEffect(() => {
        // console.log(calendar)
    }, [])
        
    useEffect(() => {
        console.log( calendar.lastDayOfMonth )
    }, [calendar])

    return (
        <motion.div
            className="provi-calendar provi-calendar-culture"    
        >
            { mode == 'month' ? 
                <MonthLayoutComponent calendars={ calendars } calendar={ calendar } locale={locale} handleChangeMonth={changeMonth} />
            :
                <WeekLayoutComponent calendars={ calendars } calendar={ calendar } locale={locale} handleChangeMonth={changeMonth} />
            }
        </motion.div>
    )
}

export default CalendarComponent