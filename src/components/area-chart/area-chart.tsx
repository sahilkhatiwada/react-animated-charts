import { Component, Prop, h, Element } from '@stencil/core';
import './area-chart.css';

@Component({
  tag: 'animated-area-chart',
  styleUrl: 'area-chart.css',
  shadow: true,
})
export class AreaChart {
  @Element() el: HTMLElement;
  @Prop() data: number[] = [];
  @Prop() labels: string[] = [];
  @Prop() color: string = '#3b82f6';
  @Prop() height: number = 240;
  @Prop() title?: string;

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

  getPoints() {
    const data = this.parseArrayProp(this.data);
    const max = Math.max(...data, 1);
    return data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 100}`).join(' ');
  }

  getAreaPoints() {
    const points = this.getPoints();
    return `0,100 ${points} 100,100`;
  }

  render() {
    const data = this.parseArrayProp(this.data);
    const labels = this.parseArrayProp(this.labels);
    return (
      <div class="area-chart-wrapper">
        {this.title && <div class="chart-title">{this.title}</div>}
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
            {labels.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
        </div>
        <slot name="tooltip"></slot>
      </div>
    );
  }
} 