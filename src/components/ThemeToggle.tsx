import React from 'react';
import { Sun, Moon, Leaf } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      case 'green':
        return <Leaf className="w-5 h-5" />;
      default:
        return <Sun className="w-5 h-5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to green mode';
      case 'green':
        return 'Switch to light mode';
      default:
        return 'Switch theme';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-600 dark:text-gray-300 green:text-green-300 hover:text-pink-600 dark:hover:text-pink-400 green:hover:text-green-400 transition-colors duration-200"
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle;