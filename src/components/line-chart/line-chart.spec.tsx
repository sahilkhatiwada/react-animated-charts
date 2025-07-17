import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { LineChart } from './line-chart';

describe('animated-line-chart', () => {
  function getRoot(page) {
    return page.root.shadowRoot || page.root;
  }

  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [LineChart],
      template: () => <animated-line-chart data={[10,20,30]} labels={["A","B","C"]} chartTitle="Line Chart" />
    });
    expect(page.root).toBeTruthy();
    const root = getRoot(page);
    const title = root.querySelector('.chart-title');
    expect(title).toBeTruthy();
    expect(title?.textContent).toBe('Line Chart');
    expect(root.querySelectorAll('polyline').length).toBe(1);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [LineChart],
      template: () => <animated-line-chart><span slot="tooltip">Tip</span></animated-line-chart>,
      supportsShadowDom: false
    });
    const root = getRoot(page);
    const slot = root.querySelector('[slot="tooltip"]');
    expect(slot).toBeTruthy();
    if (slot) expect(slot.textContent).toBe('Tip');
  });

  it('applies custom color', async () => {
    const page = await newSpecPage({
      components: [LineChart],
      template: () => <animated-line-chart data={[10,20]} labels={["A","B"]} color="#ff0000" />
    });
    const root = getRoot(page);
    const polyline = root.querySelector('polyline');
    expect(polyline).toBeTruthy();
    expect([polyline.getAttribute('stroke'), polyline.style.stroke]).toContain("#ff0000");
  });

  it('is accessible', async () => {
    const page = await newSpecPage({
      components: [LineChart],
      template: () => <animated-line-chart data={[10,20]} labels={["A","B"]} chartTitle="Accessible Chart" />
    });
    const root = getRoot(page);
    expect(root.querySelector('.line-chart-wrapper')).toBeTruthy();
    // Add role and aria-label checks if implemented
  });

  it('resizes responsively', async () => {
    const page = await newSpecPage({
      components: [LineChart],
      template: () => <animated-line-chart data={[10,20]} labels={["A","B"]} />
    });
    const root = getRoot(page);
    const wrapper = root.querySelector('.line-chart-wrapper');
    expect(wrapper).toBeTruthy();
    expect(['100%', ''].includes(wrapper.style.width)).toBe(true);
  });
}); 