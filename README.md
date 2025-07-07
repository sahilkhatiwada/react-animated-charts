[![npm version](https://img.shields.io/npm/v/animated-charts.svg)](https://www.npmjs.com/package/animated-charts)
[![Build Status](https://github.com/sahilkhatiwada/animated-charts/actions/workflows/ci.yml/badge.svg)](https://github.com/sahilkhatiwada/animated-charts/actions)
[![codecov](https://codecov.io/gh/sahilkhatiwada/animated-charts/branch/main/graph/badge.svg)](https://codecov.io/gh/sahilkhatiwada/animated-charts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Changelog](https://img.shields.io/github/v/release/sahilkhatiwada/animated-charts?label=changelog)](https://github.com/sahilkhatiwada/animated-charts/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/sahilkhatiwada/animated-charts/pulls)
[![Contributors](https://img.shields.io/github/contributors/sahilkhatiwada/animated-charts.svg)](https://github.com/sahilkhatiwada/animated-charts/graphs/contributors)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

---

**Repository:** [github.com/sahilkhatiwada/animated-charts](https://github.com/sahilkhatiwada/animated-charts)

# react-animated-charts

**react-animated-charts** is a plug-and-play charting library designed to bring dashboards to life. Built with Tailwind CSS and Framer Motion, this package enables developers to quickly create stunning, mobile-responsive data visualizations with smooth, built-in animations.

Whether you're building bar, line, donut, or area charts, `react-animated-charts` offers beautiful, modern components that work seamlessly out of the box. Perfect for developers who want both aesthetics and simplicity, this library is tailored for dashboards and data-heavy apps that need to impress.

## Key Features
- **Plug-and-play:** Easy integration with minimal setup.
- **Beautiful Animations:** Powered by Framer Motion for smooth, eye-catching transitions.
- **Modern Design:** Styled with Tailwind CSS for a clean, contemporary look.
- **Mobile-First:** Fully responsive and optimized for all devices.
- **Versatile Chart Types:** Bar, line, donut, and area charts included.
- **No Extra Animation Setup:** Animations work out of the box—no manual configuration required.
- **Real-Time Responsiveness:** Charts adapt instantly to data and layout changes.

## Why Choose react-animated-charts?
- Perfect for dashboards and data-heavy applications.
- Built for developers who value both aesthetics and simplicity.
- Designed to go viral in the developer community.

---

## Getting Started

_Coming soon: Installation and usage instructions._

---

## License

MIT 

## Installation

```bash
npm install react-animated-charts
```

> **Note:** This library requires React, Tailwind CSS, and Framer Motion as peer dependencies. Make sure they are installed in your project:
>
> ```bash
> npm install react tailwindcss framer-motion
> ```

## Usage

Import the chart components and use them in your React app:

```tsx
import { BarChart, LineChart, DonutChart, AreaChart } from 'react-animated-charts';

const barData = [30, 50, 80, 40, 60];
const barLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

<BarChart data={barData} labels={barLabels} />
```

### BarChart Example
```tsx
<BarChart data={[30, 50, 80, 40, 60]} labels={["Mon", "Tue", "Wed", "Thu", "Fri"]} colors={["#3b82f6", "#10b981", "#f59e42", "#ef4444", "#6366f1"]} />
```

### LineChart Example
```tsx
<LineChart data={[10, 40, 35, 70, 50]} labels={["Jan", "Feb", "Mar", "Apr", "May"]} color="#ef4444" />
```

### DonutChart Example
```tsx
<DonutChart data={[25, 35, 20, 20]} labels={["A", "B", "C", "D"]} colors={["#3b82f6", "#f59e42", "#10b981", "#ef4444"]} />
```

### AreaChart Example
```tsx
<AreaChart data={[15, 30, 45, 30, 60, 80, 70]} labels={["1", "2", "3", "4", "5", "6", "7"]} color="#6366f1" />
```

## Usage Examples

### HTML/Vanilla JS
```html
<animated-bar-chart data='[30,50,80,40,60]' labels='["Mon","Tue","Wed","Thu","Fri"]' colors='["#3b82f6","#10b981","#f59e42","#ef4444","#6366f1"]' title="Weekly Sales"></animated-bar-chart>
<animated-line-chart data='[10,40,35,70,50]' labels='["Jan","Feb","Mar","Apr","May"]' color="#ef4444" title="Monthly Growth"></animated-line-chart>
<animated-donut-chart data='[25,35,20,20]' labels='["A","B","C","D"]' colors='["#3b82f6","#f59e42","#10b981","#ef4444"]' title="Segments"></animated-donut-chart>
<animated-area-chart data='[15,30,45,30,60,80,70]' labels='["1","2","3","4","5","6","7"]' color="#6366f1" title="Trend"></animated-area-chart>
<script type="module" src="/dist/animated-charts/animated-charts.esm.js"></script>
```

### React
```tsx
import { defineCustomElements } from 'animated-charts/loader';
defineCustomElements();

<animated-bar-chart data='[30,50,80,40,60]' labels='["Mon","Tue","Wed","Thu","Fri"]' colors='["#3b82f6","#10b981","#f59e42","#ef4444","#6366f1"]' title="Weekly Sales"></animated-bar-chart>
<animated-line-chart data='[10,40,35,70,50]' labels='["Jan","Feb","Mar","Apr","May"]' color="#ef4444" title="Monthly Growth"></animated-line-chart>
<animated-donut-chart data='[25,35,20,20]' labels='["A","B","C","D"]' colors='["#3b82f6","#f59e42","#10b981","#ef4444"]' title="Segments"></animated-donut-chart>
<animated-area-chart data='[15,30,45,30,60,80,70]' labels='["1","2","3","4","5","6","7"]' color="#6366f1" title="Trend"></animated-area-chart>
```

### Angular
```ts
import { defineCustomElements } from 'animated-charts/loader';
defineCustomElements();
```
```html
<animated-bar-chart data='[30,50,80,40,60]' labels='["Mon","Tue","Wed","Thu","Fri"]' colors='["#3b82f6","#10b981","#f59e42","#ef4444","#6366f1"]' title="Weekly Sales"></animated-bar-chart>
<animated-line-chart data='[10,40,35,70,50]' labels='["Jan","Feb","Mar","Apr","May"]' color="#ef4444" title="Monthly Growth"></animated-line-chart>
<animated-donut-chart data='[25,35,20,20]' labels='["A","B","C","D"]' colors='["#3b82f6","#f59e42","#10b981","#ef4444"]' title="Segments"></animated-donut-chart>
<animated-area-chart data='[15,30,45,30,60,80,70]' labels='["1","2","3","4","5","6","7"]' color="#6366f1" title="Trend"></animated-area-chart>
```

### Vue
```js
import { defineCustomElements } from 'animated-charts/loader';
defineCustomElements();
```
```html
<animated-bar-chart data='[30,50,80,40,60]' labels='["Mon","Tue","Wed","Thu","Fri"]' colors='["#3b82f6","#10b981","#f59e42","#ef4444","#6366f1"]' title="Weekly Sales"></animated-bar-chart>
<animated-line-chart data='[10,40,35,70,50]' labels='["Jan","Feb","Mar","Apr","May"]' color="#ef4444" title="Monthly Growth"></animated-line-chart>
<animated-donut-chart data='[25,35,20,20]' labels='["A","B","C","D"]' colors='["#3b82f6","#f59e42","#10b981","#ef4444"]' title="Segments"></animated-donut-chart>
<animated-area-chart data='[15,30,45,30,60,80,70]' labels='["1","2","3","4","5","6","7"]' color="#6366f1" title="Trend"></animated-area-chart>
```

---

## New Features

### Chart Title
All chart components now accept a `title` prop to display a heading above the chart.

### Custom Tooltip Slot
You can provide a custom tooltip by using a named slot:
```html
<animated-bar-chart ...>
  <span slot="tooltip">Custom tooltip content here</span>
</animated-bar-chart>
```

### Responsive Resizing
Charts automatically resize to fit their container, making them mobile-friendly and adaptive to layout changes.

---

## Community Standards

- Please see our [Contributing Guide](CONTRIBUTING.md) for how to get involved.
- We follow a [Code of Conduct](CODE_OF_CONDUCT.md) to foster a welcoming and respectful community.
