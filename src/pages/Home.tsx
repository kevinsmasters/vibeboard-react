import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = tiles.findIndex((t) => t.id === active.id);
      const newIndex = tiles.findIndex((t) => t.id === over?.id);
      setTiles((tiles) => arrayMove(tiles, oldIndex, newIndex));
    }
  };

  const handleUpdateTile = (updatedTile: MoodTileType) => {
    setTiles((prevTiles) =>
      prevTiles.map((tile) =>
        tile.id === updatedTile.id ? updatedTile : tile
      )
    );
    console.log("Tile updated!", updatedTile);
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={tiles.map((tile) => tile.id)} strategy={verticalListSortingStrategy}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {tiles.map(tile => (
            <MoodTile
              key={tile.id}
              tile={tile}
              onSave={handleUpdateTile}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
};

export default Home;
