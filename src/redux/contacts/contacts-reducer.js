import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import {
  fetchContacts,
  filterContacts,
  addContacts,
  deleteContacts,
} from "./contacts-operations";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => {
    const findContacts = state.find((contact) => contact.name === payload.name);

    if (!findContacts) {
      return [payload, ...state];
    } else {
      // Notify.failure(`${payload.name} is already in contacts.`);
      alert(`${payload.name} is already in contacts.`);
      payload = null;
      return { state, payload };
    }
  },
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContacts.rejected]: (_, { payload }) => payload,
  [addContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, { payload }) => payload,
  [deleteContacts.pending]: () => null,
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});
