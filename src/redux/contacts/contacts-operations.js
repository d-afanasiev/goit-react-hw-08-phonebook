import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import * as contactsAPI from "../../service/contacts-api";

export const fetchContacts = createAsyncThunk(
  "app/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.fetchAllContacts();
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
      const currentContacts = await contactsAPI.fetchAllContacts();
      const findContacts = await currentContacts.find(
        (contact) => contact.name === value.name
      );
      if (findContacts !== undefined) {
        Notify.failure(`${value.name} is already in contacts.`);
        return [];
      }
      const contact = await contactsAPI.saveContact(value);
      return [contact];
    } catch (error) {
      Notify.failure("Введите данные в поле Name и Number");
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
