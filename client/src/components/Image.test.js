import React from 'react';
import { render } from '@testing-library/react';
import Image from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Image src="" alt="" />
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Image src="test.jpg" alt="Test" />
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Image src="test.jpg" alt="Test" withHover={true} />
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});