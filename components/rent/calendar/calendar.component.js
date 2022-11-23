import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { state } from '../../../lib/state';
import { CalendarEventStyles, MonthLayoutStyles, WeekLayoutStyles } from './calendar.styles';

// BS TODO
const weekStartHour = 3;

const getWeekDay = ( date, day ) => {
    // console.log(date)
    var targetDay = date.getDay() || 7;  
    if( targetDay !== day ) date.setHours(-24 * (targetDay - day)); 

    // console.log(date)
    return date;
}

const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

const MonthLayoutComponent = ({ locale, calendars, calendar, handleChangeMonth, handleTodayClick }) => {

    const month = calendar.currentMonth + 1;
    const year = calendar.currentYear;
    const store = useSnapshot(state);

    const parseCalendar = ( calendar ) => {
        // Transform Start and End Date and DateTime into Date

        if (!calendar) return null

        const parseStartDate = ( start ) => {
            if ( start.date ) return new Date( start.date );
            if ( start.dateTime ) return new Date( start.dateTime );
        }

        return (
            calendar?.items?.map( event => ({
                ...event,
                startDate: parseStartDate(event.start),
                endDate: parseStartDate(event.end)
            }) )
        )
    }

    const compareEventsToDates = ( calendar, day ) => {

        let isMatch

        if ( !calendar ) return false 

        calendar.forEach( event => {
            if ( event.startDate.getDate() == day && event.startDate.getMonth() + 1 == month && event.startDate.getFullYear() == year) {
                isMatch = true
            }
        });

        return isMatch;
    }

    const daysOfCurrentMonth = () => {

        const days = []

        for ( let i = 1; i <= calendar.lastDateOfMonth; i++ ){
            days.push(i)
        }

        return (
            days.map( ( day, i ) => {

                let isReserved = compareEventsToDates( parseCalendar(calendars.reserved), day)
                let isFixed = compareEventsToDates( parseCalendar(calendars.blocked), day) || compareEventsToDates( parseCalendar(calendars.fixed), day);
                // let isFixed = compareEventsToDates( parseCalendar(calendars.fixed), day);

                return (
                    <a 
                        key={`bs-calendar-day-current-${i}`} 
                        className={`bs-calendar-day bs-calendar-days-dates-item bs-calendar-days-dates-item-0${day} ${ isFixed && 'fixed' } ${ isReserved && 'reserved' }`}
                        day={ day }
                        month={ month }
                        year={ year }
                        href={ `mailto:${store.global.proviEmail}?subject=Reservation für den ${ day }. ${ calendar.names.de.months[month-1]} ${ year }&body=Hallo, ich würde gerne den Provitreff am ${ day }. ${ calendar.names.de.months[month-1]} ${ year } reservieren.` }
                    >
                        <span>{day < 10 && 0}{day}</span>
                    </a>
                )
            })
        )

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
        const totalDaysUntilNextMonth = daysOfCurrentMonth().length + daysOfLastMonth().length;
        const remainingDays = totalDaysUntilNextMonth > 35 ? 42 - totalDaysUntilNextMonth : 35 - totalDaysUntilNextMonth;

        for ( let i = 1 ; i <= remainingDays; i++ ){
            days.push(i);
        }
        return days
    }

    return(
        <MonthLayoutStyles>
            <div className="bs-calendar-header">
                <button className="bs-calendar-header-today-button" onClick={handleTodayClick}>{ locale == 'en' ? 'today' : 'heute'}</button>
                <div className="bs-calendar-header-button bs-calendar-header-button-prev"><button onClick={() => handleChangeMonth('prev')}>&lt;</button></div>
                <div className="bs-calendar-header-button bs-calendar-header-button-next"><button onClick={() => handleChangeMonth('next')}>&gt;</button></div>
                <h4>{ calendar.names[locale].months[calendar.currentMonth] } { calendar.currentYear }</h4>
            </div>
            <div className="bs-calendar-days">
                <div className="bs-calendar-days-heading">
                    { calendar.names[locale].days.map( ( day, i ) => <div key={`bs-calendar-day-${i}`} className="bs-calendar-day bs-calendar-days-heading-item"><span>{day}</span></div> ) }
                </div>
                <div className="bs-calendar-days-dates">
                    { daysOfLastMonth().map( ( day, i ) => (
                        <div 
                            key={`bs-calendar-day-prev-${i}`} 
                            className={`bs-calendar-day bs-calendar-days-dates-item-0${day} inactive`}
                            day={ day }
                            month={ calendar.currentMonth + 1 }
                            year={ calendar.currentYear }
                        >
                            <span>{day < 10 && 0}{day}</span>
                        </div>
                    ))}
                    { daysOfCurrentMonth() }
                    { daysOfNextMonth().map( ( day, i ) => (
                        <div 
                            key={`bs-calendar-day-next-${i}`} 
                            className={`bs-calendar-day bs-calendar-days-dates-item-0${day} inactive`}
                            day={ day }
                            month={ calendar.currentMonth + 1 }
                            year={ calendar.currentYear }
                        >
                            <span>{day < 10 && 0}{day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </MonthLayoutStyles>
    )
}


const WeekLayoutComponent = ({ locale, calendars, calendar, handleChangeMonth, handleTodayClick }) => {

    const monday = calendar.firstDayOfWeek;
    const sunday = calendar.lastDayOfWeek;

    console.log( calendars.fixed.items[0] )

    const scrollRef = useRef(null)

    useEffect(() => {
        const weekStartHourElement = document.querySelector(`.bs-hour-${weekStartHour}`);
        scrollRef.current.scroll({top: weekStartHourElement?.offsetTop})
    }, [scrollRef.current])
    
    const getDays = () => {
        let days = [];

        for ( let i = 0; i < 1; i++ ) {
            const currentDate = addDays(monday, i)
            days.push(currentDate)
        }

        return days;
    }

    const getDay = ( date, isMonday = false ) => {
        // console.log(events)

        let day = {
            hours: [],
            events: []  
        };
        
        calendars.fixed.items.forEach( event => {
            const start = new Date( event.start.dateTime );
            const end = new Date( event.end.dateTime );
            
            const isRightDate = (start.getDate() == date.getDate()) && (start.getMonth() == date.getMonth()) && (start.getFullYear() == date.getFullYear()) ;

            if ( isRightDate ) {
                console.log(start.getHours(), start.getMinutes(), '-', end.getHours(), end.getMinutes());
                day.events.push({
                    startHour: start.getHours(),
                    startMinute: start.getMinutes(),
                    endHour: end.getHours(),
                    endMinute: end.getMinutes(),
                })
            }
        });

        for ( let j = 0; j < 24; j++ ) {
            day.hours.push(j)
        }

        return (
            <div className="bs-calendar-day" key={`bs-calendar-${Math.random()}`}>
                {/* { day.hours.map( (hour, i) => (
                    <div className={`bs-calendar-day-hour bs-hour-${i}`} key={`bs-hour-${i}`} style={{ gridRow: `${1 + i*4} / span 4`}}>
                        { isMonday && `${i}:00`}
                    </div> 
                ))} */}
                { day.events.map( (event, i) => (
                    <div className={`bs-calendar-day-event bs-event-${i}`} key={`bs-event-${i}`} style={{ gridRow: getRowSpan(event) }}>
                        {event.startHour}
                    </div> 
                ))}
            </div>
        )
    }

    const getRowSpan = ( event ) => {
        const start = 1;
        const end = 10;
        return `${start} ${end}`;
    }

    return(
        <WeekLayoutStyles>
            <div className="bs-calendar-header">
                <button className="bs-calendar-header-today-button" onClick={handleTodayClick}>{ locale == 'en' ? 'today' : 'heute'}</button>
                <div className="bs-calendar-header-button bs-calendar-header-button-prev"><button onClick={() => handleChangeMonth('prev')}>&lt;</button></div>
                <div className="bs-calendar-header-button bs-calendar-header-button-next"><button onClick={() => handleChangeMonth('next')}>&gt;</button></div>
                <h4>{ monday.getDate() }.{ monday.getMonth() + 1 }.{ monday.getFullYear() } – { sunday.getDate() }.{ sunday.getMonth() + 1 }.{ sunday.getFullYear() }</h4>
            </div>
            <div className="bs-calendar-days">
                <div className="bs-calendar-days-heading bs-calendar-days-heading-day">
                    { calendar.names[locale].days.map( ( day, i ) => <div key={`bs-calendar-day-${i}`} className="bs-calendar-day bs-calendar-days-heading-item"><span>{day}</span></div> ) }
                </div>
                <div className="bs-calendar-days-heading bs-calendar-days-heading-date">
                    <div className="bs-calendar-day bs-calendar-days-heading-item bs-calendar-days-heading-item-date"> 00 </div>
                    <div className="bs-calendar-day bs-calendar-days-heading-item bs-calendar-days-heading-item-date"> 00 </div>
                    <div className="bs-calendar-day bs-calendar-days-heading-item bs-calendar-days-heading-item-date"> 00 </div>
                    <div className="bs-calendar-day bs-calendar-days-heading-item bs-calendar-days-heading-item-date"> 00 </div>
                    <div className="bs-calendar-day bs-calendar-days-heading-item bs-calendar-days-heading-item-date"> 00 </div>
                    <div className="bs-calendar-day bs-calendar-days-heading-item bs-calendar-days-heading-item-date"> 00 </div>
                    <div className="bs-calendar-day bs-calendar-days-heading-item bs-calendar-days-heading-item-date"> 00 </div>
                </div>
                <div className="bs-calendar-days-dates">
                    <div className="bs-calendar-scroll-container" ref={ scrollRef }>
                        { getDays().map(( day, i ) => (
                            getDay( day, i == 0)
                        )) }
                    </div>
                </div>
            </div>
        </WeekLayoutStyles>
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
        firstDayOfWeek: getWeekDay( new Date(), 1 ),
        lastDayOfWeek: getWeekDay( new Date(), 7 ),
    })

    const changeCalendarDate = ( direction ) => {
        
        let monday = calendar.firstDayOfWeek;
        let newMonday;
        let newMonth;
        let newYear;  

        if ( direction == 'next' ) {
            newMonth = calendar.currentMonth + 1 > 11 ? 0 : calendar.currentMonth + 1;
            newYear = calendar.currentMonth + 1 > 11 ? calendar.currentYear + 1 : calendar.currentYear;
            newMonday = new Date( monday.getFullYear(), monday.getMonth(), monday.getDate() + 7 )

        } else {
            newMonth = calendar.currentMonth - 1 < 0 ? 11 : calendar.currentMonth - 1;
            newYear = calendar.currentMonth - 1 < 0 ? calendar.currentYear - 1 : calendar.currentYear;
            newMonday = new Date( monday.getFullYear(), monday.getMonth(), monday.getDate() - 7 )
        }

        // console.log( monday )
        // console.log(getWeekDay( newMonday, 1 ))
        // console.warn(newMonday)
            
        return setCalendar( prev => { return ({
            ...prev,
            currentYear: newYear,
            currentMonth: newMonth,
            firstDayOfMonth: new Date( newYear, newMonth, 1 ).getDay(),
            lastDateOfMonth: new Date( newYear, newMonth + 1, 0 ).getDate(),
            lastDateOfLastMonth: new Date( newYear, newMonth, 0 ).getDate(),
            firstDayOfWeek: getWeekDay( newMonday, 1 ),
            lastDayOfWeek: getWeekDay( newMonday, 7 ),
        })} )
    }

    const changeToCurrentMonth = () => {
            
        return setCalendar( prev => { return ({
            ...prev,
            currentYear: date.getFullYear(),
            currentMonth: date.getMonth(),
            firstDayOfMonth: new Date( date.getFullYear(), date.getMonth(), 1 ).getDay(),
            lastDateOfMonth: new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate(),
            lastDateOfLastMonth: new Date( date.getFullYear(), date.getMonth(), 0 ).getDate(),
        })} )
    }

    const changeToCurrentWeek = () => {
            
        return setCalendar( prev => { return ({
            ...prev,
            currentYear: date.getFullYear(),
            currentMonth: date.getMonth(),
        })} )
    }
        
    useEffect(() => {
        // console.log(calendar)
    }, [])
        
    useEffect(() => {
        // console.log( calendars.fixed )
    }, [calendar])

    return (
        <motion.div
            className="provi-calendar provi-calendar-culture"    
        >
            { mode == 'month' && <MonthLayoutComponent calendars={ calendars } calendar={ calendar } locale={locale} handleChangeMonth={changeCalendarDate} handleTodayClick={ changeToCurrentMonth } /> }
            { mode == 'week' && <WeekLayoutComponent calendars={ calendars } calendar={ calendar } locale={locale} handleChangeMonth={changeCalendarDate} handleTodayClick={ changeToCurrentWeek } /> }
        </motion.div>
    )
}

export default CalendarComponent