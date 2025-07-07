import { Component, Prop, h } from '@stencil/core';
import './bar-chart.css';

@Component({
  tag: 'animated-bar-chart',
  styleUrl: 'bar-chart.css',
  shadow: true,
})
export class BarChart {
  @Prop() data: number[] = [];
  @Prop() labels: string[] = [];
  @Prop() colors: string[] = [];
  @Prop() height: number = 240;
  @Prop() title?: string;

  parseArrayProp(prop: any): any[] {
    if (Array.isArray(prop)) return prop;
    if (typeof prop === 'string') {
      try {
        return JSON.parse(prop);
      } catch {
        return prop.split(',');
      }
    }
    return [];
  }

  render() {
    const data = this.parseArrayProp(this.data);
    const labels = this.parseArrayProp(this.labels);
    const colors = this.parseArrayProp(this.colors);
    console.log('BarChart render', { data, labels, colors, title: this.title });
    const max = Math.max(...data, 1);
    return (
      <div class="bar-chart-wrapper">
        {this.title && <div class="chart-title">{this.title}</div>}
        <div class="bar-chart" style={{ height: `${this.height}px` }}>
          {data.map((value, i) => (
            <div class="bar-container" key={labels[i] || i}>
              <div
                class="bar"
                style={{
                  height: `${(value / max) * 100}%`,
                  background: colors[i] || '#3b82f6',
                  transition: 'height 0.8s cubic-bezier(0.4,0,0.2,1)',
                }}
              ></div>
              <span class="bar-label">{labels[i]}</span>
            </div>
          ))}
        </div>
        <slot name="tooltip"></slot>
      </div>
    );
  }
} 