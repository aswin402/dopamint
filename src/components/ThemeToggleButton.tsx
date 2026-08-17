import { Moon, Sun} from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';
import Button from './button';


export function ThemeToggleButton() {
  const { theme, setTheme } = useThemeStore();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      title={`Current: ${theme} • Click to cycle`}
      className="fixed top-4 right-4 h-10 w-10 rounded-full"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === 'light'
            ? 'rotate-0 scale-100'
            : 'rotate-90 scale-0'
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          theme === 'dark'
            ? 'rotate-0 scale-100'
            : 'rotate-90 scale-0'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}