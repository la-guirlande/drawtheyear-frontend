import moment from 'moment';
import React, { useEffect } from 'react';
import { DayData, UserData } from '../../../util/types/data-types';
import { EmptyCell } from '../../grid/empty-cell';
import { NoDayCell } from '../../grid/no-day-cell';
import { MonthlyCalendar } from './monthly-calendar';
import { MonthlyDay } from './monthly-day';
import { MonthlyMonth } from './monthly-month';

/**
 * Grid props.
 */
export type MonthlyProps = {
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
export const Monthly: React.FC<MonthlyProps> = ({ user, year, editable, onDaySelect }) => {
    // On lui donne le numéro du mois.
    const generateCalendar = (month: number) => {

        // ça c'est un tableau de jour dans le mois (31);
        const colDays: { row: number, day?: DayData }[] = [];
        for (let i = 1; i <= 31; i++) {
            const day = user.days.find(day => {
                const date = new Date(day.date);
                return date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === i && date.getMonth() !== 5;
            });
            colDays.push({ row: i, day });
        }
        return colDays.map(({ row, day }, i) => {
            if (cellNotDay(row, month)) {
                return <EmptyCell key={`${month}-${i}`} />
            }
            if (day) {
                return <MonthlyDay key={`${month}-${i}`} dayofmonth={row} day={day} hoverText="Détails" onClick={() => onDaySelect(day)} />
            }
            const dateStr = moment(`${year}-${month}-${row}`).format('YYYY-MM-DD');
            if (editable) {
                return <NoDayCell key={`${month}-${i}`} dayofmonth={row} hoverText="Créer" href={`/grid/${user.name}/day/add?date=${dateStr}`} />
            }
            return <NoDayCell key={`${month}-${i}`} dayofmonth={row} hoverText="-----" />
        });
    }

    const cellNotDay = (row: number, column: number) => {
        const isLeap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
        return (column === 2 && row > (isLeap ? 29 : 28)) || ((column === 4 || column === 6 || column === 9 || column === 11) && row > 30) || (row > 31) || (column > 12);
    }

    const generateToutCours = (countMonth: number) => {
        const element: JSX.Element[] = [];
        for (let i = 1; i <= countMonth; i++) {
            element.push(<div className="w-full inline-block p-20">
                <div className="grid grid-flow-row auto-rows-max">
                    <h1 className="text-secondary">Mois {i}</h1>
                    {generateCalendar(i)}
                </div>
            </div>)
        }
        return element;
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {/* CHAQUE MOIS POSSEDE TOUTE LA SECTION SUIVANTE */}
            <div className="bg-black flex justify-center items-center">
                <MonthlyMonth />
            </div>
            {/* Contenue de la section droite de la page (contenu du calendrier) */}
            <div className="col-span-2 bg-white">
                {generateToutCours(12)}
            </div>
        </div>
    )
}
