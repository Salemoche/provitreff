import styled, { css } from "styled-components";
import { arrowRight } from '/public/assets/img/arrow-right.svg';
import { arrowLeft } from '/public/assets/img/arrow-left.svg';
import { getFontSize } from '../../../lib/helpers';

const CalendarLayoutStyles = styled('div')`
    .fixed {
        background: rgba(0, 0, 0, 0.5);
        pointer-events: none;
    }

    .reserved {
        background: rgba(0, 0, 0, 0.25);
        pointer-events: none;
    }

    .bs-calendar-day {
        border: 2px solid black;
        transition: .3s;
    }

    .bs-calendar-days-dates-item {
        &:hover {
            background: rgba(0, 0, 0, 0.25);
        }
    }

    .bs-calendar-header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: ${({ theme }) => theme.sizes.S }px;

        h4 {
            ${ props => getFontSize( 'M', props )};
        }

        .bs-calendar-header-today-button {
            margin-right: ${({ theme }) => theme.sizes.XS }px;
        }

        .bs-calendar-header-button {
            display: inline-block;
            height: 51.5px;
            aspect-ratio: 1/1;
            color: transparent;

            button {
                display: inline-block;
                width: 100%;
                height: 100%;
            }

            &-prev {
                button {
                    background-image: url(${arrowLeft});
                }
            }
            
            &-next {
                margin-left: ${({ theme }) => theme.sizes.XS }px;
                margin-right: ${({ theme }) => theme.sizes.XS }px;
                button {
                    background-image: url(${arrowRight});
                }
            }
        }
    }
`

export const MonthLayoutStyles = styled(CalendarLayoutStyles)`

    .bs-calendar-days-heading,
    .bs-calendar-days-dates {
        display: flex;
        flex-wrap: wrap;

        .bs-calendar-day {
            width: calc(100%/7);
            aspect-ratio: 4/3;
            padding: ${({ theme }) => theme.sizes.XXS }px ${({ theme }) => theme.sizes.XS }px;

            span {
                display: inline-block;
            }

            &.inactive span {
                opacity: 0.2;
            }
        }
    }

    .bs-calendar-days-heading {
        .bs-calendar-day {
            border: none;
            aspect-ratio: unset;
            padding: 0 ${({ theme }) => theme.sizes.XS }px;
        }
    }

    .bs-calendar-days {

        .bs-calendar-days-heading {
            .bs-calendar-days-heading-item {
        
            }
        }

        .bs-calendar-days-dates {
            border: 2px solid black;
            .bs-calendar-day {

                &:nth-child(7n + 1),
                &:nth-child(7n + 2),
                &:nth-child(7n + 3),
                &:nth-child(7n + 4) {
                    background: none;
                    pointer-events: none;
                    span {
                        opacity: 0.2;
                    }
                }
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