import { connect } from "react-redux";
import Contacts from "../components/Contacts";
import UserMenu from "../components/UserMenu/UserMenu";
import AuthNav from "../components//AuthNav";
import authSelectors from "../redux/auth/auth-selectors";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

const AppBar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    <Contacts />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
