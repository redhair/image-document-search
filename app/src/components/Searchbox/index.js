import React from 'react';
import PropTypes from 'prop-types';
import {
  InstantSearch,
  Hits,
  Configure,
  connectSearchBox
} from 'react-instantsearch-dom';
import Autocomplete from '../Autocomplete';
import Image from '../Image';

Searchbox.propTypes = {
  client: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired,
  onSuggestionCleared: PropTypes.func.isRequired,
  onSuggestionSelected: PropTypes.func.isRequired,
  onHitClick: PropTypes.func.isRequired
};

function Searchbox({
  client,
  query,
  onSuggestionCleared,
  onSuggestionSelected,
  onHitClick
}) {
  const VirtualSearchBox = connectSearchBox(() => null);

  return (
    <>
      <InstantSearch
        indexName="image-document-search"
        searchClient={client}
      >
        <Configure hitsPerPage={5} />
        <Autocomplete
          onSuggestionSelected={onSuggestionSelected}
          onSuggestionCleared={onSuggestionCleared}
        />
      </InstantSearch>
      <InstantSearch
        indexName="image-document-search"
        searchClient={client}
      >
        <VirtualSearchBox defaultRefinement={query} />
        <Hits
          hitComponent={({ hit }) => {
            return <Hit hit={hit} onHitClick={onHitClick} />;
          }}
        />
      </InstantSearch>
    </>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
  onHitClick: PropTypes.func.isRequired
};

function Hit({ hit, onHitClick }) {
  return (
    <Image
      withHover={true}
      style={{ cursor: 'pointer', margin: '0 2rem 2rem 0' }}
      onClick={() => onHitClick(hit)}
      height="150"
      src={hit.url}
      alt={hit.objectID}
    />
  );
}

export default Searchbox;
