import React from 'react';
import { BarChart, LineChart, DonutChart, AreaChart } from '../src';

const barData = [30, 50, 80, 40, 60];
const barLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const lineData = [10, 40, 35, 70, 50];
const lineLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const donutData = [25, 35, 20, 20];
const donutLabels = ['A', 'B', 'C', 'D'];
const donutColors = ['#3b82f6', '#f59e42', '#10b981', '#ef4444'];
const areaData = [15, 30, 45, 30, 60, 80, 70];
const areaLabels = ['1', '2', '3', '4', '5', '6', '7'];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">react-animated-charts Demo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
          <BarChart data={barData} labels={barLabels} colors={["#3b82f6", "#10b981", "#f59e42", "#ef4444", "#6366f1"]} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
          <LineChart data={lineData} labels={lineLabels} color="#ef4444" />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Donut Chart</h2>
          <DonutChart data={donutData} labels={donutLabels} colors={donutColors} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Area Chart</h2>
          <AreaChart data={areaData} labels={areaLabels} color="#6366f1" />
        </div>
      </div>
    </div>
  );
} 