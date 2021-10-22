import css from "../styles/HomeView.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomeView = () => (
  <Box className={css.container}>
    <Typography variant="h2" component="div" className={css.title}>
      Телефонная книга
    </Typography>
  </Box>
);

export default HomeView;
