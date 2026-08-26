import { describe, expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { IntentBaseHeadline } from './IntentBaseHeadline';

describe('IntentBaseHeadline', () => {
  test('renders base as Helvetica bold non-italic text in blue without image logo', () => {
    const html = renderToStaticMarkup(<IntentBaseHeadline />);

    expect(html).toContain('Intent-');
    expect(html).toContain('text-[#0000ff]');
    expect(html).toContain('font-bold');
    expect(html).toContain('not-italic');
    expect(html).toContain('Helvetica');
    expect(html).toContain('base');
    expect(html).toContain('d Agents');
    expect(html).not.toContain('<img');
  });
});

