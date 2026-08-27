import { describe, expect, test } from 'bun:test';
import { createMotionPolicy } from './motionPolicy';

describe('motion policy', () => {
  test('disables continuous motion for reduced-motion users', () => {
    expect(createMotionPolicy(true)).toEqual({
      smoothScroll: false,
      heroDissolve: false,
      decorativeMotion: false,
    });
  });

  test('keeps the full motion experience enabled by default', () => {
    expect(createMotionPolicy(false)).toEqual({
      smoothScroll: true,
      heroDissolve: true,
      decorativeMotion: true,
    });
  });
});
