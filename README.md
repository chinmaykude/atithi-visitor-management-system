# Atithi- Visitor Management System
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HitCount](http://hits.dwyl.com/chinmaykude/chinmaykude/atithi-visitor-management-system.svg)](http://hits.dwyl.com/chinmaykude/chinmaykude/atithi-visitor-management-system)

## Smoothen your guest’s arrival through digitized check in.

https://atithi-visitor-management-system.now.sh/

### Atithi Landing Page
![Atithi Landing Page](https://user-images.githubusercontent.com/23414927/84551828-6dc4c600-ad2c-11ea-8158-515373c7cdc3.png)

### Check-in Check-out Main Page
![Check-in Check-out Main Page](https://user-images.githubusercontent.com/23414927/84552084-3b679880-ad2d-11ea-9b85-28dea5c5712f.png)

### Visit Details Page
![Visit Details Page](https://user-images.githubusercontent.com/23414927/84552112-5508e000-ad2d-11ea-9c55-373bee90b757.png)

### Admin Dashboard
![Admin Dashboard](https://user-images.githubusercontent.com/23414927/84552151-6ce06400-ad2d-11ea-9a41-83592fcc4336.png)



<br />
<hr />

# React Project Template

## Folder structure:

```
├── /build/                     # compiled output
├── /docs/                      # Documentation files
├── /node_modules/              # 3rd party lib
├── /public/                    # Static files 
├── /src/                       # The source code of the application
├───── /components/            # React components
├──────├──────/admin           # dashboard, admin
├──────├──────/common          # shared components
├──────├──────/icons           # icons
├──────├──────/news            # news specific components
├──────├──────/static          # static page
├────── redux/                 # redux (Seperate into sub folders based on functions as well as complexity rises)
├──────├──────/actions         # action types, action creators
├──────├──────/reducers        # reducers
├──────├──────store.js         # store.js
├────── /utils/                # server schema and data models
├────── /routes/               # Routes/Page files
├────── /clientScript.js       # Client-side startup script
├────── /config.js             # application settings
├──────  ...                   
├── /test/                     # Unit tests
├── package.json                
└── yarn.lock          
```

## Instructions

1. Install the necessary dependencies.

```
npm install
```

2. To start the development server, execute the following command.

```
npm start
```

3. To start the cypress test, execute the following command.

```
npm test
```

4. To start the production build, execute the following command.

```
npm run build
```

## Dependencies

- [Axios](https://github.com/axios/axios)
- [PropTypes](https://github.com/facebook/prop-types)
- [React Redux](https://github.com/reduxjs/react-redux)
- [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)

## Developer Dependecies

- [Cypress](https://github.com/cypress-io/cypress)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://github.com/prettier/prettier)
- [ESLint](https://eslint.org/)
- [ESLint Airbnb Config](https://github.com/airbnb/javascript)
- [ESLint Prettier Config](https://github.com/prettier/eslint-config-prettier#readme)
- [ESLint Import Plugin](https://github.com/benmosher/eslint-plugin-import)
- [ESLint JSX a11y Plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y#readme)
- [ESLint Prettier Plugin](https://github.com/prettier/eslint-plugin-prettier#readme)
- [ESLint React Plugin](https://github.com/yannickcr/eslint-plugin-react)
