# Contributing
Thanks for being interested in this project! Here are a few guidelines.

## Getting Started
To get started, go ahead and fork this repo. Once you've done that, there are a few things you should know before getting started.

### Before you Start
`npm install`

### NPM tasks

#### To run `storybook`
`npm run storybook`
> Use `storybook` as the primary development/test environment.


#### To run tests with Jest
`npm test`
> Jest testing is implemented with the help of [StoryShots](https://github.com/storybooks/storybook/tree/master/addons/storyshots).


#### To run tests (and [update the snapshot](https://facebook.github.io/jest/docs/en/snapshot-testing.html#updating-snapshots))
>This should be used when you've made changes that will result in _expected_ UI changes.

`npm test -- -u`

#### To build for production
`npm run build`

## Submitting a Pull Request
Once you're ready to submit your changes, submit a pull request **into the `develop` branch**. Often it's a good idea to open an issue to discuss your proposed changes before making a PR, but you're welcome to submit a PR without an issue - just be sure to include a good description of your changes.
