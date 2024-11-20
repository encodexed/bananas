export type GameState = {
  board: TileSlot[][];
  tilesLeft: number;
};

export type TileSlot = {
  isOccupied: boolean;
  value: Tile | null;
};

export type Tile = {
  letter: string;
  value: number;
  owner: number;
};
