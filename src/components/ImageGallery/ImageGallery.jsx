import css from './ImageGallery.module.css';

import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, openModal, modalData }) => {
  return (
    <div className={css.imageGalleryContainer}>
      <ul className={css.imageGalleryList}>
        {images !== null &&
          Array.isArray(images) &&
          images.map(({ id, alt_description, urls: { small, regular } }) => {
            return (
              <li className={css.imageGalleryItem} key={id}>
                <ImageCard
                  small={small}
                  regular={regular}
                  alt={alt_description}
                  openModal={openModal}
                  modalData={modalData}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
