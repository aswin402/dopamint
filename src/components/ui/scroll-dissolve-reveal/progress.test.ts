import { describe, expect, test } from 'bun:test';
import {
  normalizeRevealTarget,
  toDissolveProgress,
} from './progress';

describe('scroll dissolve progress', () => {
  test('finishes interaction when the shader is visually complete', () => {
    expect(toDissolveProgress(0.95)).toBe(1);
    expect(normalizeRevealTarget(0.95)).toBe(1);
  });

  test('keeps progress interactive before the visual completion point', () => {
    expect(toDissolveProgress(0.475)).toBe(0.5);
    expect(normalizeRevealTarget(0.94)).toBe(0.94);
  });

  test('does not snap while reversing toward the hero', () => {
    expect(normalizeRevealTarget(0.97, false)).toBe(0.97);
  });
});
