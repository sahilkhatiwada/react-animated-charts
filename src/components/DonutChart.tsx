import React from 'react';
import { motion } from 'framer-motion';

export interface DonutChartProps {
  data: number[];
  labels: string[];
  colors?: string[];
  size?: number;
  strokeWidth?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, labels, colors, size = 120, strokeWidth = 16 }) => {
  const total = data.reduce((a, b) => a + b, 0) || 1;
  let offset = 0;
  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
        {data.map((value, i) => {
          const radius = (size - strokeWidth) / 2;
          const circumference = 2 * Math.PI * radius;
          const dash = (value / total) * circumference;
          const dashArray = `${dash} ${circumference - dash}`;
          const circleOffset = offset;
          offset += dash;
          return (
            <motion.circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={colors?.[i] || '#3b82f6'}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={-circleOffset}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 + i * 0.2 }}
            />
          );
        })}
      </svg>
      <div className="flex flex-wrap justify-center mt-2 text-xs text-gray-600">
        {labels.map((l, i) => (
          <span key={i} className="mx-2 flex items-center">
            <span className="inline-block w-3 h-3 rounded-full mr-1" style={{ background: colors?.[i] || '#3b82f6' }} />
            {l}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DonutChart; 