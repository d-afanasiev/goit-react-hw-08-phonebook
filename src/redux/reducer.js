import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  fetchContacts,
  filterContacts,
  addContacts,
  deleteContacts,
} from "../redux/operations";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, { payload }) => {
    const findContacts = state.find((contact) => contact.name === payload.name);

    if (!findContacts) {
      return [payload, ...state];
    } else {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }
  },
  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
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
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContacts.rejected]: (_, action) => action.payload,
  [addContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, action) => action.payload,
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
