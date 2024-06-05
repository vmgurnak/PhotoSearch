import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onSetPage }) => {
  const handleClick = () => {
    onSetPage();
    // window.scrollBy page scroll
    window.scrollBy({
      top: 600,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={css.LoadMoreBtnWrap}>
      <button className={css.loadMoreBtn} onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
