import { describe, expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { IntentBaseHeadline } from './IntentBaseHeadline';

describe('IntentBaseHeadline', () => {
  test('renders the Base lockup inside one accessible headline phrase', () => {
    const html = renderToStaticMarkup(
      <IntentBaseHeadline baseLogoSrc="/base-lockup.svg" />,
    );

    expect(html).toContain('aria-label="Intent-Based Agents"');
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('src="/base-lockup.svg"');
    expect(html).toContain('alt=""');
    expect(html).toContain('Intent-');
    expect(html).toContain('d Agents');
  });
});
