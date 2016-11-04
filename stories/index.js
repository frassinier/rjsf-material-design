import React from 'react';

import {storiesOf, action} from '@kadira/storybook';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Form from './../src/index';

const sampleNames = [
    'arrays',
    'simple',
    'widgets'
];

const stories = storiesOf('Material Design Form', module);

stories.addDecorator(story => (
    <MuiThemeProvider>
        {story()}
    </MuiThemeProvider>
));

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
