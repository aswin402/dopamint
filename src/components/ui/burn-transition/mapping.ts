// Color parsing + UI-value mapping utilities for the burn shader engine.
// Color parsing utility functions
export function parseColorToRgba(input?: string): { r: number; g: number; b: number; a: number } {
  if (!input || input.trim() === '') return { r: 1, g: 1, b: 1, a: 1 };
  const str = input.trim();

  // rgba(r, g, b, a)
  const rgbaMatch = str.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i
  );
  if (rgbaMatch) {
    const r = Math.max(0, Math.min(255, parseFloat(rgbaMatch[1]))) / 255;
    const g = Math.max(0, Math.min(255, parseFloat(rgbaMatch[2]))) / 255;
    const b = Math.max(0, Math.min(255, parseFloat(rgbaMatch[3]))) / 255;
    const a = rgbaMatch[4] !== undefined ? Math.max(0, Math.min(1, parseFloat(rgbaMatch[4]))) : 1;
    return { r, g, b, a };
  }

  // hex
  const hex = str.replace(/^#/, '');
  if (hex.length === 8) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255,
      a: parseInt(hex.slice(6, 8), 16) / 255,
    };
  }
  if (hex.length === 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255,
      a: 1,
    };
  }
  if (hex.length === 3) {
    return {
      r: parseInt(hex[0] + hex[0], 16) / 255,
      g: parseInt(hex[1] + hex[1], 16) / 255,
      b: parseInt(hex[2] + hex[2], 16) / 255,
      a: 1,
    };
  }
  return { r: 1, g: 1, b: 1, a: 1 };
}

export function mapLinear(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  if (inMax === inMin) return outMin;
  const t = (value - inMin) / (inMax - inMin);
  return outMin + t * (outMax - outMin);
}

export function mapNoiseScale(ui: number) {
  if (ui >= 1) return ui;
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0.15, 3.5);
}
export function mapNoiseIntensity(ui: number) {
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0, 0.85);
}
export function mapScrollSensitivity(ui: number) {
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0, 0.01);
}
export function mapBaseAnimationSpeed(ui: number) {
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0, 0.1);
}
export function mapEdgeSoftness(ui: number) {
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0.015, 0.08);
}
export function mapBloomRadius(ui: number) {
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0.02, 0.18);
}
