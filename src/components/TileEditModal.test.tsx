// TileEditModal.test.tsx
import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from "@testing-library/react";
import { TileEditModal } from "./TileEditModal";
import type { MoodTile } from "../types/moodboard";

const mockTile: MoodTile = {
  id: "1",
  type: "quote",
  caption: "Initial caption",
  content: "I lost my pen",
};

test("renders caption input with initial value", () => {
  render(
    <TileEditModal
      isOpen={true}
      onClose={vi.fn()}
      tile={mockTile}
      onSave={vi.fn()}
    />
  );
  expect(screen.getByDisplayValue(/Initial caption/i)).toBeInTheDocument();
});

test("calls onSave with updated caption", () => {
  const mockSave = vi.fn();
  const mockClose = vi.fn();

  render(
    <TileEditModal
      isOpen={true}
      onClose={mockClose}
      tile={mockTile}
      onSave={mockSave}
    />
  );

  const input = screen.getByLabelText(/Caption/i);
  fireEvent.change(input, { target: { value: "Updated caption" } });

  const saveButton = screen.getByRole("button", { name: /Save/i });
  fireEvent.click(saveButton);

  expect(mockSave).toHaveBeenCalledWith(expect.objectContaining({ caption: "Updated caption" }));
  expect(mockClose).toHaveBeenCalled();
});
