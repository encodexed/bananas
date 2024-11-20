import type { GameState, TileSlot, Tile } from '$lib/interfaces/gameState';

const createEmptyBoard = () => {
  let rows = 10;
  let cols = 10;
  let initialValue: TileSlot = {
    isOccupied: false,
    value: null,
  };

  return Array.from({ length: rows }, () => Array(cols).fill(initialValue));
};

export const gameState: GameState = $state({
  board: createEmptyBoard(),
  tilesLeft: 144,
});
