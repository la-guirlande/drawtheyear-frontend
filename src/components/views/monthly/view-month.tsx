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
            // TODO Ajout d'un margin left une ligne sur 2
            // if (Math.pow(5, row)) {
            //     console.log(Math.pow(5, row));
            //     return <div className="ml-10">
            //         t
            //     </div>
            // }
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

    const cellNotDay = (row: number, column: number) => {
        const isLeap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
        return (column === 2 && row > (isLeap ? 29 : 28)) || ((column === 4 || column === 6 || column === 9 || column === 11) && row > 30) || (row > 31) || (column > 12);
    }

    // TODO Faire passer le mois pour l'afficher.
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
