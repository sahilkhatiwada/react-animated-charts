import React from "react";
import { render } from "@testing-library/react";
import { BubbleChart } from "./bubble-chart";

describe("BubbleChart", () => {
  it("renders without crashing", () => {
    const data = [
      { x: 1, y: 2, r: 10 },
      { x: 2, y: 3, r: 15 },
    ];
    const { container } = render(<BubbleChart data={data} />);
    expect(container.querySelectorAll("circle").length).toBe(2);
  });
}); 