import moment from 'moment';
import React from 'react';
import { DayData, UserData } from '../../../util/types/data-types';
import { MonthlyDay } from './monthly-day';
import { MonthlyEmptyCell } from './monthly-empty-cell';
import { MonthlyMonth } from './monthly-month';
import { MonthlyNoDayCell } from './monthly-no-day-cell';

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
                return <MonthlyEmptyCell key={`${month}-${i}`} />
            }
            if (day) {
                return <MonthlyDay key={`${month}-${i}`} dayofmonth={row} day={day} hoverText="Détails" onClick={() => onDaySelect(day)} />
            }
            const dateStr = moment(`${year}-${month}-${row}`).format('YYYY-MM-DD');
            if (editable) {
                return <MonthlyNoDayCell key={`${month}-${i}`} dayofmonth={row} hoverText="Créer" href={`/grid/${user.name}/day/add?date=${dateStr}`} />
            }
            return <MonthlyNoDayCell key={`${month}-${i}`} dayofmonth={row} hoverText="-----" />
        });
    }

    const cellNotDay = (row: number, column: number) => {
        const isLeap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
        return (column === 2 && row > (isLeap ? 29 : 28)) || ((column === 4 || column === 6 || column === 9 || column === 11) && row > 30) || (row > 31) || (column > 12);
    }

    // TODO Faire passer le mois pour l'afficher.
    const generateToutCours = (countMonth: number) => {
        const element: JSX.Element[] = [];
        for (let i = 1; i <= countMonth; i++) {
            element.push(<div className="w-full inline-block p-10">
                <h1 className="text-secondary">Mois {i}</h1>
                <div className="grid grid-cols-5">
                    {/* TODO Ajouter le margin left dans la génération du calendar toutes les 2 lignes. */}
                    {generateCalendar(i)}
                </div>
            </div>)
        }
        return element;
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-2" style={{ backgroundColor: "red"}}>
                {/* TODO CHAQUE MOIS POSSEDE TOUTE LA SECTION SUIVANTE */}
                <div className="flex col-span-1 justify-center items-center bg-black">
                    <MonthlyMonth />
                </div>
                {/* Contenue de la section droite de la page (contenu du calendrier) */}
                <div className="col-span-3 bg-white">
                    {generateToutCours(12)}
                </div>
            </div>
        </div>
    )
}
