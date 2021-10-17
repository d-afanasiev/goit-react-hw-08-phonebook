import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as operations from "../../redux/operations";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const formSubmitHandler = (value) => dispatch(operations.addContacts(value));

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formSubmitHandler({ name, number });

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="sendName" className={css.name}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleChange}
        className={css.inputName}
        id="sendName"
      />
      <label htmlFor="sendTel">Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        className={css.inputTel}
        onChange={handleChange}
        value={number}
        id="sendTel"
      />
      <button type="submit" className={css.submitName}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func,
};
