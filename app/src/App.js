import React, { useState } from 'react';
import Dropzone from 'react-dropzone'
import {
  InstantSearch,
  Hits,
  Configure,
  connectSearchBox,
} from 'react-instantsearch-dom';
import Modal from 'react-responsive-modal';
import Container from '@material-ui/core/Container';
import Autocomplete from './components/Autocomplete';
import Image from './components/Image';
import LoadingBlock from './components/LoadingBlock'
import * as s3 from './api/s3.js'
import { createImage } from './api/images.js';
import './App.css';

const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.REACT_APP_ALGOLIA_KEY, process.env.REACT_APP_ALGOLIA_SEARCH_ONLY);
const AutocompleteSearchBox = connectSearchBox(() => null);

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  function onSuggestionSelected(_, { suggestion }) {
    setQuery(suggestion.text);
  };

  function onSuggestionCleared() {
    setQuery('');
  };

  function Hit(props) {
    return <Image withHover={true} style={{ cursor: 'pointer', margin: '0 2rem 2rem 0' }} onClick={() => {
      setModalContent(<Image src={props.hit.url} alt={props.hit.url} />);
      setModalOpen(true);
    }} height="150" src={props.hit.url} alt={props.hit.url} />
  }

  return (
    <Container maxWidth="md">
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} center styles={{
        overlay: {
          backdropFilter: 'blur(20px)',
          background: 'rgba(0, 0, 0, 0.6)'
        },
        modal: {
          backgroundColor: 'white',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '800px',
          width: '100%',
          padding: '50px'
        }
      }}>
        {modalContent}
      </Modal>
      <h1>Image Document Search</h1>
      <InstantSearch indexName="image-document-search" searchClient={client}>
        <Configure hitsPerPage={5} />
        <Autocomplete
          onSuggestionSelected={onSuggestionSelected}
          onSuggestionCleared={onSuggestionCleared}
        />
      </InstantSearch>
      <InstantSearch indexName="image-document-search" searchClient={client}>
        <AutocompleteSearchBox defaultRefinement={query} />
        {loading ? (
          <LoadingBlock />
        ) : (
          <Dropzone onDrop={acceptedFiles => {
            setLoading(true);
            s3.uploadImage(acceptedFiles[0])
              .then(uploaded => {
                return createImage(uploaded)
                  .then(console.log)
                  .catch(console.error)
                  .finally(() => {
                    setLoading(false);
                  });
              })
              .catch(console.error)
          }}>
            {({ getRootProps, getInputProps }) => (
              <section className="Dropzone">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
        )}
        
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </Container>
  );
}



export default App;
