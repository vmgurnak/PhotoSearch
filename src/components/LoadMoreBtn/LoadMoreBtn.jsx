import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onSetPage }) => {
  const handleClick = () => {
    onSetPage();
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
