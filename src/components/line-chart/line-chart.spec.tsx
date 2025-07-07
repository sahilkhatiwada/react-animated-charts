import { newSpecPage } from '@stencil/core/testing';
import { LineChart } from './line-chart';

describe('animated-line-chart', () => {
  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [LineChart],
      html: `<animated-line-chart data='[10,20,30]' labels='["A","B","C"]' title="Line Chart"></animated-line-chart>`
    });
    expect(page.root).toBeTruthy();
    expect(page.root.querySelector('.chart-title').textContent).toBe('Line Chart');
    expect(page.root.querySelectorAll('polyline').length).toBe(1);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [LineChart],
      html: `<animated-line-chart><span slot="tooltip">Tip</span></animated-line-chart>`
    });
    expect(page.root.querySelector('[slot="tooltip"]').textContent).toBe('Tip');
  });
}); 