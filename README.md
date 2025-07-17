
# animated-charts

**animated-charts** is a plug-and-play charting library and web component suite for beautiful, animated dashboards. Built with Stencil.js, Tailwind CSS, and Framer Motion, it works seamlessly in React, Angular, Vue, and plain HTML.

- **npm:** [animated-charts](https://www.npmjs.com/package/animated-charts)
- **GitHub:** [github.com/sahilkhatiwada/react-animated-charts](https://github.com/sahilkhatiwada/react-animated-charts)

## Key Features
- **Plug-and-play:** Easy integration with minimal setup.
- **Beautiful Animations:** Powered by Framer Motion for smooth, eye-catching transitions.
- **Modern Design:** Styled with Tailwind CSS for a clean, contemporary look.
- **Mobile-First:** Fully responsive and optimized for all devices.
- **Versatile Chart Types:** Bar, line, donut, and area charts included.
- **Cross-Framework:** Use as a web component in React, Angular, Vue, or plain HTML.
- **No Extra Animation Setup:** Animations work out of the box—no manual configuration required.
- **Real-Time Responsiveness:** Charts adapt instantly to data and layout changes.

---

## Quick Start

### 1. Install via npm (recommended)
```bash
npm install animated-charts
```

### 2. Or use via CDN (for HTML/Vanilla JS)
```html
<script type="module" src="https://unpkg.com/animated-charts/dist/animated-charts/animated-charts.esm.js"></script>
```

---

## Usage

### As Web Components (HTML/Vanilla JS, React, Angular, Vue)

#### HTML Example
```html
<animated-bar-chart data='[30,50,80,40,60]' labels='["Mon","Tue","Wed","Thu","Fri"]' colors='["#3b82f6","#10b981","#f59e42","#ef4444","#6366f1"]' title="Weekly Sales"></animated-bar-chart>
<script type="module" src="/dist/animated-charts/animated-charts.esm.js"></script>
<!-- See more at https://github.com/sahilkhatiwada/react-animated-charts -->
```

#### React Example
```tsx
import { defineCustomElements } from 'animated-charts/loader';
defineCustomElements();

<animated-bar-chart data='[30,50,80,40,60]' labels='["Mon","Tue","Wed","Thu","Fri"]' colors='["#3b82f6","#10b981","#f59e42","#ef4444","#6366f1"]' title="Weekly Sales"></animated-bar-chart>
// More usage: https://github.com/sahilkhatiwada/react-animated-charts
```

#### Angular Example
```ts
import { defineCustomElements } from 'animated-charts/loader';
defineCustomElements();
// See https://github.com/sahilkhatiwada/react-animated-charts for more
```
```html
<animated-bar-chart data='[30,50,80,40,60]' labels='["Mon","Tue","Wed","Thu","Fri"]' colors='["#3b82f6","#10b981","#f59e42","#ef4444","#6366f1"]' title="Weekly Sales"></animated-bar-chart>
<!-- More: https://github.com/sahilkhatiwada/react-animated-charts -->
```

#### Vue Example
```js
import { defineCustomElements } from 'animated-charts/loader';
defineCustomElements();
// See https://github.com/sahilkhatiwada/react-animated-charts for more
```
```html
<animated-bar-chart data='[30,50,80,40,60]' labels='["Mon","Tue","Wed","Thu","Fri"]' colors='["#3b82f6","#10b981","#f59e42","#ef4444","#6366f1"]' title="Weekly Sales"></animated-bar-chart>
<!-- More: https://github.com/sahilkhatiwada/react-animated-charts -->
```

---

## React-Style Usage (JSX Components)

If you want to use the React wrapper components:
```tsx
import { BarChart, LineChart, DonutChart, AreaChart } from 'animated-charts/react';

const barData = [30, 50, 80, 40, 60];
const barLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

<BarChart data={barData} labels={barLabels} />
// More: https://github.com/sahilkhatiwada/react-animated-charts
```

---

## Chart Examples

### BarChart
```html
<animated-bar-chart data='[30,50,80,40,60]' labels='["Mon","Tue","Wed","Thu","Fri"]' colors='["#3b82f6","#10b981","#f59e42","#ef4444","#6366f1"]' title="Weekly Sales"></animated-bar-chart>
<!-- More: https://github.com/sahilkhatiwada/react-animated-charts -->
```

### LineChart
```html
<animated-line-chart data='[10,40,35,70,50]' labels='["Jan","Feb","Mar","Apr","May"]' color="#ef4444" title="Monthly Growth"></animated-line-chart>
<!-- More: https://github.com/sahilkhatiwada/react-animated-charts -->
```

### DonutChart
```html
<animated-donut-chart data='[25,35,20,20]' labels='["A","B","C","D"]' colors='["#3b82f6","#f59e42","#10b981","#ef4444"]' title="Segments"></animated-donut-chart>
<!-- More: https://github.com/sahilkhatiwada/react-animated-charts -->
```

### AreaChart
```html
<animated-area-chart data='[15,30,45,30,60,80,70]' labels='["1","2","3","4","5","6","7"]' color="#6366f1" title="Trend"></animated-area-chart>
<!-- More: https://github.com/sahilkhatiwada/react-animated-charts -->
```

### Heatmap
```html
<animated-heatmap data='[[1,2,3,4],[2,3,4,5],[3,4,5,6],[4,5,6,7]]' width="300" height="300" colors='["#f8f9fa","#dc3545"]'></animated-heatmap>
```
**Props:**
- `data`: 2D array of numbers (required)
- `width`, `height`: number (optional)
- `colors`: array of color strings (optional)
- `animationDuration`: number (ms, optional)

### PieChart
```html
<animated-pie-chart data='[{"value":10,"label":"Red","color":"#ef4444"},{"value":20,"label":"Blue","color":"#3b82f6"},{"value":30,"label":"Green","color":"#10b981"},{"value":40,"label":"Yellow","color":"#f59e42"}]' width="300" height="300"></animated-pie-chart>
```
**Props:**
- `data`: array of objects `{ value, label?, color? }` (required)
- `width`, `height`: number (optional)
- `colors`: array of color strings (optional)
- `animationDuration`: number (ms, optional)

### Histogram
```html
<animated-histogram data='[1,2,2,3,3,3,4,5,5,6,7,8,8,8,9]' bins="6" width="400" height="300"></animated-histogram>
```
**Props:**
- `data`: array of numbers (required)
- `bins`: number (optional)
- `width`, `height`: number (optional)
- `colors`: array of color strings (optional)
- `animationDuration`: number (ms, optional)

### CandlestickChart
```html
<animated-candlestick-chart data='[{"open":10,"close":15,"high":18,"low":8},{"open":15,"close":12,"high":16,"low":10}]' width="400" height="300"></animated-candlestick-chart>
```
**Props:**
- `data`: array of objects `{ open, close, high, low, label? }` (required)
- `width`, `height`: number (optional)
- `colors`: array `[upColor, downColor]` (optional)
- `animationDuration`: number (ms, optional)

### GaugeChart
```html
<animated-gauge-chart value="65" min="0" max="100" width="300" height="180"></animated-gauge-chart>
```
**Props:**
- `value`: number (required)
- `min`, `max`: number (optional)
- `width`, `height`: number (optional)
- `colors`: array of color strings (optional)
- `animationDuration`: number (ms, optional)

### RadarChart
```html
<animated-radar-chart data='[{"label":"A","value":80},{"label":"B","value":60},{"label":"C","value":90},{"label":"D","value":70},{"label":"E","value":50}]' width="350" height="350"></animated-radar-chart>
```
**Props:**
- `data`: array of objects `{ label, value }` (required)
- `maxValue`: number (optional)
- `width`, `height`: number (optional)
- `colors`: array of color strings (optional)
- `animationDuration`: number (ms, optional)

### ScatterPlot
```html
<animated-scatter-plot data='[{"x":1,"y":2,"label":"P1"},{"x":2,"y":3,"label":"P2"},{"x":3,"y":1,"label":"P3"},{"x":4,"y":4,"label":"P4"}]' width="500" height="350"></animated-scatter-plot>
```
**Props:**
- `data`: array of objects `{ x, y, r?, color?, label? }` (required)
- `width`, `height`: number (optional)
- `colors`: array of color strings (optional)
- `animationDuration`: number (ms, optional)
- `xLabel`, `yLabel`: string (optional)

### BubbleChart
```html
<animated-bubble-chart data='[{"x":1,"y":2,"r":10,"label":"B1"},{"x":2,"y":3,"r":15,"label":"B2"},{"x":3,"y":1,"r":8,"label":"B3"},{"x":4,"y":4,"r":12,"label":"B4"}]' width="500" height="350"></animated-bubble-chart>
```
**Props:**
- `data`: array of objects `{ x, y, r, color?, label? }` (required)
- `width`, `height`: number (optional)
- `colors`: array of color strings (optional)
- `animationDuration`: number (ms, optional)
- `xLabel`, `yLabel`: string (optional)

---

## Features

### Chart Title
All chart components accept a `title` prop to display a heading above the chart.

### Custom Tooltip Slot
You can provide a custom tooltip by using a named slot:
```html
<animated-bar-chart ...>
  <span slot="tooltip">Custom tooltip content here</span>
</animated-bar-chart>
<!-- More: https://github.com/sahilkhatiwada/react-animated-charts -->
```

### Responsive Resizing
Charts automatically resize to fit their container, making them mobile-friendly and adaptive to layout changes.

---

## Troubleshooting & FAQ

- **Web components not rendering in React/Angular/Vue?**
  - Make sure to call `defineCustomElements()` from the loader in your app entry point.
- **Props not updating?**
  - For web components, pass props as strings (e.g., `data='[1,2,3]'`).
- **Styles not applying?**
  - Ensure Tailwind CSS is included in your project if you want to customize styles.
- **TypeScript errors in React?**
  - Add `/// <reference types="animated-charts" />` to your `global.d.ts` or use the provided React wrappers.
- **More help:** [github.com/sahilkhatiwada/react-animated-charts](https://github.com/sahilkhatiwada/react-animated-charts)

---

## Community Standards

- Please see our [Contributing Guide](https://github.com/sahilkhatiwada/react-animated-charts/blob/master/CONTRIBUTING.md) for how to get involved.
- We follow a [Code of Conduct](https://github.com/sahilkhatiwada/react-animated-charts/blob/master/CODE_OF_CONDUCT.md) to foster a welcoming and respectful community.
- Project repo: [github.com/sahilkhatiwada/react-animated-charts](https://github.com/sahilkhatiwada/react-animated-charts)

---

## License

MIT

---

## All Chart Examples (React)

```tsx
import { BarChart, LineChart, DonutChart, AreaChart } from 'animated-charts/react';
import { Heatmap } from './src/components/heatmap/heatmap';
import { PieChart } from './src/components/pie-chart/pie-chart';
import { Histogram } from './src/components/histogram/histogram';
import { CandlestickChart } from './src/components/candlestick-chart/candlestick-chart';
import { GaugeChart } from './src/components/gauge-chart/gauge-chart';
import { RadarChart } from './src/components/radar-chart/radar-chart';
import { ScatterPlot } from './src/components/scatter-plot/scatter-plot';
import { BubbleChart } from './src/components/bubble-chart/bubble-chart';

const barData = [30, 50, 80, 40, 60];
const barLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const lineData = [10, 40, 35, 70, 50];
const lineLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const donutData = [25, 35, 20, 20];
const donutLabels = ['A', 'B', 'C', 'D'];
const donutColors = ['#3b82f6', '#f59e42', '#10b981', '#ef4444'];
const areaData = [15, 30, 45, 30, 60, 80, 70];
const areaLabels = ['1', '2', '3', '4', '5', '6', '7'];
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
    <div>
      <BarChart data={barData} labels={barLabels} />
      <LineChart data={lineData} labels={lineLabels} />
      <DonutChart data={donutData} labels={donutLabels} colors={donutColors} />
      <AreaChart data={areaData} labels={areaLabels} />
      <Heatmap data={heatmapData} />
      <PieChart data={pieData} />
      <Histogram data={histogramData} bins={6} />
      <CandlestickChart data={candlestickData} />
      <GaugeChart value={gaugeValue} />
      <RadarChart data={radarData} />
      <ScatterPlot data={scatterData} />
      <BubbleChart data={bubbleData} />
    </div>
  );
}
```
