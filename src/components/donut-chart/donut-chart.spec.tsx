import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { DonutChart } from './donut-chart';

describe('animated-donut-chart', () => {
  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      template: () => <animated-donut-chart data={[10,20,30]} labels={["A","B","C"]} title="Donut Chart" />
    });
    expect(page.root).toBeTruthy();
    const title = page.root.querySelector('.chart-title');
    expect(title).toBeTruthy();
    expect(title?.textContent).toBe('Donut Chart');
    expect(page.root.querySelectorAll('circle').length).toBe(3);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      template: () => <animated-donut-chart><span slot="tooltip">Tip</span></animated-donut-chart>
    });
    expect(page.root.querySelector('[slot="tooltip"]').textContent).toBe('Tip');
  });

  it('applies custom colors', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      template: () => <animated-donut-chart data={[10,20]} labels={["A","B"]} colors={["#ff0000","#00ff00"]} />
    });
    const circles = page.root.querySelectorAll('circle');
    expect(circles.length).toBe(2);
    expect(circles[0].getAttribute('stroke')).toBe('#ff0000');
    expect(circles[1].getAttribute('stroke')).toBe('#00ff00');
  });

  it('is accessible', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      template: () => <animated-donut-chart data={[10,20]} labels={["A","B"]} title="Accessible Chart" />
    });
    expect(page.root.querySelector('.donut-chart-wrapper')).toBeTruthy();
  });

  it('resizes responsively', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      template: () => <animated-donut-chart data={[10,20]} labels={["A","B"]} />
    });
    const wrapper = page.root.querySelector('.donut-chart-wrapper');
    expect(wrapper).toBeTruthy();
    expect(wrapper.style.width).toBe('100%');
  });
}); 