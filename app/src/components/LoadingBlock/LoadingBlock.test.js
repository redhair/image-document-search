import React from 'react';
import ReactDOM from 'react-dom';
import LoadingBlock from '.';
import ThemeProvider from '../ThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <LoadingBlock />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <LoadingBlock quiet />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <LoadingBlock quiet small />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <LoadingBlock color="blue" />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
