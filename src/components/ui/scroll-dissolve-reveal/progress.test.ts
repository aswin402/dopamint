import { describe, expect, test } from 'bun:test';
import {
  MAGNETIC_COMPLETION_AT,
  normalizeRevealTarget,
  resolveMagneticCompletionTarget,
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

  test('commits a paused forward reveal after the magnetic threshold', () => {
    expect(resolveMagneticCompletionTarget(MAGNETIC_COMPLETION_AT, false)).toBe(1);
    expect(resolveMagneticCompletionTarget(0.9, false)).toBe(1);
  });

  test('does not magnetically complete an unlocked or early reveal', () => {
    expect(resolveMagneticCompletionTarget(MAGNETIC_COMPLETION_AT - 0.01, false)).toBeNull();
    expect(resolveMagneticCompletionTarget(0.9, true)).toBeNull();
  });
});
