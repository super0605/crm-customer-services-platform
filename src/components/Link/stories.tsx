import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from './Link';

storiesOf('Link', module)
  .add('default', () => (
    <Link href='https://crmpro.github.io/crmpro-admin-frontend/storybook/?path=/story/relationship--relationship'>
      Help Center Editor
    </Link>
  ))
  .add('external-link', () => (
    <Link
      icon='external-link'
      href='https://crmpro.github.io/crmpro-admin-frontend/storybook/?path=/story/relationship--relationship'
      type='string'
    >
      Elasticsearch
    </Link>
  ));
