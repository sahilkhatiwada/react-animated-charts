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

  it('applies custom color', async () => {
    const page = await newSpecPage({
      components: [LineChart],
      html: `<animated-line-chart data='[10,20]' labels='["A","B"]' color="#ff0000"></animated-line-chart>`
    });
    const polyline = page.root.querySelector('polyline');
    expect(polyline.getAttribute('stroke')).toBe('#ff0000');
  });

  it('is accessible', async () => {
    const page = await newSpecPage({
      components: [LineChart],
      html: `<animated-line-chart data='[10,20]' labels='["A","B"]' title="Accessible Chart"></animated-line-chart>`
    });
    expect(page.root.querySelector('.line-chart-wrapper')).toBeTruthy();
    // Add role and aria-label checks if implemented
  });

  it('resizes responsively', async () => {
    const page = await newSpecPage({
      components: [LineChart],
      html: `<animated-line-chart data='[10,20]' labels='["A","B"]'></animated-line-chart>`
    });
    const wrapper = page.root.querySelector('.line-chart-wrapper');
    expect(wrapper.style.width).toBe('100%');
  });
}); 