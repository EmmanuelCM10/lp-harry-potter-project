import { useMemo, useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CharacterGrid } from './components/CharacterGrid/CharacterGrid';
import {
  HouseFilter,
  type HouseFilterValue,
} from './components/HouseFilter/HouseFilter';
import { Loader } from './components/Loader/Loader';
import { ErrorState } from './components/ErrorState/ErrorState';
import { useCharacters } from './hooks/useCharacters';
import styles from './App.module.scss';

const CHARACTERS_LIMIT = 30;
const EXCLUDED_CHARACTERS = ['Mrs Norris'];

export default function App() {
  const { characters, loading, error, reload } = useCharacters({
    limit: CHARACTERS_LIMIT,
    withImageOnly: true,
    excludeNames: EXCLUDED_CHARACTERS,
  });
  const [houseFilter, setHouseFilter] = useState<HouseFilterValue>('all');

  const counts = useMemo(() => {
    const initial: Record<HouseFilterValue, number> = {
      all: characters.length,
      Gryffindor: 0,
      Slytherin: 0,
      Ravenclaw: 0,
      Hufflepuff: 0,
      '': 0,
    };

    return characters.reduce((acc, character) => {
      if (character.house in acc) {
        acc[character.house as HouseFilterValue] += 1;
      }
      return acc;
    }, initial);
  }, [characters]);

  const filteredCharacters = useMemo(() => {
    if (houseFilter === 'all') return characters;
    return characters.filter((character) => character.house === houseFilter);
  }, [characters, houseFilter]);

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        {loading && <Loader />}

        {!loading && error && (
          <ErrorState message={error} onRetry={reload} />
        )}

        {!loading && !error && (
          <>
            <HouseFilter
              value={houseFilter}
              onChange={setHouseFilter}
              counts={counts}
            />
            <CharacterGrid characters={filteredCharacters} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
