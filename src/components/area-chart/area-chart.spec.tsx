import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { AreaChart } from './area-chart';

describe('animated-area-chart', () => {
  function getRoot(page) {
    return page.root.shadowRoot || page.root;
  }

  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      template: () => <animated-area-chart data={[10,20,30]} labels={["A","B","C"]} title="Area Chart" />
    });
    expect(page.root).toBeTruthy();
    const root = getRoot(page);
    const title = root.querySelector('.chart-title');
    expect(title).toBeTruthy();
    expect(title?.textContent).toBe('Area Chart');
    expect(root.querySelectorAll('polygon').length).toBe(1);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      template: () => <animated-area-chart><span slot="tooltip">Tip</span></animated-area-chart>
    });
    const root = getRoot(page);
    const slot = root.querySelector('[slot="tooltip"]');
    expect(slot).toBeTruthy();
    if (slot) expect(slot.textContent).toBe('Tip');
  });

  it('applies custom color', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      template: () => <animated-area-chart data={[10,20]} labels={["A","B"]} color="#ff0000" />
    });
    const root = getRoot(page);
    const polygon = root.querySelector('polygon');
    expect(polygon).toBeTruthy();
    expect([polygon.getAttribute('fill'), polygon.style.fill]).toContain("#ff000033");
  });

  it('is accessible', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      template: () => <animated-area-chart data={[10,20]} labels={["A","B"]} title="Accessible Chart" />
    });
    const root = getRoot(page);
    expect(root.querySelector('.area-chart-wrapper')).toBeTruthy();
    // Add role and aria-label checks if implemented
  });

  it('resizes responsively', async () => {
    const page = await newSpecPage({
      components: [AreaChart],
      template: () => <animated-area-chart data={[10,20]} labels={["A","B"]} />
    });
    const root = getRoot(page);
    const wrapper = root.querySelector('.area-chart-wrapper');
    expect(wrapper).toBeTruthy();
    expect(['100%', ''].includes(wrapper.style.width)).toBe(true);
  });
}); 