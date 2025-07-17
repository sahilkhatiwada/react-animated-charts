import React from "react";
import "./gauge-chart.css";

export interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  width?: number;
  height?: number;
  colors?: string[];
  animationDuration?: number;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  min = 0,
  max = 100,
  width = 300,
  height = 180,
  colors = ["#007bff", "#e9ecef"],
  animationDuration = 800,
}) => {
  const cx = width / 2;
  const cy = height * 0.9;
  const r = Math.min(width, height * 2) / 2 - 20;
  const angle = ((value - min) / (max - min || 1)) * Math.PI;

  // Arc path for value
  const startX = cx - r * Math.cos(Math.PI);
  const startY = cy - r * Math.sin(Math.PI);
  const endX = cx - r * Math.cos(Math.PI - angle);
  const endY = cy - r * Math.sin(Math.PI - angle);
  const largeArcFlag = angle > Math.PI ? 1 : 0;
  const arcPath = `M ${startX} ${startY} A ${r} ${r} 0 ${largeArcFlag} 1 ${endX} ${endY}`;

  return (
    <svg width={width} height={height} className="gauge-chart" role="img" aria-label="Gauge Chart">
      {/* Background arc */}
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy}`}
        fill="none"
        stroke={colors[1]}
        strokeWidth={20}
      />
      {/* Value arc */}
      <path
        d={arcPath}
        fill="none"
        stroke={colors[0]}
        strokeWidth={20}
        style={{
          transition: `all ${animationDuration}ms cubic-bezier(0.4,0,0.2,1)`
        }}
      />
      {/* Needle */}
      <line
        x1={cx}
        y1={cy}
        x2={cx - (r - 10) * Math.cos(Math.PI - angle)}
        y2={cy - (r - 10) * Math.sin(Math.PI - angle)}
        stroke="#333"
        strokeWidth={4}
      />
      {/* Value label */}
      <text x={cx} y={cy + 30} textAnchor="middle" fontSize={24} fill="#333">
        {value}
      </text>
    </svg>
  );
}; 