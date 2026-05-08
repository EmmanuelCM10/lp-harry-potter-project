import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Character } from '../types/character';
import { fetchCharacters } from '../services/charactersService';

interface UseCharactersOptions {
  limit?: number;
  withImageOnly?: boolean;
  excludeNames?: string[];
}

interface UseCharactersResult {
  characters: Character[];
  loading: boolean;
  error: string | null;
  reload: () => void;
}

type FetchState =
  | { status: 'loading'; data: Character[]; error: null }
  | { status: 'success'; data: Character[]; error: null }
  | { status: 'error'; data: Character[]; error: string };

const INITIAL_STATE: FetchState = {
  status: 'loading',
  data: [],
  error: null,
};

export function useCharacters(
  options: UseCharactersOptions = {},
): UseCharactersResult {
  const { limit, withImageOnly = false, excludeNames } = options;

  const [state, setState] = useState<FetchState>(INITIAL_STATE);
  const [reloadTick, setReloadTick] = useState(0);

  useEffect(() => {
    let active = true;

    fetchCharacters()
      .then((data) => {
        if (!active) return;
        setState({ status: 'success', data, error: null });
      })
      .catch((err: unknown) => {
        if (!active) return;
        const message =
          err instanceof Error ? err.message : 'Erro ao carregar personagens';
        setState((prev) => ({
          status: 'error',
          data: prev.data,
          error: message,
        }));
      });

    return () => {
      active = false;
    };
  }, [reloadTick]);

  const reload = useCallback(() => {
    setState((prev) => ({ status: 'loading', data: prev.data, error: null }));
    setReloadTick((tick) => tick + 1);
  }, []);

  const characters = useMemo(() => {
    const excluded = new Set(
      (excludeNames ?? []).map((name) => name.toLowerCase()),
    );

    const filtered = state.data.filter((character) => {
      if (withImageOnly && !character.image?.trim()) return false;
      if (excluded.has(character.name.toLowerCase())) return false;
      return true;
    });

    return limit ? filtered.slice(0, limit) : filtered;
  }, [state.data, limit, withImageOnly, excludeNames]);

  return {
    characters,
    loading: state.status === 'loading',
    error: state.error,
    reload,
  };
}
