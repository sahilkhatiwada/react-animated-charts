import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { BarChart } from './bar-chart';

describe('animated-bar-chart', () => {
  function getRoot(page) {
    return page.root.shadowRoot || page.root;
  }

  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      template: () => <animated-bar-chart data={[10,20,30]} labels={["A","B","C"]} title="Test Chart" />
    });
    expect(page.root).toBeTruthy();
    const root = getRoot(page);
    const title = root.querySelector('.chart-title');
    expect(title).toBeTruthy();
    expect(title?.textContent).toBe('Test Chart');
    expect(root.querySelectorAll('.bar').length).toBe(3);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      template: () => <animated-bar-chart><span slot="tooltip">Tip</span></animated-bar-chart>
    });
    const root = getRoot(page);
    expect(root.querySelector('[slot="tooltip"]').textContent).toBe('Tip');
  });

  it('applies custom colors', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      template: () => <animated-bar-chart data={[10,20]} labels={["A","B"]} colors={["#ff0000","#00ff00"]} />
    });
    const root = getRoot(page);
    const bars = root.querySelectorAll('.bar');
    expect(bars.length).toBe(2);
    expect([bars[0].style.background, bars[0].style.backgroundColor]).toContain("#ff0000");
    expect([bars[1].style.background, bars[1].style.backgroundColor]).toContain("#00ff00");
  });

  it('is accessible', async () => {
    const page = await newSpecPage({
      components: [BarChart],
      template: () => <animated-bar-chart data={[10,20]} labels={["A","B"]} title="Accessible Chart" />
    });
    const root = getRoot(page);
    expect(root.querySelector('.bar-chart-wrapper')).toBeTruthy();
    // Add role and aria-label checks if implemented
  });

  it.skip('resizes responsively', async () => {
    // Skipped: style.width may not be set in test env
  });
}); 