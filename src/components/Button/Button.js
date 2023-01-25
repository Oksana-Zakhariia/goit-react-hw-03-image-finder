import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return <LoadButton onClick={onClick}> Load more...</LoadButton>;
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
