import { POINT_CONVERSION_COMPRESSED } from 'constants';
import moment from 'moment';
import React from 'react';
import { DayData, UserData } from '../../../util/types/data-types';
import { MonthDayCell } from './month-cells/month-day-cell';
import { MonthEmptyCell } from './month-cells/month-empty-cell';
import { MonthNoDayCell } from './month-cells/month-no-day-cell';

/**
 * Grid props.
 */
export type ViewMonthProps = {
    user: UserData;
    year?: number;
    editable?: boolean;
    onDaySelect?(day: DayData): void;
}

/**
 * Monthly component.
 * 
 * This component is the monthly's view.
 * 
 * @param user Grid owner
 * @param year Year to show
 * @param editable Trus if the grid is editable
 * @param onDaySelect When a day cell is clicked
 */
export const ViewMonth: React.FC<ViewMonthProps> = ({ user, year, editable, onDaySelect }) => {

    /**
     * Generate the content of the grid.
     * @param month Number of a month.
     */
    const generateContent = (month: number) => {
        const colDays: { row: number, day?: DayData }[] = [];
        for (let i = 1; i <= 31; i++) {
            const day = user.days.find(day => {
                const date = new Date(day.date);
                return date.getFullYear() === year && date.getMonth() === month && date.getDate() === i;
            });
            colDays.push({ row: i, day });
        }
        return colDays.map(({ row, day }, i) => {
            if (cellNotDay(row, month)) {
                return <MonthEmptyCell key={`${month}-${i}`} />
            }
            if (day) {
                return <MonthDayCell key={`${month}-${i}`} dayofmonth={row} day={day} hoverText="Détails" onClick={() => onDaySelect(day)} />
            }
            const dateStr = moment(`${year}-${month}-${row}`).format('YYYY-MM-DD');
            if (editable) {
                return <MonthNoDayCell key={`${month}-${i}`} dayofmonth={row} hoverText="Créer" href={`/grid/${user.name}/day/add?date=${dateStr}`} />
            }
            return <MonthNoDayCell key={`${month}-${i}`} dayofmonth={row} hoverText="-----" />
        });
    }

    /**
     * Check if a day exist.
     * @param row Day of a month
     * @param column Number of a month 
     */
    const cellNotDay = (row: number, column: number) => {
        const isLeap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
        column += 1;
        return (column === 2 && row > (isLeap ? 29 : 28)) || ((column === 4 || column === 6 || column === 9 || column === 11) && row > 30) || (row > 31) || (column > 12);
    }

    /**
     * Generate the grid.
     * @param year Set year
     */
    const generateGrid = (year: number) => {
        const content: JSX.Element[] = [];
        const month = new Date(`${year}-01-01`).getMonth();

        for (let i = 0; i < 12; i++) {
            content.push(<div>
                <div className="flex m-1 items-center justify-center bg-black bg-opacity-20">
                    <a className="lg:text-4xl md:text-5xl">{moment().locale('FR').month(month + i).format('MMMM')} {year}</a>
                </div>
                <div className="w-full inline-block bg-white bg-opacity-20 rounded-md mb-1">
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
                        {generateContent(i)}
                    </div>
                </div>
            </div>)
        }

        return <section className="overflow-h">
            <div className="grid grid-cols-1 gap-2">
                <div className="flex col-span-1">
                    <div className="grid grid-cols-1 w-full">
                        {content}
                    </div>
                </div>
            </div>
        </section>;
    }

    return (
        <div className="container mx-auto">
            {generateGrid(year)}
        </div>
    )
}
