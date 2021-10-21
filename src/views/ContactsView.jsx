import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import { fetchContacts } from "../redux/operations";

export default function ContactsView() {
  const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(getContacts);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen((state) => !state);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <h1 className="titlePhonebook">Phonebook</h1>
      <ContactForm />

      <h1 className="titleContacts">Contacts</h1>
      <Filter />
      <ContactList />
    </>
  );
}
