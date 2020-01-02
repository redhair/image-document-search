import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingBlock from '.';

storiesOf('Primitives|LoadingBlock', module)
  .add('with message', () => {
    return <LoadingBlock />;
  })
  .add('without message', () => {
    return <LoadingBlock quiet />;
  })
  .add('with different color', () => {
    return <LoadingBlock color="blue" />;
  })
  .add('small', () => {
    return <LoadingBlock quiet small />;
  });
