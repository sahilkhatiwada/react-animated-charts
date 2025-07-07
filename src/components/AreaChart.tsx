import React from 'react';
import { motion } from 'framer-motion';

export interface AreaChartProps {
  data: number[];
  labels: string[];
  color?: string;
  height?: number;
}

const AreaChart: React.FC<AreaChartProps> = ({ data, labels, color = '#3b82f6', height = 240 }) => {
  const max = Math.max(...data, 1);
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 100}`).join(' ');
  const areaPoints = `0,100 ${points} 100,100`;
  return (
    <div className="w-full h-full" style={{ height }}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.polygon
          fill={color + '33'}
          points={areaPoints}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={points}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
      </svg>
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        {labels.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
    </div>
  );
};

export default AreaChart; 