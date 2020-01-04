import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

import { useSelector, useDispatch } from 'react-redux';
import { toggleModal, setModalContent, uploadImage } from './actions';

import Container from '@material-ui/core/Container';

import Modal from './components/Modal';
import Searchbox from './components/Searchbox';
import Image from './components/Image';
import Toast from './components/Toast';

import './App.css';

const algoliasearch = require('algoliasearch');
const client = algoliasearch(
  process.env.REACT_APP_ALGOLIA_KEY,
  process.env.REACT_APP_ALGOLIA_SEARCH_ONLY
);

function App() {
  const dispatch = useDispatch();
  const toast = useSelector(state => state.toast);
  const modal = useSelector(state => state.modal);
  const [query, setQuery] = useState('');

  function onSuggestionSelected(_, { suggestion }) {
    setQuery(suggestion.text);
  }

  function onSuggestionCleared() {
    setQuery('');
  }

  return (
    <Container maxWidth="md">
      <Modal modal={modal} onClose={() => dispatch(toggleModal())} />
      {toast.shown && (
        <Toast level={toast.level}>{toast.message}</Toast>
      )}
      <h1>Image Document Search</h1>
      <Dropzone
        onDrop={acceptedFiles => {
          dispatch(uploadImage(acceptedFiles[0]));
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div className="Dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>
                Drag and drop an image or click here to upload it.
              </p>
            </div>
          </section>
        )}
      </Dropzone>

      <Searchbox
        client={client}
        query={query}
        onSuggestionSelected={onSuggestionSelected}
        onSuggestionCleared={onSuggestionCleared}
        onHitClick={hit => {
          dispatch(
            setModalContent(
              <Image src={hit.url} alt={hit.objectID} />
            )
          );
          dispatch(toggleModal());
        }}
      />
    </Container>
  );
}

export default App;
