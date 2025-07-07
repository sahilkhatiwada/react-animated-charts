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
}); 