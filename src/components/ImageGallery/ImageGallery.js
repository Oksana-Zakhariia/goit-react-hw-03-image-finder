import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items, onClick }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li
            key={item.id}
            onClick={() => {
              onClick(item.largeImageURL);
            }}
          >
            <ImageGalleryItem picture={item}></ImageGalleryItem>
          </li>
        );
      })}
    </ul>
  );
};
