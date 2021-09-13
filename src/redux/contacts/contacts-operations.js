import action from "./contacts-actions";
import api from "../../components/service/api";

const fetchContacts = () => async (dispatch) => {
  dispatch(action.fetchContactsRequest());
  try {
    const { data } = await api.fetchContacts();
    dispatch(action.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(action.fetchContactsError(error.message));
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

const deleteContact = (contactId) => async (dispatch) => {
  dispatch(action.deleteContactRequest());
  try {
    const { data } = await api.deleteContact(contactId);
    dispatch(action.deleteContactSuccess(data));
  } catch (error) {
    dispatch(action.deleteContactError(error.message));
  }
};

export default { fetchContacts, addContact, deleteContact };
