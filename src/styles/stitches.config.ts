import { createStitches } from '@stitches/react';
import designTokens from './theme';

export const { styled, getCssText, keyframes } = createStitches({
  ...designTokens
});
