// src/data/tileStorage.ts

import type { MoodTile } from "../types/moodboard";

const STORAGE_KEY = "vibeboard-tiles";

export const TileStorage = {
  async getTiles(): Promise<MoodTile[]> {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  async saveTiles(tiles: MoodTile[]): Promise<void> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tiles));
  },

  async clear(): Promise<void> {
    localStorage.removeItem(STORAGE_KEY);
  },
};
