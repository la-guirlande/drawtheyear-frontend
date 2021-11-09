import { useEffect, useState } from 'react';

/**
 * Theme type.
 */
export type Theme = 'light' | 'dark';

/**
 * Theme hook.
 * 
 * This hook is used to manages the current theme.
 * If no parameter is given when calling the update function, it will toggles the current theme.
 * 
 * @returns [current theme, update theme function]
 */
export const useTheme = (): [Theme, (theme?: Theme) => void] => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');
  const html = document.querySelector('html');
  
  useEffect(() => {
    setCurrentTheme(getCurrentTheme());
  }, []);

  const getCurrentTheme = (): Theme => {
    return html.classList.contains('dark') ? 'dark' : 'light';
  }

  const updateTheme = (theme?: Theme) => {
    const selectedTheme = theme || (currentTheme === 'light' ? 'dark' : 'light');
    setCurrentTheme(selectedTheme);
    if (selectedTheme === 'light') {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark')
    }
  }

  return [currentTheme, updateTheme];
}
