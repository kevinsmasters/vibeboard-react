// Define allowed tile types
export type TileType = "image" | "quote" | "color" | "music";

// Define the structure of a single tile
export interface MoodTile {
  id: string;         // Unique identifier for the tile
  type: TileType;     // Type of content (image, quote, color, music)
  content: string;    // Content depends on type: URL for image/music, hex for color, text for quote
  caption?: string;
}

// Define the structure of a mood board
export interface MoodBoard {
  id: string;         // Unique identifier for the board
  title: string;      // Title of the mood board
  tiles: MoodTile[];  // Array of tiles that belong to this board
  createdAt: string;  // ISO date string
}