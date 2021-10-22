import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export async function fetchAllContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function saveContact(value) {
  const { data } = await axios.post("/contacts", {
    name: value.name,
    number: value.number,
  });
  return data;
}

export async function deleteContact(value) {
  await axios.delete(`/contacts/${value.id}`);

  return value.id;
}
