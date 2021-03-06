import PropTypes from 'prop-types';
import styles from './ImageItem.module.css';

const ImageGalleryItem = ({
  id,
  url,
  tags,
  largeImage,
  toggleModal,
  handleLargeImage,
}) => {
  const handleOpenModal = () => {
    toggleModal();
    handleLargeImage(largeImage);
  };

  return (
    <li
      className={styles.imageGallery}
      key={id}
      onClick={() => handleOpenModal()}
    >
      <img className={styles.image} src={url} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propeType = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  handleLargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;