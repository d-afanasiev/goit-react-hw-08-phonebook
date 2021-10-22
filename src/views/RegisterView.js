import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import css from "../styles/RegisterView.module.css";

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: "flex",
//     flexDirection: "column",
//     marginBottom: 15,
//   },
// };

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Box className={css.container}>
      <Typography variant="h4" className={css.title}>
        Страница регистрации
      </Typography>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <TextField
          className={css.input}
          required
          id="outlined-required-name"
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          className={css.input}
          required
          id="outlined-required-mail"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          className={css.input}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Зарегистрироваться
        </Button>
        {/* <label className={css.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label className={css.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Зарегистрироваться</button> */}
      </form>
    </Box>
  );
}
