/** @jsx React.createElement */
import React from "react";
import { render, screen } from "@testing-library/react";
import { GaugeChart } from "./gauge-chart";
import '@testing-library/jest-dom';

describe("GaugeChart", () => {
  it("renders without crashing", () => {
    const { container } = render(<GaugeChart value={50} />);
    expect(container.querySelectorAll("path").length).toBeGreaterThan(0);
  });

  it("has role img and appropriate aria-label", () => {
    render(<GaugeChart value={50} />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-label", "Gauge Chart");
  });
}); 