import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { MoodTile as MoodTileType } from "../types/moodboard";
import { defaultTiles } from "../data/defaultTiles"; // fallback seed tiles
import { SortableTile } from "../components/SortableTile";

const Home: React.FC = () => {
  const STORAGE_KEY = "vibeboard-tiles";

  // const [tiles, setTiles] = useState<MoodTileType[]>(defaultTiles);
  const [tiles, setTiles] = useState<MoodTileType[]>( () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultTiles;
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tiles));
  }, [tiles]);

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
    <>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={tiles.map((tile) => tile.id)} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {tiles.map(tile => (
              <SortableTile key={tile.id} tile={tile} onSave={handleUpdateTile} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <button onClick={() => localStorage.removeItem(STORAGE_KEY)}>
        Reset Moodboard
      </button>
    </>
  )
};

export default Home;
