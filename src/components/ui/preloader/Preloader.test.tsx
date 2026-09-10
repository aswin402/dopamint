import { describe, expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { Preloader } from './Preloader';

describe('Preloader Component', () => {
  test('renders Dopamint branding and renaissance metadata in static markup', () => {
    const html = renderToStaticMarkup(<Preloader minDurationMs={100} />);

    expect(html).toContain('DOPAMINT');
    expect(html).toContain('House of Intent based Agents');
    expect(html).toContain('DOPAMINT PROTOCOL');
    expect(html).toContain('BASE NETWORK');
    expect(html).toContain('HARNESS · MEMORY · PAYMENTS');
  });

  test('includes the percentage indicator and progress track', () => {
    const html = renderToStaticMarkup(<Preloader minDurationMs={100} />);

    expect(html).toContain('%');
    expect(html).toContain('bg-[#f3f2e6]');
  });

  test('contains telemetry stages and ready indicators', () => {
    const html = renderToStaticMarkup(<Preloader minDurationMs={100} />);

    expect(html).toContain('v2.4 · SOVEREIGN AI');
    expect(html).toContain('ONCHAIN VERIFIABILITY');
  });
});
