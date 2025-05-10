import { useState } from "react";
import MoodTile from "../components/MoodTile";
import type { MoodTile as MoodTileType } from "../types/moodboard";

const sampleTiles: MoodTileType[] = [
  { id: "1", type: "image", content: "https://placecats.com/400/300" },
  { id: "2", type: "quote", content: "Live by the sun, love by the moon." },
  { id: "3", type: "color", content: "#f0a" },
  { id: "4", type: "music", content: "https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC" },
  { id: "5", type: "music", content: "https://open.spotify.com/embed/track/5hJFSRXMut9SnlNl8Sj4S8" },
  { id: "6", type: "color", content: "#fc0" },
  { id: "7", type: "image", content: "https://placecage.lucidinternets.com/400/300" },
  { id: "8", type: "image", content: "https://placecage.lucidinternets.com/g/200/300" },
  { id: "9", type: "music", content: "https://open.spotify.com/embed/track/2p7HareTeAv9kzrBpzGQVG" },
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
