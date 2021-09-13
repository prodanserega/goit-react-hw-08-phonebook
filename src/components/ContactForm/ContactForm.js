import { Component } from "react";

import { connect } from "react-redux";

import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "../ContactForm/ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    error: false,
    errorMessage: null,
  };

  handelChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.name && this.state.number !== "") {
      const { name, number } = this.state;
      this.props.onSubmit(name, number);
      this.resetForm();
      return;
    }
    alert("Please, input name and phone");
  };

  resetForm = () =>
    this.setState({
      name: "",
      number: "",
    });

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleFormSubmit}>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handelChangeForm}
        />
        <input
          className={s.input}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={this.handelChangeForm}
        />
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
