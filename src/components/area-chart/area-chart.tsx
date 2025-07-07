import { Component, Prop, h } from '@stencil/core';
import './area-chart.css';

@Component({
  tag: 'animated-area-chart',
  styleUrl: 'area-chart.css',
  shadow: true,
})
export class AreaChart {
  @Prop() data: number[] = [];
  @Prop() labels: string[] = [];
  @Prop() color: string = '#3b82f6';
  @Prop() height: number = 240;

  getPoints() {
    const max = Math.max(...this.data, 1);
    return this.data.map((v, i) => `${(i / (this.data.length - 1)) * 100},${100 - (v / max) * 100}`).join(' ');
  }

  getAreaPoints() {
    const points = this.getPoints();
    return `0,100 ${points} 100,100`;
  }

  render() {
    return (
      <div class="area-chart" style={{ height: `${this.height}px` }}>
        <svg viewBox="0 0 100 100" class="chart-svg">
          <polygon
            fill={this.color + '33'}
            points={this.getAreaPoints()}
            style={{ transition: 'all 1s cubic-bezier(0.4,0,0.2,1)' }}
          />
          <polyline
            fill="none"
            stroke={this.color}
            stroke-width="2"
            points={this.getPoints()}
            style={{ transition: 'all 1s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </svg>
        <div class="area-labels">
          {this.labels.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </div>
      </div>
    );
  }
} 