import { useState } from "react"
import { DayData } from "../../../util/types/data-types"
import { MonthlyDay } from "./monthly-day"

interface MonthlyCalendarProps {
    // days: DayData;
}

/**
 * Composent utilisé pour générer le calendrier du mois.
 */
export const MonthlyCalendar: React.FC<MonthlyCalendarProps> = (props) => {

    // TODO Margin left

    return (
        <div>
            <div className="w-full inline-block p-20">
                <div className="grid grid-flow-row auto-rows-max">
                    <h1 className="text-secondary">MOIS</h1>
                    <div className="ml-10">
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
