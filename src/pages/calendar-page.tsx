import { FC, useState } from 'react';
import { Button } from '../components/Button';
import { Month } from '../components/Calendar/Month';
import { Input } from '../components/input';
import { Link } from '../components/link';
import { Select, Option } from '../components/select';
import { Switch } from '../components/switch';
import { useTheme } from '../hooks/theme-hook';
import { MonthProps } from '../types/calendar';

/**
 * Theme page component.
 */
export const CalendarPage: FC = () => {
    const [theme, toggleTheme] = useTheme();
    const [calendar, setCalendar] = useState();
    const months: MonthProps[] = []

    for (let index = 0; index < 12; index++) {
        let month: MonthProps = {
            monthNumber: index + 1,
            name : (index + 1).toString()
        }
        months.push(month)        
    }

    return (
        <div>
            <div className="flex flex-row justify-start">
                {
                    months.map(element => (
                        <div key={element.monthNumber}>
                            <Month monthNumber={element.monthNumber} name={element.name} />
                            <br />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
