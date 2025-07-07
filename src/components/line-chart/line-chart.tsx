import { Component, Prop, h, Element } from '@stencil/core';
import './line-chart.css';

@Component({
  tag: 'animated-line-chart',
  styleUrl: 'line-chart.css',
  shadow: true,
})
export class LineChart {
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

  getPoints() {
    const max = Math.max(...this.data, 1);
    return this.data.map((v, i) => `${(i / (this.data.length - 1)) * 100},${100 - (v / max) * 100}`).join(' ');
  }

  render() {
    return (
      <div class="line-chart-wrapper">
        {this.title && <div class="chart-title">{this.title}</div>}
        <div class="line-chart" style={{ height: `${this.height}px` }}>
          <svg viewBox="0 0 100 100" class="chart-svg">
            <polyline
              fill="none"
              stroke={this.color}
              stroke-width="2"
              points={this.getPoints()}
              style={{ transition: 'all 1s cubic-bezier(0.4,0,0.2,1)' }}
            />
            {this.data.map((v, i) => (
              <circle
                key={i}
                cx={(i / (this.data.length - 1)) * 100}
                cy={100 - (v / Math.max(...this.data, 1)) * 100}
                r={2.5}
                fill={this.color}
              />
            ))}
          </svg>
          <div class="line-labels">
            {this.labels.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
        </div>
        <slot name="tooltip"></slot>
      </div>
    );
  }
} 