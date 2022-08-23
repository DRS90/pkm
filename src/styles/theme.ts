import type { ConfigType } from '@stitches/react/types/config';

export const theme = {
  space: {
    sm: '8px',
    md: '16px',
    lg: '24px'
  },
  fonts: {
    system: 'system-ui'
  },
  colors: {
    hiContrast: 'hsl(206,10%,5%)',
    loContrast: 'white'
  },
  fontSizes: {
    title: '2em',
    subTitle: '1.5em',
    p: '1em'
  }
};

export const media = {
  desktop: '(min-width: 1024px)',
  tablet: '(min-width: 600px)',
  mobileOnly: '(max-width: 320px)'
};

const designTokens = {
  theme: theme as ConfigType.Theme<typeof theme>,
  media: media as ConfigType.Media<typeof media>
};

export default designTokens;
