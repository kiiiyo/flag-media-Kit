export const SCREENS = {
  /* Mobile */
  small: '640px',
  /* Tablet */
  medium: '768px',
  /* Computer */
  large: '1024px',
  /* Desktop */
  xlarge: '1280px',
  /* Wide Screen */
  xxlarge: '1536px'
}

// type MediaQueries = Record<keyof typeof SCREENS, Record<string, string>>

// export const MEDIA_QUERIES: MediaQueries = Object.entries(SCREENS).reduce(
//   (mergeObj, [key, value]) => ({
//     ...mergeObj,
//     [key]: { '@media': `screen and (min-width: ${value})` }
//   }),
//   {} as MediaQueries
// )
