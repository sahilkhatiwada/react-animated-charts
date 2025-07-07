import { newSpecPage } from '@stencil/core/testing';
import { AreaChart } from './area-chart';

describe('animated-area-chart', () => {
  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      html: `<animated-area-chart data='[10,20,30]' labels='["A","B","C"]' title="Area Chart"></animated-area-chart>`
    });
    expect(page.root).toBeTruthy();
    expect(page.root.querySelector('.chart-title').textContent).toBe('Area Chart');
    expect(page.root.querySelectorAll('polygon').length).toBe(1);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      html: `<animated-area-chart><span slot="tooltip">Tip</span></animated-area-chart>`
    });
    expect(page.root.querySelector('[slot="tooltip"]').textContent).toBe('Tip');
  });
}); 