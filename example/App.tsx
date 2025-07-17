import React from 'react';
import { BarChart, LineChart, DonutChart, AreaChart } from '../src';
import { Heatmap } from '../src/components/heatmap/heatmap';
import { PieChart } from '../src/components/pie-chart/pie-chart';
import { Histogram } from '../src/components/histogram/histogram';
import { CandlestickChart } from '../src/components/candlestick-chart/candlestick-chart';
import { GaugeChart } from '../src/components/gauge-chart/gauge-chart';
import { RadarChart } from '../src/components/radar-chart/radar-chart';
import { ScatterPlot } from '../src/components/scatter-plot/scatter-plot';
import { BubbleChart } from '../src/components/bubble-chart/bubble-chart';

const barData = [30, 50, 80, 40, 60];
const barLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const lineData = [10, 40, 35, 70, 50];
const lineLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const donutData = [25, 35, 20, 20];
const donutLabels = ['A', 'B', 'C', 'D'];
const donutColors = ['#3b82f6', '#f59e42', '#10b981', '#ef4444'];
const areaData = [15, 30, 45, 30, 60, 80, 70];
const areaLabels = ['1', '2', '3', '4', '5', '6', '7'];

// Sample data for new charts
const heatmapData = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
];
const pieData = [
  { value: 10, label: 'Red', color: '#ef4444' },
  { value: 20, label: 'Blue', color: '#3b82f6' },
  { value: 30, label: 'Green', color: '#10b981' },
  { value: 40, label: 'Yellow', color: '#f59e42' },
];
const histogramData = [1, 2, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 8, 8, 9];
const candlestickData = [
  { open: 10, close: 15, high: 18, low: 8 },
  { open: 15, close: 12, high: 16, low: 10 },
  { open: 12, close: 18, high: 20, low: 11 },
  { open: 18, close: 17, high: 21, low: 15 },
];
const gaugeValue = 65;
const radarData = [
  { label: 'A', value: 80 },
  { label: 'B', value: 60 },
  { label: 'C', value: 90 },
  { label: 'D', value: 70 },
  { label: 'E', value: 50 },
];
const scatterData = [
  { x: 1, y: 2, label: 'P1' },
  { x: 2, y: 3, label: 'P2' },
  { x: 3, y: 1, label: 'P3' },
  { x: 4, y: 4, label: 'P4' },
];
const bubbleData = [
  { x: 1, y: 2, r: 10, label: 'B1' },
  { x: 2, y: 3, r: 15, label: 'B2' },
  { x: 3, y: 1, r: 8, label: 'B3' },
  { x: 4, y: 4, r: 12, label: 'B4' },
];

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
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Heatmap</h2>
          <Heatmap data={heatmapData} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
          <PieChart data={pieData} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Histogram</h2>
          <Histogram data={histogramData} bins={6} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Candlestick Chart</h2>
          <CandlestickChart data={candlestickData} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Gauge Chart</h2>
          <GaugeChart value={gaugeValue} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Radar Chart</h2>
          <RadarChart data={radarData} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Scatter Plot</h2>
          <ScatterPlot data={scatterData} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Bubble Chart</h2>
          <BubbleChart data={bubbleData} />
        </div>
      </div>
    </div>
  );
} 