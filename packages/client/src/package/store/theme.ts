/******************************************************************************************
 * Repository: https://github.com/kolserdav/werift-sfu-react.git
 * File name: theme.ts
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: MIT
 * License text: See in LICENSE file
 * Copyright: kolserdav, All rights reserved (c)
 * Create Date: Wed Aug 24 2022 14:14:09 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { ThemeType } from '../types';
import { getLocalStorage, LocalStorageName } from '../utils/localStorage';

interface State {
  theme: ThemeType;
}

interface Action {
  payload: State;
}

const slice = createSlice({
  name: 'theme',
  initialState: {
    theme: getLocalStorage(LocalStorageName.THEME) || 'light',
  } as State,
  reducers: {
    changeTheme: (state: State, action: Action) => {
      // eslint-disable-next-line no-param-reassign
      state.theme = action.payload.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { changeTheme } = slice.actions;

const storeTheme = configureStore({
  reducer: slice.reducer,
});

export default storeTheme;
