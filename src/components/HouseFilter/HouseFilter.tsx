import type { HogwartsHouse } from '../../types/character';
import styles from './HouseFilter.module.scss';

export type HouseFilterValue = HogwartsHouse | 'all';

interface HouseFilterProps {
  value: HouseFilterValue;
  onChange: (value: HouseFilterValue) => void;
  counts: Record<HouseFilterValue, number>;
}

const OPTIONS: { value: HouseFilterValue; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'Gryffindor', label: 'Grifinória' },
  { value: 'Slytherin', label: 'Sonserina' },
  { value: 'Ravenclaw', label: 'Corvinal' },
  { value: 'Hufflepuff', label: 'Lufa-Lufa' },
];

export function HouseFilter({ value, onChange, counts }: HouseFilterProps) {
  return (
    <nav className={styles.filter} aria-label="Filtrar por casa">
      <ul className={styles.list}>
        {OPTIONS.map((option) => {
          const isActive = option.value === value;
          const total = counts[option.value] ?? 0;
          return (
            <li key={option.value}>
              <button
                type="button"
                className={`${styles.button} ${
                  isActive ? styles.buttonActive : ''
                }`}
                onClick={() => onChange(option.value)}
                aria-pressed={isActive}
              >
                <span>{option.label}</span>
                <span className={styles.count}>{total}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
