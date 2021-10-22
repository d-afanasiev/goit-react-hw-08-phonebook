import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { filterContacts } from "../../redux/contacts";
import css from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const getVisibleList = (value) => dispatch(filterContacts(value));
  const filterList = (e) => {
    getVisibleList(e.target.value);
  };

  return (
    <Box className={css.wrapper}>
      <Typography variant="div" className={css.title}>
        Find contacts by name
      </Typography>
      {/* <p>Find contacts by name</p> */}
      <TextField
        className={css.input}
        id="standard-search"
        label="Search field"
        type="search"
        name="filter"
        variant="standard"
        onChange={filterList}
        margin="normal"
      />
      {/* <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        className={css.inputFilter}
        onChange={filterList}
      /> */}
    </Box>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  formSubmitHandler: PropTypes.func,
};
