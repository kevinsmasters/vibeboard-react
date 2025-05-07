import MoodTile from "../components/MoodTile";
import type { MoodTile as MoodTileType } from "../types/moodboard";

const sampleTiles: MoodTileType[] = [
  { id: "1", type: "image", content: "https://placecats.com/400/300" },
  { id: "2", type: "quote", content: "Live by the sun, love by the moon." },
  { id: "3", type: "color", content: "#f0a" },
  { id: "4", type: "music", content: "https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC" },
];

const Home = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    {sampleTiles.map(tile => (
      <MoodTile key={tile.id} tile={tile} />
    ))}
  </div>
);

export default Home;
