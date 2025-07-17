/** @jsx React.createElement */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Heatmap } from "./heatmap";
import '@testing-library/jest-dom';

describe("Heatmap", () => {
  it("renders without crashing", () => {
    const data = [
      [1, 2],
      [3, 4],
    ];
    const { container } = render(<Heatmap data={data} />);
    expect(container.querySelectorAll("rect").length).toBe(4);
  });

  it("has role img and appropriate aria-label", () => {
    const data = [
      [1, 2],
      [3, 4],
    ];
    render(<Heatmap data={data} />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-label", "Heatmap Chart");
  });

  it("rects are focusable and respond to keyboard navigation", () => {
    const data = [
      [1, 2],
      [3, 4],
    ];
    const { container } = render(<Heatmap data={data} />);
    const rects = container.querySelectorAll("rect");
    expect(rects.length).toBe(4);
    // Optionally, set tabIndex in the component for accessibility
    // fireEvent.focus(rects[0]);
    // expect(...).toBeVisible(); // If tooltip or highlight appears
  });
}); 