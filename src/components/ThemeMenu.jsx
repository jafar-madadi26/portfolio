import { Laptop, Moon, SunMedium } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';

const options = [
  { value: 'light', label: 'Light', icon: SunMedium },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Laptop },
];

function ThemeMenu({ inline = false }) {
  const { mode, setMode, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const TriggerIcon = resolvedTheme === 'dark' ? Moon : SunMedium;

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={`theme-trigger ${inline ? 'theme-trigger-inline' : ''}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Toggle theme"
      >
        <TriggerIcon size={18} />
      </button>

      {isOpen ? (
        <div className="theme-menu" role="menu">
          {options.map((option) => {
            const Icon = option.icon;
            const selected = mode === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setMode(option.value);
                  setIsOpen(false);
                }}
                className={`theme-menu-item ${selected ? 'theme-menu-item-active' : ''}`}
                role="menuitem"
              >
                <Icon size={16} />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default ThemeMenu;
