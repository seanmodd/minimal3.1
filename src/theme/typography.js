import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'franklin-gothic-urw, Public Sans, sans-serif'; // Google Font
// const FONT_PRIMARY = 'franklin-gothic-urw-cond, Public Sans, sans-serif'; // Google Font
const FONT_SECONDARY = 'mono45-headline'; // Adobe
const FONT_THIRD = 'neue-haas-grotesk-display'; // Adobe
const FONT_FOURTH = 'neue-haas-grotesk-text'; // Adobe
const FONT_FIFTH = 'forma-djr-text'; // Adobe
const FONT_SIXTH = 'franklin-gothic-urw-cond'; // Adobe
const FONT_SEVENTH = 'franklin-gothic-urw'; // Adobe
const FONT_EIGHTH = 'aktiv-grotesk'; // Adobe
const FONT_NINTH = 'aktiv-grotesk-thin'; // Adobe

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    fontFamily: FONT_SIXTH,
    lineHeight: 22 / 14,
    fontSize: pxToRem(18),
  },
  subtitle3: {
    fontWeight: 400,
    fontFamily: FONT_SEVENTH,
    color: '#48525f',
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  subtitle4: {
    fontWeight: 600,
    fontFamily: FONT_SEVENTH,
    color: '#8b5cf6',
    lineHeight: 22 / 14,
    fontSize: pxToRem(18),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    // textTransform: 'uppercase',
  },
  title: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontFamily: FONT_SIXTH,
    transition: 'all 0.2s ease-in-out',
    fontSize: pxToRem(20),
    // grow on hover:
    '&:hover': {
      // fontSize: pxToRem(18),
      transition: 'all 0.2s ease-in-out',
      fontSize: pxToRem(22),
      curosor: 'pointer',
    },
    // grow on hover out:
    '&:hover:after': {
      // content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      curosor: 'pointer',
      transition: 'all 0.2s ease-in-out',
    },
  },
  details: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontFamily: FONT_SIXTH,
    fontSize: pxToRem(16),
  },
  button: {
    // fontWeight: 500,
    textTransform: 'standard',
    // fontFamily: FONT_SEVENTH,
    // lineHeight: 24 / 14,
    // textTransform: '',
    // fontSize: pxToRem(14),
    // transition: 'all 0.2s ease-in-out',
    // fontSize: pxToRem(20),
    // background: '#8b5cf6',
    // color: '#fff',
    // grow on hover:
  },
};

export default typography;
