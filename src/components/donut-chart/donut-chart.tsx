import { Component, Prop, h } from '@stencil/core';
import './donut-chart.css';

@Component({
  tag: 'animated-donut-chart',
  styleUrl: 'donut-chart.css',
  shadow: true,
})
export class DonutChart {
  @Prop() data: number[] = [];
  @Prop() labels: string[] = [];
  @Prop() colors: string[] = [];
  @Prop() size: number = 120;
  @Prop() strokeWidth: number = 16;

  render() {
    const total = this.data.reduce((a, b) => a + b, 0) || 1;
    let offset = 0;
    const radius = (this.size - this.strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    return (
      <div class="donut-chart">
        <svg width={this.size} height={this.size} viewBox={`0 0 ${this.size} ${this.size}`}>
          {this.data.map((value, i) => {
            const dash = (value / total) * circumference;
            const dashArray = `${dash} ${circumference - dash}`;
            const circleOffset = offset;
            offset += dash;
            return (
              <circle
                key={i}
                cx={this.size / 2}
                cy={this.size / 2}
                r={radius}
                fill="none"
                stroke={this.colors[i] || '#3b82f6'}
                stroke-width={this.strokeWidth}
                stroke-dasharray={dashArray}
                stroke-dashoffset={-circleOffset}
                style={{ transition: 'stroke-dasharray 1s cubic-bezier(0.4,0,0.2,1)' }}
              />
            );
          })}
        </svg>
        <div class="donut-labels">
          {this.labels.map((l, i) => (
            <span key={i} class="donut-legend">
              <span class="donut-dot" style={{ background: this.colors[i] || '#3b82f6' }}></span>
              {l}
            </span>
          ))}
        </div>
      </div>
    );
  }
} 