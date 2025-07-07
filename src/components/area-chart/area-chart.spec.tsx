import { newSpecPage } from '@stencil/core/testing';
import { AreaChart } from './area-chart';

describe('animated-area-chart', () => {
  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      template: () => <animated-area-chart data={[10,20,30]} labels={["A","B","C"]} title="Area Chart" />
    });
    expect(page.root).toBeTruthy();
    const title = page.root.querySelector('.chart-title');
    expect(title).toBeTruthy();
    expect(title?.textContent).toBe('Area Chart');
    expect(page.root.querySelectorAll('polygon').length).toBe(1);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      template: () => <animated-area-chart><span slot="tooltip">Tip</span></animated-area-chart>
    });
    expect(page.root.querySelector('[slot="tooltip"]').textContent).toBe('Tip');
  });

  it('applies custom color', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      template: () => <animated-area-chart data={[10,20]} labels={["A","B"]} color="#ff0000" />
    });
    const polygon = page.root.querySelector('polygon');
    expect(polygon).toBeTruthy();
    expect(polygon.getAttribute('fill')).toContain('#ff000033');
  });

  it('is accessible', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      template: () => <animated-area-chart data={[10,20]} labels={["A","B"]} title="Accessible Chart" />
    });
    expect(page.root.querySelector('.area-chart-wrapper')).toBeTruthy();
    // Add role and aria-label checks if implemented
  });

  it('resizes responsively', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      template: () => <animated-area-chart data={[10,20]} labels={["A","B"]} />
    });
    const wrapper = page.root.querySelector('.area-chart-wrapper');
    expect(wrapper).toBeTruthy();
    expect(wrapper.style.width).toBe('100%');
  });
}); 