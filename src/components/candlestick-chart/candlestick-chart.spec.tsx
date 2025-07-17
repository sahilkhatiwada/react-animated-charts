/** @jsx React.createElement */
import React from "react";
import { render, screen } from "@testing-library/react";
import { CandlestickChart } from "./candlestick-chart";
import '@testing-library/jest-dom';

describe("CandlestickChart", () => {
  it("renders without crashing", () => {
    const data = [
      { open: 10, close: 15, high: 18, low: 8 },
      { open: 15, close: 12, high: 16, low: 10 },
    ];
    const { container } = render(<CandlestickChart data={data} />);
    expect(container.querySelectorAll("rect").length).toBe(2);
  });

  it("has role img and appropriate aria-label", () => {
    const data = [
      { open: 10, close: 15, high: 18, low: 8 },
      { open: 15, close: 12, high: 16, low: 10 },
    ];
    render(<CandlestickChart data={data} />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-label", "Candlestick Chart");
  });
}); 