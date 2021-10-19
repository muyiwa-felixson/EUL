import { css } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

const PrimaryTheme = '#326fe4';
const PrimaryGrey = '#62707B';

export const Theme = {
  PrimaryColor: PrimaryTheme,
  PrimaryGrey: '#62707B',
  PrimaryDark: darken(0.4, PrimaryTheme),

  PrimaryBackground: '#FFF',
  PrimaryGreen: '#59d973',
  PrimaryMint: '#95fd35',
  PrimaryRed: '#f60615',
  PrimaryYellow: '#F2C02E',
  PrimaryOrange: '#EF7E23',
  PrimaryBlue: '#326fe4',
  SecondaryColor: '#be7efc',
  TetiaryColor: '#ecdbfe',

  PrimaryBorderColor: '#CDCEDC',
  PrimaryFade: '#F7F8FE',
  PrimaryInputOutline: '#9D9DB7',

  PrimaryFontSize: '12px',
  PrimaryLineHeight: '1.6em',
  PrimaryFontColor: '#444654',
  SecondaryFontColor: '#90705F',
  PrimaryFont: "'Open Sans', sans-serif",
  SecondaryFont: "'Inter', sans-serif",
  TetiaryFont: "'Open Sans Light', sans-serif",

  PrimaryColor_light_80: lighten(0.4, PrimaryTheme),
  PrimaryColor_light_60: lighten(0.3, PrimaryTheme),
  PrimaryColor_light_40: lighten(0.2, PrimaryTheme),
  PrimaryColor_light_10: lighten(0.1, PrimaryTheme),
  PrimaryColor_dark_10: darken(0.1, PrimaryTheme),

  PrimaryGreyDark: darken(0.2, PrimaryGrey),
  PrimaryGreyMid: lighten(0.2, PrimaryGrey),
  PrimaryGreyLight: lighten(0.4, PrimaryGrey),

  PrimaryRadius: '3px',
  SecondaryRadius: '5px',

  PrimaryCellPad: '15px',
  SecondaryCellPad: '15px',

  PrimaryTransition: 'all 0.3s ease-out',

  // Elevation/Shadows
  // Elevator: (size, color) => {
  //   let sizer = {
  //     low: `box-shadow: 0 1px 3px`,
  //     mid: `box-shadow: 1px 3px 6px`,
  //     high: `box-shadow: 3px 6px 15px`,
  //   }
  //   return ``;
  // },
  Elevate: {
    low: `box-shadow: 0 1px 3px ${transparentize(0.9, darken(0.2, PrimaryTheme))}`,
    mid: `box-shadow: 1px 3px 6px ${transparentize(0.8, darken(0.3, PrimaryTheme))}`,
    high: `box-shadow: 1px 6px 15px ${transparentize(0.95, darken(0.3, PrimaryTheme))}`,
    fader: `box-shadow: 1px 1px 10px ${transparentize(0.9, darken(0.4, PrimaryTheme))}`,
  },

  // Icons Class Names: Overide default icon class names
  Icons: {
    next: 'flexibull-right',
    previous: 'flexibull-left',
    loader: 'flexibull-spin6',
  },

  Gradient: (primary, secondary) => `background: ${primary};
        background: -moz-linear-gradient(-45deg, ${primary} 0%, ${secondary} 100%);
        background: -webkit-linear-gradient(-45deg, ${primary} 0%,${secondary} 100%);
        background: linear-gradient(135deg, ${primary} 0%,${secondary} 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${primary}', endColorstr='${secondary}',GradientType=1 );`,
  Truncate: width => `
        width: ${width};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `,
};
export const sizes = {
  large: 1170,
  desktop: 992,
  tablet: 768,
  phone: 660,
};
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
