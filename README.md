# React Full Stack App Boilerplate

This project aims to help beginners to get started on a full stack app with React, Redux, Express and MongoDB

## Getting Started

### Prerequisites

* [yarn](https://yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/)
* [node](https://nodejs.org/en/)

### Installing

```sh
yarn
cd client && yarn
```

### Running the app locally

```sh
yarn dev
cd client && yarn start
```

### Running the tests

For now, just the backend has been partially tested.

```sh
yarn test
```

### Technologies used

* [Create React App](https://github.com/facebookincubator/create-react-app).
* [Redux](https://redux.js.org/) 
* [React](https://reactjs.org/)
* [React Router](https://reacttraining.com/react-router/)
* [Bootstrap](https://getbootstrap.com/)
* [Express](https://expressjs.com/)
* [Mongoose](http://mongoosejs.com/)

## How to ...

### ... Add a flash message

```js
import { flash } from './client/src/';

flash('This is a flash message');
```

By default, it displays a Bootstrap *success* alert. But you can give a second parameter to the function to customize the alert.

```js
flash('Fatal Error', 'danger');
flash('You must be logged to acces that page', 'warning');
```

### ... Add a reducer

Create your reducer in `./client/src/reducers` then in `./client/src/index.js` import your reducer and modify this line :

```
const rootReducer = combineReducers({auth, messages, errors, /* ADD YOUR REDUCER HERE */});
```

## Authors

* [Thomas Lombart](https://github.com/thomlom)