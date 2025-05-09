import { useState } from "react";
import MoodTile from "../components/MoodTile";
import type { MoodTile as MoodTileType } from "../types/moodboard";

const sampleTiles: MoodTileType[] = [
  { id: "1", type: "image", content: "https://placecats.com/400/300", caption: "img" },
  { id: "2", type: "quote", content: "Live by the sun, love by the moon.", caption: "quote" },
  { id: "3", type: "color", content: "#f0a", caption: "color" },
  { id: "4", type: "music", content: "https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC", caption: "rick" },
];

const Home: React.FC = () => {
  const [tiles, setTiles] = useState<MoodTileType[]>(sampleTiles);

  const handleUpdateTile = (updatedTile: MoodTileType) => {
    setTiles((prevTiles) =>
      prevTiles.map((tile) =>
        tile.id === updatedTile.id ? updatedTile : tile
      )
    );
    console.log("Tile updated!", updatedTile);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {tiles.map(tile => (
        <MoodTile
          key={tile.id}
          tile={tile}
          onSave={handleUpdateTile}
        />
      ))}
    </div>
  )
};

export default Home;
