type Mode = Record<string, boolean | string>;

export const classNames = (
  className: string,
  mode?: Mode,
  additional?: string[],
): string => [
  className,
  ...additional.filter(Boolean),
  ...Object.entries(mode)
    .filter(([cls, key]) => Boolean(key))
    .map(([cls, key]) => cls),
].join(' ');
