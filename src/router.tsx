import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CalendarPage } from './pages/calendar-page';
import { ThemePage } from './pages/theme-page';

/**
 * Router component.
 */
export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CalendarPage />} />
    </Routes>
  );
}
