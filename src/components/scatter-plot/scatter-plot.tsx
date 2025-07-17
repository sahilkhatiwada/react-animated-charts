import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./scatter-plot.css";

export interface ScatterPlotProps {
  data: { x: number; y: number; r?: number; color?: string; label?: string }[];
  width?: number;
  height?: number;
  colors?: string[];
  animationDuration?: number;
  xLabel?: string;
  yLabel?: string;
  ariaLabel?: string;
}

export const ScatterPlot: React.FC<ScatterPlotProps> = ({
  data,
  width = 500,
  height = 350,
  colors = ["#007bff"],
  animationDuration = 800,
  xLabel = "X Axis",
  yLabel = "Y Axis",
  ariaLabel = "Scatter Plot Chart",
}) => {
  // Find min/max for scaling
  const minX = Math.min(...data.map((d) => d.x));
  const maxX = Math.max(...data.map((d) => d.x));
  const minY = Math.min(...data.map((d) => d.y));
  const maxY = Math.max(...data.map((d) => d.y));

  // Padding for axes
  const padding = 40;
  const plotWidth = width - padding * 2;
  const plotHeight = height - padding * 2;

  // Scale functions
  const scaleX = (x: number) => padding + ((x - minX) / (maxX - minX || 1)) * plotWidth;
  const scaleY = (y: number) => height - padding - ((y - minY) / (maxY - minY || 1)) * plotHeight;

  // Tooltip state
  const [tooltip, setTooltip] = useState<null | { x: number; y: number; label?: string; value: { x: number; y: number } }>(null);

  // Grid lines
  const gridLines = 5;
  const xTicks = Array.from({ length: gridLines }, (_, i) => minX + ((maxX - minX) * i) / (gridLines - 1));
  const yTicks = Array.from({ length: gridLines }, (_, i) => minY + ((maxY - minY) * i) / (gridLines - 1));

  return (
    <div className="scatter-plot-responsive" style={{ width: "100%", maxWidth: width }}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="scatter-plot"
        role="img"
        aria-label={ariaLabel}
      >
        {/* Grid lines */}
        {xTicks.map((tick, i) => (
          <line
            key={`xgrid-${i}`}
            x1={scaleX(tick)}
            x2={scaleX(tick)}
            y1={padding}
            y2={height - padding}
            stroke="#e9ecef"
            strokeDasharray="4 2"
          />
        ))}
        {yTicks.map((tick, i) => (
          <line
            key={`ygrid-${i}`}
            y1={scaleY(tick)}
            y2={scaleY(tick)}
            x1={padding}
            x2={width - padding}
            stroke="#e9ecef"
            strokeDasharray="4 2"
          />
        ))}
        {/* Axes */}
        <line x1={padding} x2={width - padding} y1={height - padding} y2={height - padding} stroke="#333" strokeWidth={2} />
        <line x1={padding} x2={padding} y1={padding} y2={height - padding} stroke="#333" strokeWidth={2} />
        {/* Axis labels */}
        <text x={width / 2} y={height - 5} textAnchor="middle" fontSize={14} fill="#333">{xLabel}</text>
        <text x={15} y={height / 2} textAnchor="middle" fontSize={14} fill="#333" transform={`rotate(-90 15,${height / 2})`}>
          {yLabel}
        </text>
        {/* Axis ticks */}
        {xTicks.map((tick, i) => (
          <text
            key={`xtick-${i}`}
            x={scaleX(tick)}
            y={height - padding + 18}
            textAnchor="middle"
            fontSize={12}
            fill="#666"
          >
            {Number(tick.toFixed(2))}
          </text>
        ))}
        {yTicks.map((tick, i) => (
          <text
            key={`ytick-${i}`}
            x={padding - 8}
            y={scaleY(tick) + 4}
            textAnchor="end"
            fontSize={12}
            fill="#666"
          >
            {Number(tick.toFixed(2))}
          </text>
        ))}
        {/* Data points */}
        <AnimatePresence>
          {data.map((point, i) => (
            <motion.circle
              key={i}
              cx={scaleX(point.x)}
              cy={scaleY(point.y)}
              r={point.r || 8}
              fill={point.color || colors[i % colors.length]}
              initial={{ r: 0, opacity: 0 }}
              animate={{ r: point.r || 8, opacity: 1 }}
              exit={{ r: 0, opacity: 0 }}
              transition={{ duration: animationDuration / 1000, type: "spring", stiffness: 120 }}
              tabIndex={0}
              aria-label={point.label || `Point (${point.x}, ${point.y})`}
              onMouseEnter={() => setTooltip({ x: scaleX(point.x), y: scaleY(point.y), label: point.label, value: { x: point.x, y: point.y } })}
              onFocus={() => setTooltip({ x: scaleX(point.x), y: scaleY(point.y), label: point.label, value: { x: point.x, y: point.y } })}
              onMouseLeave={() => setTooltip(null)}
              onBlur={() => setTooltip(null)}
              style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.10))", cursor: "pointer" }}
            />
          ))}
        </AnimatePresence>
        {/* Tooltip */}
        {tooltip && (
          <foreignObject x={tooltip.x + 10} y={tooltip.y - 40} width={120} height={40} pointerEvents="none">
            <div className="scatter-tooltip" style={{ background: "rgba(0,0,0,0.8)", color: "#fff", borderRadius: 6, padding: "6px 10px", fontSize: 13, pointerEvents: "none" }}>
              {tooltip.label && <div style={{ fontWeight: 600 }}>{tooltip.label}</div>}
              <div>X: {tooltip.value.x}</div>
              <div>Y: {tooltip.value.y}</div>
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}; 