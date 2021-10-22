import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import { fetchContacts } from "../redux/contacts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import css from "../styles/ContactsView.module.css";

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Box className={css.container}>
      <Typography variant="h3" className={css.title}>
        Phonebook
      </Typography>
      <ContactForm />

      <Typography variant="h3" className={css.title}>
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </Box>
  );
}
