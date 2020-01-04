import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const modal = {
    open: false,
    content: undefined
  };

  ReactDOM.render(<Modal modal={modal} onClose={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const modal = {
    open: true,
    content: undefined
  };

  window.scroll = () => {};

  ReactDOM.render(<Modal modal={modal} onClose={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
