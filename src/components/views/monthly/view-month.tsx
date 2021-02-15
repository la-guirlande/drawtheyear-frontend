import moment from 'moment';
import React from 'react';
import { DayData, UserData } from '../../../util/types/data-types';
import { MonthDayCell } from './month-cells/month-day-cell';
import { MonthEmptyCell } from './month-cells/month-empty-cell';
import { MonthHeader } from './month-header';
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

    const generateCalendar = (month: number) => {
        const colDays: { row: number, day?: DayData }[] = [];
        for (let i = 1; i <= 31; i++) {
            const day = user.days.find(day => {
                const date = new Date(day.date);
                return date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === i && date.getMonth() !== 5;
            });
            colDays.push({ row: i, day });
        }
        return colDays.map(({ row, day }, i) => {
            if (row.toString().endsWith('6') ||
                row.toString().endsWith('7') ||
                row.toString().endsWith('8') ||
                row.toString().endsWith('9') ||
                row.toString().endsWith('0')) {
                return generateRow(i, month, row, 'ml-5', day)
            } else {
                return generateRow(i, month, row, 'mr-5', day)
            }
        });
    }

    const cellNotDay = (row: number, column: number) => {
        const isLeap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
        return (column === 2 && row > (isLeap ? 29 : 28)) || ((column === 4 || column === 6 || column === 9 || column === 11) && row > 30) || (row > 31) || (column > 12);
    }

    // TODO Faire passer le mois pour l'afficher.
    /**
     * Generate the grid.
     * @param countMonth Number of month.
     */
    const generateGridYear = (countMonth: number) => {
        const element: JSX.Element[] = [];
        for (let i = 1; i <= countMonth; i++) {
            element.push(<div className="w-full inline-block p-10">
                <h1 className="text-secondary">Mois {i}</h1>
                <div className="grid grid-cols-5">
                    {generateCalendar(i)}
                </div>
            </div>)
        }
        return element;
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

    return (
        <div>
            <div className="grid grid-cols-4 gap-2">
                {/* TODO CHAQUE MOIS POSSEDE TOUTE LA SECTION SUIVANTE */}
                <div className="flex col-span-1 justify-center items-center bg-black">
                    <MonthHeader />
                </div>
                {/* Contenue de la section droite de la page (contenu du calendrier) */}
                <div className="col-span-3 bg-white">
                    {/* On doit faire passer l'année et en fonction de l'année on organise l'affichage de la grille. */}
                    {generateGridYear(12)}
                </div>
            </div>
        </div>
    )
}
