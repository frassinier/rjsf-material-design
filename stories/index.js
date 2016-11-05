import React from 'react';

import {storiesOf, action} from '@kadira/storybook';

import {muiTheme} from 'storybook-addon-material-ui';

import Form from './../src/index';

const stories = storiesOf('Material Design Form', module);

stories.addDecorator(muiTheme());

const capitalizeFirstLetter =
    (string) => string.charAt(0).toUpperCase() + string.slice(1);

const sampleFilenames = require.context('./samples', true, /.js$/);

const regex = /^.\/(.*).js$/;
sampleFilenames.keys().forEach(
    (filename) => {
        const sampleName = filename.match(regex)[1];
        const sampleContent = sampleFilenames(filename);
        stories.add(capitalizeFirstLetter(sampleName), () => (
            <Form
                {...sampleContent}
                onSubmit={action('Submit')}
            />
        ));
    });
