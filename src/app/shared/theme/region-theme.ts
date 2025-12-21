export const DEFAULT_THEME = {
  '--color-back': 'rgb(179, 216, 255)',
  '--color-main': 'rgb(37, 115, 153)',
  '--color-extra': '#a0b6f9',
  '--color-layouts': '#1c2952',
  '--fondo-foto': 'url("assets/MAINSTYLE.jpeg")'
} as const;

export const REGION_THEME_MAP = {
  default: DEFAULT_THEME,
  puna: {
    '--color-main': '#3c5c92',
    '--color-extra': '#e5cfb1',
    '--color-layouts': '#6981ad',
    '--fondo-foto': 'url("assets/punaHornocal.jpg")'
  },
  quebrada: {
    '--color-main': '#654321',
    '--color-extra': '#bdcbd2',
    '--color-layouts': '#828275',
    '--fondo-foto': 'url("assets/quebrada-background.jpeg")'
  },
  valles: {
    '--color-main': '#987654',
    '--color-extra': '#595221',
    '--color-layouts': '#a89854',
    '--fondo-foto': 'url("assets/valle-background.jpeg")'
  },
  yungas: {
    '--color-main': '#567890',
    '--color-extra': '#363614',
    '--color-layouts': '#595931',
    '--fondo-foto': 'url("assets/yungas-background.jpeg")'
  }
} as const;
