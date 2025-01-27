/******************************************************************************************
 * Repository: https://github.com/kolserdav/werift-sfu-react.git
 * File name: chatBlockeds.ts
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: MIT
 * License text: See in LICENSE file
 * Copyright: kolserdav, All rights reserved (c)
 * Create Date: Wed Nov 23 2022 15:23:26 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
import { createSlice, configureStore } from '@reduxjs/toolkit';

type State = {
  chatBlockeds: (string | number)[];
};

interface Action {
  payload: State;
}

const slice = createSlice({
  name: 'chatBlockeds',
  initialState: {
    chatBlockeds: [],
  } as State,
  reducers: {
    changeChatBlockeds: (state: State, action: Action) => {
      // eslint-disable-next-line no-param-reassign
      state.chatBlockeds = action.payload.chatBlockeds;
    },
  },
});

export const { changeChatBlockeds } = slice.actions;

const storeChatBlockeds = configureStore({
  reducer: slice.reducer,
});

export default storeChatBlockeds;
