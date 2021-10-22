import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import css from "../styles/LoginView.module.css";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Box className={css.container}>
      <Typography variant="h4" className={css.title}>
        Страница логина
      </Typography>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <TextField
          className={css.input}
          required
          id="outlined-required"
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
          Войти
        </Button>
      </form>
    </Box>
  );
}
