import type { Character } from '../../types/character';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import styles from './CharacterGrid.module.scss';

interface CharacterGridProps {
  characters: Character[];
}

export function CharacterGrid({ characters }: CharacterGridProps) {
  if (characters.length === 0) {
    return (
      <p className={styles.empty}>
        Nenhum personagem encontrado para esta seleção.
      </p>
    );
  }

  return (
    <ul className={styles.grid}>
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}
