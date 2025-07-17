import React from "react";
import "./heatmap.css";

export interface HeatmapProps {
  data: number[][];
  width?: number;
  height?: number;
  colors?: string[];
  animationDuration?: number;
}

function getColor(value: number, min: number, max: number, colors: string[]) {
  const t = (value - min) / (max - min || 1);
  // Simple gradient between first and last color
  return colors.length > 1 ? `url(#heatmap-gradient)` : colors[0];
}

export const Heatmap: React.FC<HeatmapProps> = ({
  data,
  width = 300,
  height = 300,
  colors = ["#f8f9fa", "#dc3545"],
  animationDuration = 800,
}) => {
  const rows = data.length;
  const cols = data[0]?.length || 0;
  const min = Math.min(...data.flat());
  const max = Math.max(...data.flat());
  const cellWidth = width / cols;
  const cellHeight = height / rows;

  return (
    <svg width={width} height={height} className="heatmap" role="img" aria-label="Heatmap Chart">
      <defs>
        <linearGradient id="heatmap-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="100%" stopColor={colors[colors.length - 1]} />
        </linearGradient>
      </defs>
      {data.map((row, i) =>
        row.map((value, j) => (
          <rect
            key={`${i}-${j}`}
            x={j * cellWidth}
            y={i * cellHeight}
            width={cellWidth}
            height={cellHeight}
            fill={getColor(value, min, max, colors)}
            style={{
              transition: `all ${animationDuration}ms cubic-bezier(0.4,0,0.2,1)`
            }}
          />
        ))
      )}
    </svg>
  );
}; 