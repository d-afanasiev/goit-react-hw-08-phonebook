import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  fetchContacts,
  filterContacts,
  addContacts,
  deleteContacts,
} from "./contacts-operations";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => {
    return [...payload, ...state];
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
