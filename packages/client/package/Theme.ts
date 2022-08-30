/******************************************************************************************
 * Repository: https://github.com/kolserdav/werift-sfu-react.git
 * File name: Theme.ts
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: MIT
 * License text: See in LICENSE file
 * Copyright: kolserdav, All rights reserved (c)
 * Create Date: Wed Aug 24 2022 14:14:09 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import { ThemeType } from './types';

export type Themes = {
  dark: Theme;
  light: Theme;
};

export interface Color {
  paper: string;
  text: string;
  active: string;
  textActive: string;
  red: string;
  yellow: string;
  blue: string;
  black: string;
}

export interface Colors {
  light: Color;
  dark: Color;
}

// Additionals
export interface Theme {
  button: React.CSSProperties;
  link: React.CSSProperties;
  colors: Colors[ThemeType];
}

const colors: Colors = {
  dark: {
    paper: '#0f0f0f',
    text: '#d7d6d6',
    active: '#36413e',
    textActive: '#fff',
    black: '#000',
    red: 'orange',
    yellow: 'lightgoldenrodyellow',
    blue: 'lightblue',
  },
  light: {
    red: 'red',
    yellow: 'yellow',
    blue: 'blue',
    paper: '#fff',
    text: '#5d5e60',
    active: 'rgb(182 181 181)',
    textActive: '#fff',
    black: '#000',
  },
};

export const themes: Themes = {
  dark: {
    button: {
      backgroundColor: colors.light.active,
      color: colors.light.text,
    },
    link: {
      color: colors.light.paper,
    },
    colors: colors.dark,
  },
  light: {
    button: {
      backgroundColor: colors.dark.active,
      color: colors.dark.text,
    },
    link: {
      color: colors.dark.paper,
    },
    colors: colors.light,
  },
};