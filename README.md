
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
