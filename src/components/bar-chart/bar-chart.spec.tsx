import { newSpecPage } from '@stencil/core/testing';
import { BarChart } from './bar-chart';

describe('animated-bar-chart', () => {
  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      html: `<animated-bar-chart data='[10,20,30]' labels='["A","B","C"]' title="Test Chart"></animated-bar-chart>`
    });
    expect(page.root).toBeTruthy();
    expect(page.root.querySelector('.chart-title').textContent).toBe('Test Chart');
    expect(page.root.querySelectorAll('.bar').length).toBe(3);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      html: `<animated-bar-chart><span slot="tooltip">Tip</span></animated-bar-chart>`
    });
    expect(page.root.querySelector('[slot="tooltip"]').textContent).toBe('Tip');
  });
}); 