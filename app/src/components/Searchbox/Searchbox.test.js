import React from 'react';
import ReactDOM from 'react-dom';
import Searchbox from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const algoliasearch = require('algoliasearch');
  const client = algoliasearch(process.env.REACT_APP_ALGOLIA_KEY, process.env.REACT_APP_ALGOLIA_SEARCH_ONLY);

  ReactDOM.render(
    <Searchbox client={client} query="" onSuggestionCleared={() => {}} onSuggestionSelected={() => {}} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
