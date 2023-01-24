export const ImageGalleryItem = ({ picture: { webformatURL, tags } }) => {
  return <img src={webformatURL} alt={tags} width="100%" height="100%" />;
};
