import { describe, expect, test } from 'bun:test';
import {
  PRELOADER_COMPLETE_HOLD_MS,
  PRELOADER_EXIT_MS,
  PRELOADER_MIN_DURATION_MS,
  PRELOADER_TIMEOUT_MS,
} from './config';

describe('preloader timing budget', () => {
  test('keeps the startup gate short and bounded', () => {
    expect(PRELOADER_MIN_DURATION_MS).toBeLessThanOrEqual(500);
    expect(PRELOADER_TIMEOUT_MS).toBeLessThanOrEqual(2000);
    expect(PRELOADER_COMPLETE_HOLD_MS).toBeLessThanOrEqual(100);
    expect(PRELOADER_EXIT_MS).toBeLessThanOrEqual(500);
  });
});
