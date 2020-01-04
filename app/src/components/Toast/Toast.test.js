import React from 'react';
import ReactDOM from 'react-dom';
import Toast from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Toast type="success">Success</Toast>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Toast type="danger">Error</Toast>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Toast type="info">Info</Toast>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Toast type="warning">Info</Toast>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Toast>Info</Toast>, div);
  ReactDOM.unmountComponentAtNode(div);
});
