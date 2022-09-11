import { createContext, useContext } from 'react';
import { BehaviorSubject, map, combineLatestWith } from 'rxjs';

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  power?: number;
  selected?: boolean;
}

export const rawPokemon$ = new BehaviorSubject<Pokemon[]>([]);

fetch('/pokemon-simplified.json')
  .then((res) => res.json())
  .then((data) => rawPokemon$.next(data));
