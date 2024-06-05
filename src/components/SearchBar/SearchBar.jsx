import css from './SearchBar.module.css';

// import library Formik
import { Formik, Form, Field } from 'formik';
// import toast library for notification when the form is empty
import toast, { Toaster } from 'react-hot-toast';
// import react icons
import { CiSearch } from 'react-icons/ci';

// initialValues
const initialValues = {
  query: '',
};

const SearchBar = ({ onSetSearchQuery }) => {
  // Callback function for Submit
  const handlerSubmit = (values, actions) => {
    if (!values.query.trim()) {
      toast('Please enter your request.');
      return;
    }
    onSetSearchQuery(values.query);
    actions.resetForm();
  };

  return (
    <header className={css.searchBar}>
      <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
        <Form className={css.searchBarForm} autoComplete="off">
          <Field
            className={css.searchBarField}
            name="query"
            type="text"
            placeholder="Search images and photos"
          />
          <button className={css.searchBarBtn} type="submit">
            <CiSearch size="22" />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
