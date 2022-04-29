import moment from 'moment';
import React, { FC, useEffect, useMemo, useState } from 'react'
import { DayProps, MonthProps } from '../../types/calendar';
import { EmotionProps } from '../../types/emotion';

export const Month: FC<MonthProps> = (props) => {

    const [days, setDays] = useState<DayProps[]>([])
    const sadness: EmotionProps = {
        name: 'Tristesse',
        color: '#fbc930'
    };

    const happiness: EmotionProps = {
        name: 'Bonheur',
        color: '#8cff1f'
    };

    const bordeaux: EmotionProps = {
        name: 'Bordeaux',
        color: '#9e1e31'
    };

    const anger: EmotionProps = {
        name: 'Colère',
        color: '#FF0000'
    };

    const emotionList: EmotionProps[] = [happiness, sadness, bordeaux, anger]

    const dayCount = useMemo(() => {
        let momentum = moment()
        return moment(`${momentum.year()}-${props.monthNumber + 1 > 9 ? props.monthNumber + 1 : '0' + (props.monthNumber + 1)}`, "YYYY-MM").daysInMonth()
    }, [props.monthNumber]);

    useEffect(() => {
        for (let index = 0; index < dayCount; index++) {
            let day: DayProps = {
                dayNumber: index + 1,
                emotions: [emotionList[Math.floor(Math.random() * 4)]]
            }

            days.push(day)
        }
    }, [days])

    return (
        <div className='mt-16'>
            {
                days.map((element) => (
                    <div className='flex flex-row justify-start'>
                        <div className='m-2' key={element.dayNumber+"D"}>
                            {element.emotions[0].name + element.dayNumber}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
