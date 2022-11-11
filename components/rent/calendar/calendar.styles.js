import styled, { css } from "styled-components";

const CalendarLayoutStyles = styled('div')`

`

export const MonthLayoutStyles = styled(CalendarLayoutStyles)`

    .bs-calendar-header {
        display: flex;
        justify-content: space-between;

        .bs-calendar-header-button {
            width: 40px;
            aspect-ratio: 1/1;
            background: green;

            &-prev {
                background: yellow;
                margin-left: auto;
            }

            &-next {
                background: blue;
            }
        }
    }

    .bs-calendar-days {

    }

    .bs-calendar-days-heading,
    .bs-calendar-days-dates {
        display: flex;
        flex-wrap: wrap;

        .bs-calendar-day {
            width: calc(100%/7);
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                display: inline-block;
            }

            &.inactive {
                opacity: 0.5;
            }
        }
    }

    .bs-calendar-days {
        .bs-calendar-days-heading {
            .bs-calendar-days-heading-item {
        
            }
        }

        .bs-calendar-days-dates {
            .bs-calendar-days-dates-item {
        
            }
        }
    }
`

export const WeekLayoutStyles = styled(CalendarLayoutStyles)`

`

export const CalendarEventStyles = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: 2/3;
    padding: ${ props => props.theme.sizes.XXS }px  ${ props => props.theme.sizes.XS }px;
    padding-top: 30%;
    /* z-index: -1; */

    /* ${ props => {
        return props.isReserved ? 'background: rgba(0, 0, 0, 0.25)' :  'background: rgba(0, 0, 0, 0.5)'
    }} */

    
`