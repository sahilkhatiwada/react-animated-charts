import React from "react";
import { render } from "@testing-library/react";
import { RadarChart } from "./radar-chart";

describe("RadarChart", () => {
  it("renders without crashing", () => {
    const data = [
      { label: "A", value: 10 },
      { label: "B", value: 20 },
      { label: "C", value: 15 },
    ];
    const { container } = render(<RadarChart data={data} />);
    expect(container.querySelectorAll("polygon").length).toBe(1);
  });
}); 