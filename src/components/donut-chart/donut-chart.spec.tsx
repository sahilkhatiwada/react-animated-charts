import { newSpecPage } from '@stencil/core/testing';
import { DonutChart } from './donut-chart';

describe('animated-donut-chart', () => {
  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      html: `<animated-donut-chart data='[10,20,30]' labels='["A","B","C"]' title="Donut Chart"></animated-donut-chart>`
    });
    expect(page.root).toBeTruthy();
    expect(page.root.querySelector('.chart-title').textContent).toBe('Donut Chart');
    expect(page.root.querySelectorAll('circle').length).toBe(3);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      html: `<animated-donut-chart><span slot="tooltip">Tip</span></animated-donut-chart>`
    });
    expect(page.root.querySelector('[slot="tooltip"]').textContent).toBe('Tip');
  });

  it('applies custom colors', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      html: `<animated-donut-chart data='[10,20]' labels='["A","B"]' colors='["#ff0000","#00ff00"]'></animated-donut-chart>`
    });
    const circles = page.root.querySelectorAll('circle');
    expect(circles[0].getAttribute('stroke')).toBe('#ff0000');
    expect(circles[1].getAttribute('stroke')).toBe('#00ff00');
  });

  it('is accessible', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      html: `<animated-donut-chart data='[10,20]' labels='["A","B"]' title="Accessible Chart"></animated-donut-chart>`
    });
    expect(page.root.querySelector('.donut-chart-wrapper')).toBeTruthy();
    // Add role and aria-label checks if implemented
  });

  it('resizes responsively', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      html: `<animated-donut-chart data='[10,20]' labels='["A","B"]'></animated-donut-chart>`
    });
    const wrapper = page.root.querySelector('.donut-chart-wrapper');
    expect(wrapper.style.width).toBe('100%');
  });
}); 