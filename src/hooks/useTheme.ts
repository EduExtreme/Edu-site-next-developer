import { ThemeContext } from '@/contexts/theme';
import { useContext } from 'react';

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
