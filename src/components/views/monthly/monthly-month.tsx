import { DayData } from "../../../util/types/data-types"

interface MonthlyMonthProps {
    // day: number;
    // onDaySelect?(day: DayData): void;
}

/**
 * Header d'un mois (c'est la section sur la gauche).
 */
export const MonthlyMonth: React.FC<MonthlyMonthProps> = (props) => {

    return (
        <div className=" justify-center items-center">
            <h2 className="text-4xl md:text-5xl"><span className="text-primary">FEV</span></h2>
            <h2 className="text-xl md:text-2xl">2<span className="text-primary">k</span>21</h2>
        </div>
    )
}