import React from 'react';

import {storiesOf, action} from '@kadira/storybook';

import {muiTheme} from 'storybook-addon-material-ui';

import Form from './../src/index';

const sampleNames = [
    'arrays',
    'simple',
    'widgets'
];

const stories = storiesOf('Material Design Form', module);

stories.addDecorator(muiTheme());

const capitalizeFirstLetter =
    (string) => string.charAt(0).toUpperCase() + string.slice(1);

sampleNames.forEach(sampleName => {
    const sample = require(`./samples/${sampleName}`);
    stories.add(capitalizeFirstLetter(sampleName), () => (
        <Form
            {...sample}
            onSubmit={action('Submit')}
        />
    ));
});
