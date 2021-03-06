import React from 'react';
import ReactDOM from 'react-dom';
import LoadingBlock from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingBlock />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingBlock quiet />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingBlock quiet small />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingBlock color="blue" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
