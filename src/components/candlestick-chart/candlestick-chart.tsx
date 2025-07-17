import React from "react";
import "./candlestick-chart.css";

export interface CandlestickData {
  open: number;
  close: number;
  high: number;
  low: number;
  label?: string;
}

export interface CandlestickChartProps {
  data: CandlestickData[];
  width?: number;
  height?: number;
  colors?: [string, string]; // [upColor, downColor]
  animationDuration?: number;
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  data,
  width = 400,
  height = 300,
  colors = ["#28a745", "#dc3545"],
  animationDuration = 800,
}) => {
  const min = Math.min(...data.map(d => d.low));
  const max = Math.max(...data.map(d => d.high));
  const barWidth = width / data.length * 0.6;

  const scaleY = (value: number) => height - 20 - ((value - min) / (max - min || 1)) * (height - 40);

  return (
    <svg width={width} height={height} className="candlestick-chart" role="img" aria-label="Candlestick Chart">
      {data.map((d, i) => {
        const x = i * (width / data.length) + (width / data.length - barWidth) / 2;
        const up = d.close >= d.open;
        return (
          <g key={i}>
            {/* Wick */}
            <line
              x1={x + barWidth / 2}
              x2={x + barWidth / 2}
              y1={scaleY(d.high)}
              y2={scaleY(d.low)}
              stroke="#333"
              strokeWidth={2}
            />
            {/* Body */}
            <rect
              x={x}
              y={scaleY(Math.max(d.open, d.close))}
              width={barWidth}
              height={Math.abs(scaleY(d.open) - scaleY(d.close)) || 2}
              fill={up ? colors[0] : colors[1]}
              style={{
                transition: `all ${animationDuration}ms cubic-bezier(0.4,0,0.2,1)`
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}; 