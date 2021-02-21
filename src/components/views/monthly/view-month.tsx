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
            if (row.toString().endsWith('6') ||
                row.toString().endsWith('7') ||
                row.toString().endsWith('8') ||
                row.toString().endsWith('9') ||
                row.toString().endsWith('0')) {
                return generateRow(i, month, row, '', day)
            } else {
                return generateRow(i, month, row, '', day)
            }
        });
    }

    const cellNotDay = (row: number, column: number) => {
        const isLeap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
        return (column === 2 && row > (isLeap ? 29 : 28)) || ((column === 4 || column === 6 || column === 9 || column === 11) && row > 30) || (row > 31) || (column > 12);
    }

    // TODO Faire passer le mois pour l'afficher.
    /**
     * Generate the grid (section header & content). 
     * @param year Set year
     */
    const generateGrid = (year: number) => {
        const header: JSX.Element[] = [];
        const content: JSX.Element[] = [];
        const month = new Date(`${year}-01-01`).getMonth();

        for (let i = 0; i < 12; i++) {

            header.push(<div className="flex m-1 items-center justify-center bg-black bg-opacity-20">
                <a className="lg:text-4xl md:text-5xl">{moment().locale('fr').month(month + i).format('MMMM')} {year}</a>
            </div>
            )
            content.push(<div className="w-full inline-block bg-white bg-opacity-20 rounded-md mb-1">
                <div className="grid grid-cols-5">
                    {generateContent(i)}
                </div>
            </div>)
        }

        return <section className="overflow-h">
            <div className="grid grid-cols-4 gap-2">
                <div className="flex col-span-1">
                    <div className="grid grid-cols-1 w-full">
                        {header}    
                    </div>
                </div>
                <div className="col-span-3">
                    {content}
                </div>
            </div>
        </section>;
    }

    /**
     * Generate a row with this good margin.
     */
    const generateRow = (i: number, month: number, row: number, style: string, day?: DayData) => {
        if (cellNotDay(row, month)) {
            return <div className={style}><MonthEmptyCell key={`${month}-${i}`} /></div>
        }
        if (day) {
            return <div className={style}><MonthDayCell key={`${month}-${i}`} dayofmonth={row} day={day} hoverText="Détails" onClick={() => onDaySelect(day)} /></div>
        }
        const dateStr = moment(`${year}-${month}-${row}`).format('YYYY-MM-DD');
        if (editable) {
            return <div className={style}><MonthNoDayCell key={`${month}-${i}`} dayofmonth={row} hoverText="Créer" href={`/grid/${user.name}/day/add?date=${dateStr}`} /></div>
        }
        return <div className={style}><MonthNoDayCell key={`${month}-${i}`} dayofmonth={row} hoverText="-----" /></div>
    }

    /**
     * Generate a list with 12 months
     * // TODO Mettre cette méthode ailleurs
     */
    const generateTableMonth = () => {
        const table: { num: number, month: string }[] = [];
        const date = new Date();

        for (let i = 1; i <= 12; i++) {
            table.push({
                num: i,
                month: 't'
            })
        }
        console.log(table);
        return <></>;
    } 

    return (
        <div>
            {generateGrid(year)}
        </div>
    )
}
