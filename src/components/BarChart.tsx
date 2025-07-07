import React from 'react';
import { motion } from 'framer-motion';

export interface BarChartProps {
  data: number[];
  labels: string[];
  colors?: string[];
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, labels, colors, height = 240 }) => {
  const max = Math.max(...data, 1);
  return (
    <div className="w-full flex items-end h-full" style={{ height }}>
      {data.map((value, i) => (
        <div key={labels[i]} className="flex-1 flex flex-col items-center mx-1">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${(value / max) * 100}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="w-6 rounded-t-md"
            style={{ background: colors?.[i] || '#3b82f6', minHeight: 4 }}
          />
          <span className="mt-2 text-xs text-gray-600">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart; 