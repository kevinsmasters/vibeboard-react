import { useState } from "react";
import { Dialog } from "@headlessui/react"; // or use any modal lib
import type { MoodTile } from "../types/moodboard"; // assuming you already have this type

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

  const handleSave = () => {
    const updatedTile = { ...tile, caption };
    console.log("Saving tile:", updatedTile);
    onSave(updatedTile);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <div className="relative bg-white rounded-xl shadow-lg p-6 w-80">
        <Dialog.Title className="text-lg font-semibold mb-4">Edit Tile</Dialog.Title>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Caption
        </label>
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
        />
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </Dialog>
  );
};
