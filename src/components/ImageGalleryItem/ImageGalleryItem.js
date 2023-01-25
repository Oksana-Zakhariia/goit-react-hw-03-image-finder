import PropTypes from 'prop-types';
import { Picture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ picture: { webformatURL, tags } }) => {
  return <Picture src={webformatURL} alt={tags} />;
};
ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};
