const aLower = "a".codePointAt(0) as number;
const aUpper = "A".codePointAt(0) as number;

function addMod(cp: number, start: number): number {
  const cp2 = cp + 13;
  return cp2 >= start + 26 ? cp2 - 26 : cp2;
}

export function rot13(input: string): string {
  return Array.from(input)
    .map((c) => c.codePointAt(0) || 0)
    .map((cp) => cp >= aLower && cp <= aLower + 26 ? addMod(cp, aLower) : cp)
    .map((cp) => cp >= aUpper && cp <= aUpper + 26 ? addMod(cp, aUpper) : cp)
    .map((cp) => String.fromCharCode(cp))
    .join("");
}
