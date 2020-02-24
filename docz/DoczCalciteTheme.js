import colors from '@esri/calcite-colors/colors.json';

export default {
  // Removing logo for now as it overwrites the package name, removing any
  // reference to Calcite React from the page... will revisit this later.
  // logo: {
  //   src: '/public/logo.svg',
  //   width: 100
  // },
  radii: '2px',
  colors: {
    white: colors['blk-000'],
    grayExtraLight: colors['blk-010'],
    grayLight: colors['blk-040'],
    gray: colors['blk-150'],
    grayDark: colors['blk-190'],
    grayExtraDark: colors['blk-210'],
    dark: colors['blk-220'],
    blue: colors['v-bb-160'],
    skyBlue: colors['v-bb-150'],
    /** properties below depend on mode select */
    primary: colors['v-bb-160'],
    text: colors['blk-170'],
    link: colors['v-bb-160'],
    footerText: colors['blk-190'],
    sidebarBg: colors['blk-010'],
    sidebarText: colors['blk-170'],
    sidebarHighlight: null,
    sidebarBorder: colors['blk-060'],
    background: colors['blk-000'],
    border: colors['blk-040'],
    theadColor: colors['blk-150'],
    theadBg: colors['blk-010'],
    tableColor: colors['blk-220'],
    codeColor: colors['blk-150'],
    preBg: colors['blk-010'],
    blockquoteBg: colors['blk-010'],
    blockquoteBorder: colors['blk-040'],
    blockquoteColor: colors['blk-120']
  },
  styles: {
    body: {
      fontFamily:
        '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif',
      fontSize: 16,
      lineHeight: '1.55rem'
    },
    container: {
      width: ['100%', '100%', '100%'],
      position: 'relative'
    },
    h1: {
      fontFamily:
        '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif',
      margin: ['30px 0 20px', '60px 0 20px', '40px 0'],
      fontSize: '2.40307rem',
      lineHeight: '4rem',
      fontWeight: 300
    },
    h2: {
      fontFamily:
        '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif',
      margin: ['20px 0 20px', '35px 0 20px'],
      fontSize: '1.9994rem',
      lineHeight: '3.1rem',
      fontWeight: 300,
      letterSpacing: '-0.02em'
    },
    h3: {
      fontFamily:
        '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif',
      margin: '25px 0 10px',
      fontSize: '1.69949rem',
      lineHeight: '2.325rem',
      fontWeight: 300
    },
    h4: {
      fontFamily:
        '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif',
      fontSize: '1.414rem',
      lineHeight: '1.55rem',
      fontWeight: 300
    },
    h5: {
      fontFamily:
        '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif',
      fontSize: '1.2019rem',
      lineHeight: '1.55rem',
      fontWeight: 300
    },
    h6: {
      fontFamily:
        '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif',
      fontSize: '1rem',
      lineHeight: '1.55rem',
      fontWeight: 300
    },
    code: {
      fontFamily:
        '"Consolas", "Andale Mono", "Lucida Console", "Monaco", monospace'
    },
    pre: {
      fontFamily:
        '"Consolas", "Andale Mono", "Lucida Console", "Monaco", monospace'
    }
  }
};
