import PropTypes from 'prop-types';
import { ItemText } from './ContactsListItem.styled';

export const ContactItem = ({ contact: { name, number } }) => {
  return (
    <ItemText>
      {name}: {number}
    </ItemText>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
