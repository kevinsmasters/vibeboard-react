// MoodTile.test.tsx
import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from "@testing-library/react";
import MoodTileComponent from "./MoodTile";
import type { MoodTile } from "../types/moodboard";

const mockTile: MoodTile = {
  id: "1",
  type: "quote",
  caption: "Test caption",
  content: "Seven, seven... Seven is my name!"
};

test("renders caption if provided", () => {
  render(<MoodTileComponent tile={mockTile} onSave={vi.fn()} />);
  expect(screen.getByText(/Test caption/i)).toBeInTheDocument();
});

test("shows modal when edit button is clicked", () => {
  render(<MoodTileComponent tile={mockTile} onSave={vi.fn()} />);
  const button = screen.getByRole("button", { name: "✏️" });
  fireEvent.click(button);
  expect(screen.getByText(/Edit Tile/i)).toBeInTheDocument();
});
