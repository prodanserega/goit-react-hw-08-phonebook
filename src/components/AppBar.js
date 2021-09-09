// import { useSelector } from "react-redux";
import Contacts from "../components/Contacts";
//import UserMenu from "./UserMenu";
// import AuthNav from "../components//AuthNav";
// import { authSelectors } from "../redux/auth";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

export default function AppBar() {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Contacts />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}
