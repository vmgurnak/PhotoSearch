import './App.css';

import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// import function request from api https://api.unsplash.com
import { requestImageByQuery } from './services/api';

// import components
import SearchBar from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {
  // states
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [isLoadMoreBtn, setIsLoadMoreBtn] = useState(false);
  const [isImages, setIsImages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  let perPage = 20;

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }

    async function dataByQuery() {
      try {
        setIsError(false);
        setIsLoading(true);
        setIsLoadMoreBtn(false);
        const data = await requestImageByQuery(
          searchQuery,
          currentPage,
          perPage
        );
        if (data.results.length === 0) {
          toast(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          setImages([]);
          setIsImages(false);

          return;
        } else {
          setImages(prevImages => {
            return [...prevImages, ...data.results];
          });
          setIsImages(true);
          setIsLoadMoreBtn(
            data.total_pages && data.total_pages !== currentPage
          );
        }
      } catch (err) {
        setIsImages(false);
        setImages([]);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    dataByQuery();
  }, [searchQuery, currentPage, perPage]);

  useEffect(() => {
    window.scrollBy(0, 300);
  }, [currentPage]);

  // callback function for SearchQuery
  const onSetSearchQuery = query => {
    if (query === searchQuery) {
      return;
    }
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
  };

  // callback function for SetPage
  const onSetPage = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  // callback function for openModal
  const openModal = () => {
    setModalIsOpen(true);
  };

  const modalData = (img, alt) => {
    setModalImg(img);
    setModalAlt(alt);
  };

  // callback function for closeModal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />

      <section className="section">
        {isError && <ErrorMessage />}

        {isImages && (
          <ImageGallery
            images={images}
            openModal={openModal}
            modalData={modalData}
          />
        )}

        {isLoading && <Loader />}

        {isLoadMoreBtn && <LoadMoreBtn onSetPage={onSetPage} />}
      </section>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(157, 222, 255, 0.9)',
            color: '#000',
          },
        }}
      />

      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalImg={modalImg}
        alt={modalAlt}
      />
    </div>
  );
};

export default App;
