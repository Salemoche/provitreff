import styled, { css } from "styled-components";
import { arrowRight } from '/public/assets/img/arrow-right.svg';
import { arrowLeft } from '/public/assets/img/arrow-left.svg';
import { getFontSize } from '../../../lib/helpers';

const CalendarLayoutStyles = styled('div')`
    .fixed {
        background: rgba(0, 0, 0, 0.4);
        pointer-events: none;
    }

    .reserved {
        background: rgba(0, 0, 0, 0.15);
        pointer-events: none;
    }

    .bs-calendar-day {
        border: 2px solid black;
        transition: .3s;
    }

    .bs-calendar-days-dates-item {
        &:hover {
            background: rgba(0, 0, 0, 0.15);
        }
    }


    .bs-calendar-days-heading,
    .bs-calendar-days-dates {
        display: flex;
        flex-wrap: wrap;

        .bs-calendar-day {
            width: calc(100%/7);
            padding: ${({ theme }) => theme.sizes.XXS }px ${({ theme }) => theme.sizes.XS }px;

            span {
                display: inline-block;
            }

            &.inactive span {
                opacity: 0.2;
            }
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



    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {

        .bs-calendar-header {
            flex-wrap: wrap;


            h4,
            .bs-calendar-header-today-button,
            .bs-calendar-header-button,
            button {
                ${ props => getFontSize( 'XS', props )};
            }

            .bs-calendar-header-button-prev,
            .bs-calendar-header-button-next {
                height: 40px;
                padding: 0;
            }

        }
    }
}
`

export const MonthLayoutStyles = styled(CalendarLayoutStyles)`

    .bs-calendar-days-heading,
    .bs-calendar-days-dates {

        .bs-calendar-day {
            aspect-ratio: 4/3;
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

                /* &:nth-child(7n + 1),
                &:nth-child(7n + 2),
                &:nth-child(7n + 3),
                &:nth-child(7n + 4) {
                    background: none;
                    pointer-events: none;
                    span {
                        opacity: 0.2;
                    }
                } */
            }
        }
    }
`

export const WeekLayoutStyles = styled(CalendarLayoutStyles)`


    .bs-calendar-days {

        .bs-calendar-days-heading {

            &.bs-calendar-days-heading-day {
                border: none;

                .bs-calendar-day {
                    border: none;
                }
            }

            &.bs-calendar-days-heading-date {
                border: 2px solid black;
                border-bottom-width: 4px;

                .bs-calendar-day {
                    border-bottom: none;
                }
            }
            .bs-calendar-days-heading-item {

            }
        }

        .bs-calendar-days-dates {
            border: 2px solid black;
            border-top: none;

            .bs-calendar-scroll-container {

                height: 300px;
                width: 100%;
                overflow-y: scroll;
                display: flex;

                -ms-overflow-style: none;
                scrollbar-width: none;
                ::-webkit-scrollbar {
                    display: none;
                }
            }
            /* Divide Day by 16h * 4 Quarters = 64 */
            .bs-calendar-day {
                padding: 0;
                height: 800px;
                display: grid;
                grid-gap: 0;
                grid-template-rows: repeat(96, 1fr);
                border-top: none;
                overflow: hidden;

                .bs-calendar-day-hour {
                    display: inline-block;
                    /* aspect-ratio: 1/2; */
                    border-top: 4px solid black;
                    grid-column-start: 1;
                    grid-column-end: 2;
                    padding: 0 ${({ theme }) => theme.sizes.XS }px;
                    transition: background .3s;
                    ${ props => getFontSize( 'XXS', props )};
                    position: relative;

                    .bs-calendar-day-hour-divider {
                        width: 100%;
                        border-bottom: 2px solid rgba(0, 0, 0, 0.4);
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%)
                    }

                        
                    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
                        padding: 0 ${({ theme }) => theme.sizes.XXS }px;
                    }

                    @media screen and ( max-width: ${ props => props.theme.breakpoints.S }px) {
                        ${ props => getFontSize( 'XXS', props )};
                    }


                    &:first-of-type {
                        border-top: none;
                    }

                    &:hover {
                        background: rgba(0, 0, 0, 0.4);
                    }
                }

                .bs-calendar-day-event {
                    background: rgba(0, 0, 0, 0.4);
                    grid-column-start: 1;
                    grid-column-end: 2;
                    transform: translateY(4%);
                }
            }
        }
    }
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
        return props.isReserved ? 'background: rgba(0, 0, 0, 0.15)' :  'background: rgba(0, 0, 0, 0.4)'
    }} */

    
`