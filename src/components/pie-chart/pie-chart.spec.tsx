/** @jsx React.createElement */
import React from "react";
import { render, screen } from "@testing-library/react";
import { PieChart } from "./pie-chart";
import '@testing-library/jest-dom';

describe("PieChart", () => {
  it("renders without crashing", () => {
    const data = [
      { value: 10 },
      { value: 20 },
    ];
    const { container } = render(<PieChart data={data} />);
    expect(container.querySelectorAll("path").length).toBe(2);
  });

  it("has role img and appropriate aria-label", () => {
    const data = [
      { value: 10 },
      { value: 20 },
    ];
    render(<PieChart data={data} />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-label", "Pie Chart");
  });
}); 