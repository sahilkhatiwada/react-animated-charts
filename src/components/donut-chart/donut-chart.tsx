import { Component, Prop, h, Element } from '@stencil/core';
import './donut-chart.css';

@Component({
  tag: 'animated-donut-chart',
  styleUrl: 'donut-chart.css',
  shadow: true,
})
export class DonutChart {
  @Element() el: HTMLElement;
  @Prop() data: number[] = [];
  @Prop() labels: string[] = [];
  @Prop() colors: string[] = [];
  @Prop() size: number = 120;
  @Prop() strokeWidth: number = 16;
  @Prop() chartTitle?: string;

  componentDidLoad() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = () => {
    if (this.el) {
      this.el.style.width = '100%';
    }
  };

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
    const total = data.reduce((a, b) => a + b, 0) || 1;
    let offset = 0;
    const radius = (this.size - this.strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    return (
      <div class="donut-chart-wrapper">
        {this.chartTitle && <div class="chart-title">{this.chartTitle}</div>}
        <div class="donut-chart">
          <svg width={this.size} height={this.size} viewBox={`0 0 ${this.size} ${this.size}`}>
            {data.map((value, i) => {
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
                  stroke={colors[i] || '#3b82f6'}
                  stroke-width={this.strokeWidth}
                  stroke-dasharray={dashArray}
                  stroke-dashoffset={-circleOffset}
                  style={{ transition: 'stroke-dasharray 1s cubic-bezier(0.4,0,0.2,1)' }}
                />
              );
            })}
          </svg>
          <div class="donut-labels">
            {labels.map((l, i) => (
              <span key={i} class="donut-legend">
                <span class="donut-dot" style={{ background: colors[i] || '#3b82f6' }}></span>
                {l}
              </span>
            ))}
          </div>
        </div>
        <slot name="tooltip"></slot>
      </div>
    );
  }
} 