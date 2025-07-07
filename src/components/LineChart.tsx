import React from 'react';
import { motion } from 'framer-motion';

export interface LineChartProps {
  data: number[];
  labels: string[];
  color?: string;
  height?: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, labels, color = '#3b82f6', height = 240 }) => {
  const max = Math.max(...data, 1);
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 100}`).join(' ');
  return (
    <div className="w-full h-full" style={{ height }}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={points}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        {data.map((v, i) => (
          <motion.circle
            key={i}
            cx={(i / (data.length - 1)) * 100}
            cy={100 - (v / max) * 100}
            r={2.5}
            fill={color}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + i * 0.05 }}
          />
        ))}
      </svg>
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        {labels.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
    </div>
  );
};

export default LineChart; 