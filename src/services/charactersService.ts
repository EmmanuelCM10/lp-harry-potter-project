import type { Character } from '../types/character';
import { request } from './api';

export function fetchCharacters(): Promise<Character[]> {
  return request<Character[]>('/characters');
}
