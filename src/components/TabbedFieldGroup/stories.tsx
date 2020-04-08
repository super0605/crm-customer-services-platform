import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import TabbedFieldGroup from './TabbedFieldGroup';

import brand1 from '../../assets/brands/brand1.png';
import brand2 from '../../assets/brands/brand2.png';
import brand3 from '../../assets/brands/brand3.png';
import brand4 from '../../assets/brands/brand4.png';

const tabsThreeOrLess = [
  {
    iconUrn: brand1,
    id: 'brand1',
    title: 'Brand 1'
  },
  {
    iconUrn: brand2,
    id: 'brand2',
    title: 'Brand 2'
  },
  {
    iconUrn: brand3,
    id: 'brand3',
    title: 'Brand 3'
  }
];
const tabsMoreThanTree = [
  {
    iconUrn: brand1,
    id: 'brand1',
    title: 'Brand 1'
  },
  {
    iconUrn: brand2,
    id: 'brand2',
    title: 'CRMPro premium'
  },
  {
    iconUrn: brand3,
    id: 'brand3',
    title: 'Brand 3'
  },
  {
    iconUrn: brand4,
    id: 'brand4',
    title: 'Really long brand title'
  }
];

const elements = [
  {
    type: 'vertical_group',
    elements: [
      {
        type: 'field',
        title: 'Default email account',
        field: {
          type: 'input',
          id: 'brand1_default_email_account'
        }
      }
    ]
  },
  {
    type: 'vertical_group',
    elements: [
      {
        type: 'field',
        title: 'Default email account',
        field: {
          type: 'input',
          id: 'brand2_default_email_account'
        }
      }
    ]
  },
  {
    type: 'vertical_group',
    elements: [
      {
        type: 'field',
        title: 'Default email account',
        field: {
          type: 'input',
          id: 'brand3_default_email_account'
        }
      }
    ]
  },
  {
    type: 'vertical_group',
    elements: [
      {
        type: 'field',
        title: 'Default email account',
        field: {
          type: 'input',
          id: 'brand4_default_email_account'
        }
      }
    ]
  }
];

const multipleElements = [
  {
    type: 'vertical_group',
    elements: [
      {
        type: 'field',
        title: 'Default email account',
        field: {
          type: 'input',
          id: 'brand1_default_email_account'
        }
      },
      {
        type: 'field',
        title: 'Ticket Account',
        field: {
          type: 'input',
          id: 'brand1_account_used_by_the_ticket'
        }
      },
      {
        type: 'field',
        title: 'This option exists only at first brand',
        field: {
          type: 'input',
          id: 'brand1_new_option_field'
        }
      }
    ]
  },
  {
    type: 'vertical_group',
    elements: [
      {
        type: 'field',
        title: 'Default email account',
        field: {
          type: 'input',
          id: 'brand2_default_email_account'
        }
      },
      {
        type: 'field',
        title: 'Ticket Account',
        field: {
          type: 'input',
          id: 'brand2_account_used_by_the_ticket'
        }
      }
    ]
  },
  {
    type: 'vertical_group',
    elements: [
      {
        type: 'field',
        title: 'Default email account',
        field: {
          type: 'input',
          id: 'brand3_default_email_account'
        }
      },
      {
        type: 'field',
        title: 'Ticket Account',
        field: {
          type: 'input',
          id: 'brand3_account_used_by_the_ticket'
        }
      }
    ]
  }
];

const initialValues = {
  brand1_default_email_account: 'support@brand1.crmpro.com',
  brand2_default_email_account: 'support@brand2.crmpro.com',
  brand3_default_email_account: 'support@brand3.crmpro.com',
  brand4_default_email_account: 'support@brand4.crmpro.com'
};

storiesOf('Tabbed Field Group', module)
  .add('Three brands or less', () => (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <TabbedFieldGroup
        allowExpanded={true}
        elements={elements}
        handleChange={action('changed')}
        initialValues={initialValues}
        tabs={tabsThreeOrLess}
        title='Brand'
      />
    </Formik>
  ))
  .add('Initially expanded', () => (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <TabbedFieldGroup
        allowExpanded={true}
        initialExpanded={true}
        elements={elements}
        handleChange={action('changed')}
        initialValues={initialValues}
        tabs={tabsThreeOrLess}
        title='Brand'
      />
    </Formik>
  ))
  .add('More than three brands', () => (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <TabbedFieldGroup
        allowExpanded={true}
        elements={elements}
        handleChange={action('changed')}
        initialValues={initialValues}
        tabs={tabsMoreThanTree}
        title='Brand'
      />
    </Formik>
  ))
  .add('Several settings fields', () => (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <TabbedFieldGroup
        allowExpanded={true}
        elements={multipleElements}
        handleChange={action('changed')}
        initialValues={initialValues}
        tabs={tabsThreeOrLess}
        title='Brand'
      />
    </Formik>
  ));
