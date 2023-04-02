import PropTypes from 'prop-types';
import { FilterInput, FilterLable } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterLable>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={onChange}></FilterInput>
    </FilterLable>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
