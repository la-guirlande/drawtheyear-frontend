import { EmotionProps } from "./emotion"

/**
 * Month props.
 */
export interface MonthProps {
    name: string,
    monthNumber: number
}

/**
 * Day props.
 */
 export interface DayProps {
    emotions: EmotionProps[],
    dayNumber: number
}
