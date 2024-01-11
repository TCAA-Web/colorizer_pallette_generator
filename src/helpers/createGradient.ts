export function createGradient(color1: string, color2: string) {
  let gradient = `linear-gradient(${color1}, ${color2})`;
  return gradient;
}
