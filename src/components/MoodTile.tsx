import React from "react";
import type { MoodTile as MoodTileType } from "../types/moodboard";

interface MoodTileProps {
  tile: MoodTileType;
}

const MoodTile: React.FC<MoodTileProps> = ({ tile }) => {
  switch (tile.type) {
    case "image":
      return (
        <div className="rounded-xl overflow-hidden shadow-md">
          <img src={tile.content} alt="Mood image" className="w-full h-48 object-cover" />
        </div>
      );

    case "quote":
      return (
        <div className="bg-white rounded-xl shadow-md p-4 text-center text-lg italic">
          “{tile.content}”
        </div>
      );

    case "color":
      return (
        <div
          className="rounded-xl shadow-md w-full h-48"
          style={{ backgroundColor: tile.content }}
        />
      );

    case "music":
      return (
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src={tile.content}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Music Embed"
          />
        </div>
      );

    default:
      return (
        <div className="bg-gray-200 rounded-xl shadow-md p-4 text-center">
          Unknown tile type
        </div>
      );
  }
};

export default MoodTile;