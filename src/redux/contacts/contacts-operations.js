import action from "./contacts-actions";
import api from "../../components/service/api";

const fetchContacts = () => async (dispatch) => {
  dispatch(action.fetchContactRequest());
  try {
    const { data } = await api.fetchContacts();
    dispatch(action.fetchContactSuccess(data));
  } catch (error) {
    dispatch(action.fetchContactError(error.message));
  }
};

const addContact = (name, number) => async (dispatch) => {
  const contact = { name, number };
  dispatch(action.addContactRequest());
  try {
    const { data } = await api.addContact(contact);
    dispatch(action.addContactSuccess(data));
  } catch (error) {
    dispatch(action.addContactError(error.message));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(action.deleteContactRequest());
  try {
    const { data } = await api.deleteContact(id);
    dispatch(action.deleteContactSuccess(data));
  } catch (error) {
    dispatch(action.deleteContactError(error.message));
  }
};

export default { fetchContacts, addContact, deleteContact };
