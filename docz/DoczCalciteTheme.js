import esriColors from './esriColors.json';

export default {
  radii: '2px',
  colors: {
    white: esriColors['blk-000'],
    grayExtraLight: esriColors['blk-010'],
    grayLight: esriColors['blk-040'],
    gray: esriColors['blk-150'],
    grayDark: esriColors['blk-190'],
    grayExtraDark: esriColors['blk-210'],
    dark: esriColors['blk-220'],
    blue: esriColors['v-bb-160'],
    skyBlue: esriColors['v-bb-150'],
    /** properties bellow depends on mode select */
    primary: esriColors['v-bb-160'],
    text: esriColors['blk-170'],
    link: esriColors['v-bb-160'],
    footerText: esriColors['blk-190'],
    sidebarBg: esriColors['blk-010'],
    sidebarText: esriColors['blk-170'],
    sidebarHighlight: null,
    sidebarBorder: esriColors['blk-060'],
    background: esriColors['blk-000'],
    border: esriColors['blk-040'],
    theadColor: esriColors['blk-150'],
    theadBg: esriColors['blk-010'],
    tableColor: esriColors['blk-220'],
    codeColor: esriColors['blk-150'],
    preBg: esriColors['blk-010'],
    blockquoteBg: esriColors['blk-010'],
    blockquoteBorder: esriColors['blk-040'],
    blockquoteColor: esriColors['blk-120']
  },
  styles: {
    body: {
      fontFamily:
        '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif',
      fontSize: 16,
      lineHeight: '1.55rem'
    },
    container: {
      width: ['100%', '100%', '100%']
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
