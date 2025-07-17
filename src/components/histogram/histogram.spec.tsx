/** @jsx React.createElement */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Histogram } from "./histogram";
import '@testing-library/jest-dom';

describe("Histogram", () => {
  it("renders without crashing", () => {
    const data = [1, 2, 2, 3, 3, 3, 4];
    const { container } = render(<Histogram data={data} bins={4} />);
    expect(container.querySelectorAll("rect").length).toBe(4);
  });

  it("has role img and appropriate aria-label", () => {
    const data = [1, 2, 2, 3];
    render(<Histogram data={data} bins={2} />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-label", "Histogram Chart");
  });
}); 