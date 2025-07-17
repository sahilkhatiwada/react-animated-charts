import React from "react";
import { render } from "@testing-library/react";
import { ScatterPlot } from "./scatter-plot";

describe("ScatterPlot", () => {
  it("renders without crashing", () => {
    const data = [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 1 },
    ];
    const { container } = render(<ScatterPlot data={data} />);
    expect(container.querySelectorAll("circle").length).toBe(3);
  });
}); 