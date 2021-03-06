# Nano Wallet Desktop

An ambitious Nano wallet for desktop and web.

This is an Ember application that can build into an [Electron](https://electronjs.org/) app.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/nano-wallet-company/nano-wallet-desktop.git`
* `cd nano-wallet-desktop`
* `yarn install`

## Running / Development

* `yarn start`
* Visit the app at [http://localhost:4200](http://localhost:4200).
* Visit the tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `npx ember help generate` for more details.

### Running Tests

* `yarn test`
* `yarn test --server`

### Linting

* `yarn run lint:js`
* `yarn run lint:js --fix`

### Building

* `yarn run build` (development)
* `yarn run build --environment production` (production)

### Using Docker Compose

You can optionally develop and test using [Docker Compose](https://docs.docker.com/compose/).

* `docker-compose build`
* `docker-compose run --rm --service-ports app`

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
