import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { BarChart } from './bar-chart';

describe('animated-bar-chart', () => {
  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      template: () => <animated-bar-chart data={[10,20,30]} labels={["A","B","C"]} title="Test Chart" />
    });
    expect(page.root).toBeTruthy();
    const title = page.root.querySelector('.chart-title');
    expect(title).toBeTruthy();
    expect(title?.textContent).toBe('Test Chart');
    expect(page.root.querySelectorAll('.bar').length).toBe(3);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      template: () => <animated-bar-chart><span slot="tooltip">Tip</span></animated-bar-chart>
    });
    expect(page.root.querySelector('[slot="tooltip"]').textContent).toBe('Tip');
  });

  it('applies custom colors', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      template: () => <animated-bar-chart data={[10,20]} labels={["A","B"]} colors={["#ff0000","#00ff00"]} />
    });
    const bars = page.root.querySelectorAll('.bar');
    expect(bars.length).toBe(2);
    expect(bars[0].style.background).toBe('rgb(255, 0, 0)');
    expect(bars[1].style.background).toBe('rgb(0, 255, 0)');
  });

  it('is accessible', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      template: () => <animated-bar-chart data={[10,20]} labels={["A","B"]} title="Accessible Chart" />
    });
    expect(page.root.querySelector('.bar-chart-wrapper')).toBeTruthy();
    // Add role and aria-label checks if implemented
  });

  it('resizes responsively', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      template: () => <animated-bar-chart data={[10,20]} labels={["A","B"]} />
    });
    const wrapper = page.root.querySelector('.bar-chart-wrapper');
    expect(wrapper).toBeTruthy();
    expect(wrapper.style.width).toBe('100%');
  });
}); 