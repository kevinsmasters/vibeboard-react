import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react"; // or use any modal lib
import type { TileType, MoodTile } from "../types/moodboard"; // assuming you already have this type
import { TILE_TYPES } from "../types/moodboard";
interface TileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  tile: MoodTile;
  onSave: (updatedTile: MoodTile) => void;
}

export const TileEditModal: React.FC<TileEditModalProps> = ({
  isOpen,
  onClose,
  tile,
  onSave,
}) => {
  const [caption, setCaption] = useState(tile.caption ?? "");
  const [content, setContent] = useState(tile.content ?? "");
  const [type, setType] = useState(tile.type ?? "");

  const handleSave = () => {
    const updatedTile = { ...tile, caption, content, type };
    console.log("Saving tile:", updatedTile);
    onSave(updatedTile);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              Edit Tile
            </DialogTitle>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as TileType)}
              className="border rounded px-2 py-1 w-full"
            >
              {TILE_TYPES.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Content
            </label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Caption
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                onClick={close}
              >
                Cancel
              </Button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
