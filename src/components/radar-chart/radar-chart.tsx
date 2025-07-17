import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./radar-chart.css";

export interface RadarChartProps {
  data: { label: string; value: number }[];
  maxValue?: number;
  width?: number;
  height?: number;
  colors?: string[];
  animationDuration?: number;
  ariaLabel?: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  data,
  maxValue = Math.max(...data.map(d => d.value)),
  width = 350,
  height = 350,
  colors = ["#007bff"],
  animationDuration = 800,
  ariaLabel = "Radar Chart",
}) => {
  const count = data.length;
  const angleStep = (2 * Math.PI) / count;
  const radius = Math.min(width, height) / 2 - 50;
  const centerX = width / 2;
  const centerY = height / 2;

  // Axes and grid
  const levels = 5;
  const gridPolygons = Array.from({ length: levels }, (_, l) =>
    Array.from({ length: count }, (_, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = ((l + 1) / levels) * radius;
      return [centerX + r * Math.cos(angle), centerY + r * Math.sin(angle)];
    })
  );

  // Data points
  const points = data.map((d, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (d.value / maxValue) * radius;
    return [centerX + r * Math.cos(angle), centerY + r * Math.sin(angle)];
  });
  const polygonPoints = points.map(p => p.join(",")).join(" ");

  // Tooltip state
  const [tooltip, setTooltip] = useState<null | { x: number; y: number; label: string; value: number }>(null);

  return (
    <div className="radar-chart-responsive" style={{ width: "100%", maxWidth: width }}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="radar-chart"
        role="img"
        aria-label={ariaLabel}
      >
        {/* Grid polygons */}
        {gridPolygons.map((poly, l) => (
          <polygon
            key={l}
            points={poly.map(p => p.join(",")).join(" ")}
            fill="none"
            stroke="#e9ecef"
            strokeWidth={1}
          />
        ))}
        {/* Axes */}
        {data.map((d, i) => {
          const angle = i * angleStep - Math.PI / 2;
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={centerX + radius * Math.cos(angle)}
              y2={centerY + radius * Math.sin(angle)}
              stroke="#e9ecef"
              strokeWidth={1}
            />
          );
        })}
        {/* Axis labels */}
        {data.map((d, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = centerX + (radius + 18) * Math.cos(angle);
          const y = centerY + (radius + 18) * Math.sin(angle);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              fontSize={13}
              fill="#333"
              alignmentBaseline="middle"
            >
              {d.label}
            </text>
          );
        })}
        {/* Animated data polygon */}
        <motion.polygon
          points={polygonPoints}
          fill={colors[0]}
          fillOpacity={0.4}
          stroke={colors[0]}
          strokeWidth={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: animationDuration / 1000 }}
        />
        {/* Data points with tooltips */}
        <AnimatePresence>
          {points.map(([x, y], i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={8}
              fill={colors[0]}
              initial={{ r: 0, opacity: 0 }}
              animate={{ r: 8, opacity: 1 }}
              exit={{ r: 0, opacity: 0 }}
              transition={{ duration: animationDuration / 1000, type: "spring", stiffness: 120 }}
              tabIndex={0}
              aria-label={`${data[i].label}: ${data[i].value}`}
              onMouseEnter={() => setTooltip({ x, y, label: data[i].label, value: data[i].value })}
              onFocus={() => setTooltip({ x, y, label: data[i].label, value: data[i].value })}
              onMouseLeave={() => setTooltip(null)}
              onBlur={() => setTooltip(null)}
              style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.10))", cursor: "pointer" }}
            />
          ))}
        </AnimatePresence>
        {/* Tooltip */}
        {tooltip && (
          <foreignObject x={tooltip.x + 10} y={tooltip.y - 40} width={120} height={40} pointerEvents="none">
            <div className="radar-tooltip" style={{ background: "rgba(0,0,0,0.8)", color: "#fff", borderRadius: 6, padding: "6px 10px", fontSize: 13, pointerEvents: "none" }}>
              <div style={{ fontWeight: 600 }}>{tooltip.label}</div>
              <div>Value: {tooltip.value}</div>
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}; 