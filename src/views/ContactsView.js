import React, { Component } from "react";
import { connect } from "react-redux";
import contactOperations from "../redux/contacts/contacts-operations";
import contactActions from "../redux/contacts/contacts-actions";
import contactSelectors from "../redux/contacts/contacts-selectors";

import Container from "../components/Container/Container";
import PropTypes from "prop-types";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/Loader/Loader";

class ContactsView extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    fetchContacts: PropTypes.func,
    isLoading: PropTypes.bool,
  };
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Container>
        <ContactForm />
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: contactSelectors.getContacts(state),
  isLoading: contactSelectors.getLoading(state),
  error: contactSelectors.getError(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
  clearFilter: () => dispatch(contactActions.changeFilter("")),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
