import MoodTile from "./MoodTile";
import type { MoodTile as MoodTileType } from "../types/moodboard";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
interface MoodTileProps {
  tile: MoodTileType;
  onSave: (updatedTile: MoodTileType) => void;
}

export const SortableTile: React.FC<MoodTileProps> = ({ tile, onSave }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: tile.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}  data-testid="mood-tile">
      <MoodTile tile={tile} onSave={onSave} />
    </div>
  );
};
