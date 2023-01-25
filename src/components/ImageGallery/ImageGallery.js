import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery, GalleryItem } from './ImageGallery.styled';
export const ImageGallery = ({ items, onClick }) => {
  return (
    <Gallery>
      {items.map(item => {
        return (
          <GalleryItem
            key={item.id}
            onClick={() => {
              onClick(item.largeImageURL);
            }}
          >
            <ImageGalleryItem picture={item}></ImageGalleryItem>
          </GalleryItem>
        );
      })}
    </Gallery>
  );
};
ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
