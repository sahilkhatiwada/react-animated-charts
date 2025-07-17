import React from "react";
import "./pie-chart.css";

export interface PieChartProps {
  data: { value: number; label?: string; color?: string }[];
  width?: number;
  height?: number;
  colors?: string[];
  animationDuration?: number;
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = {
    x: cx + r * Math.cos(startAngle),
    y: cy + r * Math.sin(startAngle),
  };
  const end = {
    x: cx + r * Math.cos(endAngle),
    y: cy + r * Math.sin(endAngle),
  };
  const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}

export const PieChart: React.FC<PieChartProps> = ({
  data,
  width = 300,
  height = 300,
  colors = ["#007bff", "#28a745", "#ffc107", "#dc3545"],
  animationDuration = 800,
}) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const cx = width / 2;
  const cy = height / 2;
  const r = Math.min(width, height) / 2 - 10;
  let startAngle = -Math.PI / 2;

  return (
    <svg width={width} height={height} className="pie-chart" role="img" aria-label="Pie Chart">
      {data.map((d, i) => {
        const angle = (d.value / total) * 2 * Math.PI;
        const endAngle = startAngle + angle;
        const path = describeArc(cx, cy, r, startAngle, endAngle);
        const fill = d.color || colors[i % colors.length];
        const el = (
          <path
            key={i}
            d={path}
            fill={fill}
            style={{
              transition: `all ${animationDuration}ms cubic-bezier(0.4,0,0.2,1)`
            }}
          />
        );
        startAngle = endAngle;
        return el;
      })}
    </svg>
  );
}; 