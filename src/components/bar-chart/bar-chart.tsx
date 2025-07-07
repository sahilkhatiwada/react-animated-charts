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

  render() {
    const max = Math.max(...this.data, 1);
    return (
      <div class="bar-chart" style={{ height: `${this.height}px` }}>
        {this.data.map((value, i) => (
          <div class="bar-container" key={i}>
            <div
              class="bar"
              style={{
                height: `${(value / max) * 100}%`,
                background: this.colors[i] || '#3b82f6',
                transition: 'height 0.8s cubic-bezier(0.4,0,0.2,1)',
              }}
            ></div>
            <span class="bar-label">{this.labels[i]}</span>
          </div>
        ))}
      </div>
    );
  }
} 