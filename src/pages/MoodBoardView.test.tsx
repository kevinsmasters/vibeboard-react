import { render, screen, fireEvent } from "@testing-library/react";
// import { vi } from "vitest";
import MoodBoardView from "./Home"; /* update after moving from home to MoodBoardView */

describe("MoodBoardView", () => {
  it("should reorder tiles on drag-and-drop", async () => {
    render(<MoodBoardView />);

    const tileA = screen.getByText(/A. Nonymous/); // replace with real caption or ID
    const tileB = screen.getByText(/Tile B/);

    const tileAParent = tileA.closest("[draggable]") || tileA.parentElement!;
    const tileBParent = tileB.closest("[draggable]") || tileB.parentElement!;

    // Simulate drag events
    fireEvent.pointerDown(tileAParent);
    fireEvent.pointerMove(tileBParent);
    fireEvent.pointerUp(tileBParent);

    // Expect reordering — could check position/order visually or in DOM
    const allTiles = screen.getAllByTestId("mood-tile"); // assign data-testid on your tile wrapper
    expect(allTiles[0]).toHaveTextContent("Tile B");
    expect(allTiles[1]).toHaveTextContent("A. Nonymous");
  });
});
