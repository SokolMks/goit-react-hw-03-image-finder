import { Component } from 'react';
import ApiService from '../../api/api';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import Modal from '../modal/Modal';
import Button from '../button/Button';
import Loader from '../loader/Loader';
import styles from './Image.module.css';

const apiService = new ApiService();

export default class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array,
    showModal: PropTypes.bool,
    largeImage: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool,
  };

  state = {
    images: [],
    showModal: false,
    largeImage: '',
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const currentName = this.props.imageName;

    if (prevName !== currentName) {
      this.setState({ images: [] });
      apiService.query = currentName;
      apiService.resetPage();
      this.getImages();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  handleLargeImage = image => {
    this.setState({ largeImage: image });
  };

  handleBtnClick = () => {
    this.getImages();
  };

  getImages = () => {
    this.setState({ loading: true });

    apiService
      .fetchImages()
      .then(({ hits }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        })),
      )
      .catch(error => {
        this.setState({ error });
      })
      .finally(this.setState({ loading: false }));
  };

  render() {
    const { showModal, loading, images, largeImage } = this.state;

    return (
      <>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt="images" />
          </Modal>
        )}

        <ul className={styles.imageGallery}>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                url={webformatURL}
                tags={tags}
                largeImage={largeImageURL}
                toggleModal={this.toggleModal}
                handleLargeImage={this.handleLargeImage}
              />
            );
          })}
        </ul>
        {images.length > 0 && !loading && (
          <Button onClick={this.handleBtnClick} />
        )}
        {loading && (
          <Loader
            type="Bars"
            color="#FF8C00"
            height={200}
            width={200}
            timeout={1000}
          />
        )}
      </>
    );
  }
}