const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

// Usage:
// ${mediaQuery('md')} {
//    background-color: red;
// }
export const mediaQuery = (
  key?: keyof typeof breakpoints,
  type = 'min',
  customSize?: string
): string =>
  `@media (${type}-width: ${
    customSize && !key ? customSize : breakpoints[key]
  })`;
