import { Picture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ picture: { webformatURL, tags } }) => {
  return <Picture src={webformatURL} alt={tags} />;
};
