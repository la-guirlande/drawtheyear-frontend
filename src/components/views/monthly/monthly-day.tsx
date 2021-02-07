interface MonthlyDayProps {
    // day: number;
}

/**
 * Balise d'un jour.
 */
export const MonthlyDay: React.FC<MonthlyDayProps> = (props) =>  {

    return (
        <div className="inline-block w-48 h-12 border border-black rounded-tl-lg rounded-br-lg bg-red bg-secondary text-white text-center align-middle m-2">
            1
        </div>
    )
}
