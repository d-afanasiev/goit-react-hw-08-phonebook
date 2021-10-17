// import { useDispatch, useSelector } from "react-redux";
// import { authSelectors, authOperations } from "../../redux/auth";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import defaultAvatar from "./default-avatar.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();

  const fullName = "Guest";

  // const name = useSelector(fullName);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {fullName}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}