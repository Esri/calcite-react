# Contributing
Thanks for being interested in contributing to this project! Here are a few guidelines.

## Getting Started
Once you've cloned the repo, there are a few things you should know before getting started.

### Running the application

#### Before you Start
`npm install`

#### NPM tasks

##### To run `storybook`
`npm run storybook`
> Use `storybook` as the primary development/test environment.


##### To run tests with Jest
`npm test`
> Jest testing is implemented with the help of [StoryShots](https://github.com/storybooks/storybook/tree/master/addons/storyshots).


##### To run tests (and [update the snapshot](https://facebook.github.io/jest/docs/en/snapshot-testing.html#updating-snapshots))
>This should be used when you've made changes that will result in _expected_ UI changes.

`npm test -- -u`

##### To build for production
`npm run build`

## Submitting a Pull Request
Pull requests are always welcome! Often it's a good idea to open an issue to discuss your proposed changes before making a PR, but you're welcome to submit a PR without an issue - just be sure to include a good description of your changes.
