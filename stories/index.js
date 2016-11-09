import React from 'react';

import { storiesOf, action } from '@kadira/storybook';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Form from './../src/index';

const stories = storiesOf('Material Design Form', module);

// stories.addDecorator(muiTheme());
stories.addDecorator(story => (
	<MuiThemeProvider>
		{story()}
	</MuiThemeProvider>
));

const capitalizeFirstLetter =
	(string) => string.charAt(0).toUpperCase() + string.slice(1);

const sampleFilenames = require.context('./samples', true, /.js$/);

const sampleFilenameRegex = /^.\/(.*).js$/;

sampleFilenames.keys().forEach(
	(filename) => {
		const sampleNameMatches = filename.match(sampleFilenameRegex);
		const sampleName = sampleNameMatches[sampleNameMatches.length - 1];
		const sampleContent = sampleFilenames(filename);
		stories.add(capitalizeFirstLetter(sampleName), () => (
			<Form
				{...sampleContent}
				onSubmit={action('Submit')}
			/>
		));
	});
