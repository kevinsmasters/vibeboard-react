import React, { useState } from "react";
import type { MoodTile as MoodTileType } from "../types/moodboard";
import { TileEditModal } from "./TileEditModal";

interface MoodTileProps {
  tile: MoodTileType;
  onSave: (updatedTile: MoodTileType) => void;
}

const MoodTile: React.FC<MoodTileProps> = ({ tile, onSave }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  switch (tile.type) {
    case "image":
      return (
        <div className="rounded-xl overflow-hidden shadow-md transform transition-transform hover:scale-105">
          <img src={tile.content} alt="Mood image" className="w-full h-48 object-cover" />
          {tile.caption && <p>"{tile.caption}"</p>}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
          >✏️</button>
          <TileEditModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            tile={tile}
            onSave={(updatedTile) => {
              console.log("Tile updated in parent!", updatedTile);
              onSave(updatedTile); // bubble up!
              setIsModalOpen(false);
            }}
          />
        </div>
      );

    case "quote":
      return (
        <div className="bg-white rounded-xl shadow-md p-4 text-center text-lg italic transform transition-transform hover:scale-105">
          “{tile.content}”<br />
          {tile.caption && <p>"{tile.caption}"</p>}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
          >✏️</button>
          <TileEditModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            tile={tile}
            onSave={(updatedTile) => {
              console.log("Tile updated in parent!", updatedTile);
              onSave(updatedTile); // bubble up!
              setIsModalOpen(false);
            }}
          />
        </div>
      );

    case "color":
      return (
        <div
          className="rounded-xl shadow-md w-full h-48 transform transition-transform hover:scale-105"
          style={{ backgroundColor: tile.content }}>
          {tile.caption && <p>"{tile.caption}"</p>}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
          >✏️</button>
          <TileEditModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            tile={tile}
            onSave={(updatedTile) => {
              console.log("Tile updated in parent!", updatedTile);
              onSave(updatedTile); // bubble up!
              setIsModalOpen(false);
            }}
          />
        </div>
      );

    case "music":
      return (
        <div className="rounded-xl overflow-hidden shadow-md transform transition-transform hover:scale-105">
          <iframe
            src={tile.content}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Music Embed"
          />
          {tile.caption && <p>"{tile.caption}"</p>}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
          >✏️</button>
          <TileEditModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            tile={tile}
            onSave={(updatedTile) => {
              console.log("Tile updated in parent!", updatedTile);
              onSave(updatedTile); // bubble up!
              setIsModalOpen(false);
            }}
          />
        </div>
      );

    default:
      return (
        <div className="bg-gray-200 rounded-xl shadow-md p-4 text-center transform transition-transform hover:scale-105">
          Unknown tile type
          {tile.caption && <p>"{tile.caption}"</p>}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
          >✏️</button>
          <TileEditModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            tile={tile}
            onSave={(updatedTile) => {
              console.log("Tile updated in parent!", updatedTile);
              onSave(updatedTile); // bubble up!
              setIsModalOpen(false);
            }}
          />
        </div>
      );
  }
};

export default MoodTile;