import css from './ImageCard.module.css';

const ImageCard = ({ small, regular, alt, openModal, modalData }) => {
  const handleClick = () => {
    openModal();
    modalData(regular, alt);
  };
  return (
    <div className={css.ImageCardWrap}>
      <img
        onClick={handleClick}
        className={css.ImageCardImg}
        src={small}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;
