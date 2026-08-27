import { describe, expect, test } from 'bun:test';
import {
  SECTION_HANDOFF_DURATION,
  getScrollBoundaryState,
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

  test('reports start, middle, and end boundaries for a revealed section', () => {
    expect(getScrollBoundaryState(0, 1200, 600)).toEqual({ atStart: true, atEnd: false });
    expect(getScrollBoundaryState(300, 1200, 600)).toEqual({ atStart: false, atEnd: false });
    expect(getScrollBoundaryState(600, 1200, 600)).toEqual({ atStart: false, atEnd: true });
    expect(getScrollBoundaryState(0, 600, 600)).toEqual({ atStart: true, atEnd: true });
  });
});
