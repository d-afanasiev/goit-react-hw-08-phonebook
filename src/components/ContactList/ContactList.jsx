import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts, deleteContacts } from "../../redux/operations";
import css from "./ContactList.module.css";
import { visibleList } from "../../redux/selector";

export default function ContactList() {
  const contacts = useSelector(visibleList);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const deleteContact = (value) => dispatch(deleteContacts(value));
  return (
    <ul className={css.listContacts}>
      {contacts &&
        contacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            {contact.name}: {contact.number}
            <button
              type="submit"
              className={css.button}
              onClick={() => deleteContact(contact)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  getVisibleContacts: PropTypes.func,
  deleteContact: PropTypes.func,
};
