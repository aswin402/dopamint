import { describe, expect, test } from 'bun:test';
import {
  SECTION_HANDOFF_DURATION,
  smoothSectionHandoffProgress,
} from './handoff';

describe('section handoff motion', () => {
  test('uses a balanced curve instead of a front-loaded jump', () => {
    expect(SECTION_HANDOFF_DURATION).toBeGreaterThanOrEqual(0.85);
    expect(smoothSectionHandoffProgress(0)).toBe(0);
    expect(smoothSectionHandoffProgress(0.1)).toBeLessThan(0.05);
    expect(smoothSectionHandoffProgress(0.5)).toBeCloseTo(0.5, 5);
    expect(smoothSectionHandoffProgress(0.9)).toBeGreaterThan(0.95);
    expect(smoothSectionHandoffProgress(1)).toBe(1);
  });
});
