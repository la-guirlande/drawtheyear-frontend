import React from "react"
import { MonthlyCalendar } from "./monthly-calendar"
import { MonthlyMonth } from "./monthly-month"

/**
 * Container de la section vue par mois.
 */
export const MonthlyContainer: React.FC = () => {

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-black flex items-center">
                <MonthlyMonth />
            </div>
            <div className="col-span-2 bg-white">
                <MonthlyCalendar />
            </div>
        </div>
    )
}
