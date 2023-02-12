type Mode = Record<string, boolean | string>;

export const classNames = (className: string, mode: Mode = {}, additional: string[] = []): string => [
  className,
  ...Object.entries(mode)
    .filter(([_, key]) => Boolean(key))
    .map(([cls]) => cls),
  ...additional.filter(Boolean),
].join(' ');
