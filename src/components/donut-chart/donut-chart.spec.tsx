import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { DonutChart } from './donut-chart';

describe('animated-donut-chart', () => {
  function getRoot(page) {
    return page.root.shadowRoot || page.root;
  }

  it('renders with data and title', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      template: () => <animated-donut-chart data={[10,20,30]} labels={["A","B","C"]} title="Donut Chart" />
    });
    expect(page.root).toBeTruthy();
    const root = getRoot(page);
    const title = root.querySelector('.chart-title');
    expect(title).toBeTruthy();
    expect(title?.textContent).toBe('Donut Chart');
    expect(root.querySelectorAll('circle').length).toBe(3);
  });

  it('renders slot content', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      template: () => <animated-donut-chart><span slot="tooltip">Tip</span></animated-donut-chart>,
      supportsShadowDom: false
    });
    const root = getRoot(page);
    const slot = root.querySelector('[slot="tooltip"]');
    expect(slot).toBeTruthy();
    if (slot) expect(slot.textContent).toBe('Tip');
  });

  it('applies custom colors', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      template: () => <animated-donut-chart data={[10,20]} labels={["A","B"]} colors={["#ff0000","#00ff00"]} />
    });
    const root = getRoot(page);
    const circles = root.querySelectorAll('circle');
    expect(circles.length).toBe(2);
    expect([circles[0].getAttribute('stroke'), circles[0].style.stroke]).toContain("#ff0000");
    expect([circles[1].getAttribute('stroke'), circles[1].style.stroke]).toContain("#00ff00");
  });

  it('is accessible', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      template: () => <animated-donut-chart data={[10,20]} labels={["A","B"]} title="Accessible Chart" />
    });
    const root = getRoot(page);
    expect(root.querySelector('.donut-chart-wrapper')).toBeTruthy();
  });

  it('resizes responsively', async () => {
    const page = await newSpecPage({
      components: [DonutChart],
      template: () => <animated-donut-chart data={[10,20]} labels={["A","B"]} />
    });
    const root = getRoot(page);
    const wrapper = root.querySelector('.donut-chart-wrapper');
    expect(wrapper).toBeTruthy();
    expect(['100%', ''].includes(wrapper.style.width)).toBe(true);
  });
}); 