import { describe, expect, test } from 'bun:test';
import { nextScrollLockOwners } from './scrollLockState';

describe('scroll lock ownership', () => {
  test('keeps scrolling locked until the final owner releases it', () => {
    const current = new Set(['hero-reveal', 'preloader']);

    const afterPreloader = nextScrollLockOwners(current, 'preloader', 'unlock');
    const afterHero = nextScrollLockOwners(afterPreloader, 'hero-reveal', 'unlock');

    expect([...afterPreloader]).toEqual(['hero-reveal']);
    expect(afterHero.size).toBe(0);
    expect([...current]).toEqual(['hero-reveal', 'preloader']);
  });

  test('does not duplicate repeated locks from the same owner', () => {
    const current = new Set(['hero-reveal']);

    const next = nextScrollLockOwners(current, 'hero-reveal', 'lock');

    expect([...next]).toEqual(['hero-reveal']);
  });
});
