interface MonthHeaderProps {
    // day: number;
    // onDaySelect?(day: DayData): void;
}

/**
 * Header for month's view.
 * @param props 
 */
export const MonthHeader: React.FC<MonthHeaderProps> = (props) => {

    return (
        <div className="flex items-center">
            <h2 className="lg:text-4xl md:text-5xl"><span className="text-primary">FEV</span></h2>
            <h2 className="lg:text-xl md:text-2xl">2<span className="text-primary">k</span>21</h2>
        </div>
    )
}
