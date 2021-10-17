import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import * as contactsAPI from "../service/contacts-api";

export const fetchContacts = createAsyncThunk(
  "app/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.fetchContacts();
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  "app/add",
  async (value, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.saveContact(value);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "app/delete",
  async (value, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.deleteContact(value);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const filterContacts = createAction("app/filter");
