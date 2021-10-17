import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/operations";
import css from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const getVisibleList = (value) => dispatch(filterContacts(value));
  const filterList = (e) => {
    getVisibleList(e.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        className={css.inputFilter}
        onChange={filterList}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  formSubmitHandler: PropTypes.func,
};
