import type { Character } from '../../types/character';
import { formatDateOfBirth } from '../../utils/formatDate';
import styles from './CharacterCard.module.scss';

interface CharacterCardProps {
  character: Character;
}

const HOUSE_CLASS_MAP: Record<string, string> = {
  Gryffindor: styles.houseGryffindor,
  Slytherin: styles.houseSlytherin,
  Ravenclaw: styles.houseRavenclaw,
  Hufflepuff: styles.houseHufflepuff,
};

const PLACEHOLDER_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 520'>
      <rect width='400' height='520' fill='%231d1d2e'/>
      <text x='50%' y='50%' fill='%236c6880' font-family='serif' font-size='28' text-anchor='middle' dominant-baseline='middle'>sem imagem</text>
    </svg>`,
  );

function fallbackText(value: string | null | undefined): string {
  return value && value.trim().length > 0 ? value : 'Desconhecido';
}

export function CharacterCard({ character }: CharacterCardProps) {
  const houseClass = character.house
    ? HOUSE_CLASS_MAP[character.house]
    : styles.houseUnknown;

  const handleImageError: React.ReactEventHandler<HTMLImageElement> = (
    event,
  ) => {
    const img = event.currentTarget;
    if (img.src !== PLACEHOLDER_IMAGE) {
      img.src = PLACEHOLDER_IMAGE;
    }
  };

  return (
    <article className={`${styles.card} ${houseClass ?? ''}`.trim()}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={character.image || PLACEHOLDER_IMAGE}
          alt={`Retrato de ${character.name}`}
          loading="lazy"
          onError={handleImageError}
        />
        <span
          className={`${styles.status} ${
            character.alive ? styles.statusAlive : styles.statusDeceased
          }`}
        >
          {character.alive ? 'Vivo' : 'Falecido'}
        </span>
      </div>

      <div className={styles.body}>
        <header className={styles.heading}>
          <h2 className={styles.name}>{character.name}</h2>
          <p className={styles.house}>{fallbackText(character.house)}</p>
        </header>

        <dl className={styles.details}>
          <div className={styles.detailRow}>
            <dt>Nascimento</dt>
            <dd>{formatDateOfBirth(character.dateOfBirth)}</dd>
          </div>
          <div className={styles.detailRow}>
            <dt>Patrono</dt>
            <dd>{fallbackText(character.patronus)}</dd>
          </div>
          <div className={styles.detailRow}>
            <dt>Ator</dt>
            <dd>{fallbackText(character.actor)}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
