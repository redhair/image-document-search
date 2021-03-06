import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Autocomplete from '.';
import { InstantSearch } from 'react-instantsearch-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const algoliasearch = require('algoliasearch');
  const client = algoliasearch(process.env.REACT_APP_ALGOLIA_KEY, process.env.REACT_APP_ALGOLIA_SEARCH_ONLY);

  ReactDOM.render(
    <InstantSearch indexName="image-document-search" searchClient={client}>
      <Autocomplete onSuggestionSelected={() => {}} onSuggestionCleared={() => {}} />
    </InstantSearch>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
