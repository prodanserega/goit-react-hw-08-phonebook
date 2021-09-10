import React from "react";
import { connect } from "react-redux";

import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

import s from "../UserMenu/UserMenu.module.css";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.wrapper}>
    <img className={s.avatar} src={avatar} alt="" width="32" />
    <span className={s.name}>Welcom, {name}</span>
    <button className={s.button} type="button" onClick={onLogout}>
      Go out
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  //avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
