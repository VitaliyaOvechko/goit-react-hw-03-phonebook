import { DeleteBtn, List, ListItem } from 'components/List/ContactsList.styled';
import PropTypes from 'prop-types';
import { ContactItem } from '../ListItem/ContactsListItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} />
          <DeleteBtn onClick={() => onDelete(contact.id)}>Delete</DeleteBtn>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
