import React from "react";
import "./histogram.css";

export interface HistogramProps {
  data: number[];
  bins?: number;
  width?: number;
  height?: number;
  colors?: string[];
  animationDuration?: number;
}

export const Histogram: React.FC<HistogramProps> = ({
  data,
  bins = 10,
  width = 400,
  height = 300,
  colors = ["#6f42c1"],
  animationDuration = 800,
}) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const binSize = (max - min) / bins;
  const counts = Array(bins).fill(0);
  data.forEach((d) => {
    const idx = Math.min(Math.floor((d - min) / binSize), bins - 1);
    counts[idx]++;
  });
  const maxCount = Math.max(...counts);
  const barWidth = width / bins;

  return (
    <svg width={width} height={height} className="histogram" role="img" aria-label="Histogram Chart">
      {counts.map((count, i) => (
        <rect
          key={i}
          x={i * barWidth}
          y={height - (count / maxCount) * (height - 20) - 10}
          width={barWidth - 2}
          height={(count / maxCount) * (height - 20)}
          fill={colors[i % colors.length]}
          style={{
            transition: `all ${animationDuration}ms cubic-bezier(0.4,0,0.2,1)`
          }}
        />
      ))}
    </svg>
  );
}; 