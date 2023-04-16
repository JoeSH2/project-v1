export type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
  className: string,
  mode: Mods = {},
  additional: Array<string | undefined> = [],
): string => [
  className,
  ...Object.entries(mode)
    .filter(([_, key]) => Boolean(key))
    .map(([cls]) => cls),
  ...additional.filter(Boolean),
].join(' ');
