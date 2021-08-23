# Frontend Onboarding Bootcamp

## Pre-Reading Materials ( & Concepts that will be built upon)

TypeScript Handbook:

-   https://www.typescriptlang.org/docs/handbook/intro.html

Yarn 2:

-   https://yarnpkg.com/features/workspaces
-   Yarn 2 is quite different from version 1. Please familiarize yourself with the new features and capabilities

ReactJS:

-   https://reactjs.org/docs/getting-started.html

State Management via Hooks:

-   https://reactjs.org/docs/hooks-intro.html
-   Once you understand what each hook does and when to use, become familiar with how the hooks actually work, when they re-trigger and gotchas to be aware of

Thinking in Redux

-   https://redux.js.org/introduction/core-concepts

Redux Toolkit

-   https://redux-toolkit.js.org/introduction/getting-started

Thinking in GraphQL

-   https://graphql.org/learn/

Apollo GrpaphQL Client

-   https://apollographql.com/docs/react/

Next.js

-   https://nextjs.org/learn/basics/create-nextjs-app
-   What are the benefits of server-rendered pages?

CSS

-   What’s the difference between em, rem and px?
-   When to use margin vs padding?

Flexbox layouts:

-   https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Grid layouts:

-   https://css-tricks.com/snippets/css/complete-guide-grid/

CSS Modules:

-   https://css-tricks.com/css-modules-part-1-need/

Tailwind CSS:

-   https://tailwindcss.com/

## Getting started

To get started we're going to make an empty folder. Inside, create a pacakges folder, and inside tat a webapp folder. We're setting up our project to be compartmentalized from the start

```console
~$ mkdir -p bootcamp-starter/packages
```

## Yarn Setup

Set yarn to v2 and bring in plugins for extra features. These are opt-in for v2

```console
~/bootcamp-starter$ yarn set version berry
~/bootcamp-starter$ yarn init -w
~/bootcamp-starter$ yarn plugin import @yarnpkg/plugin-interactive-tools
~/bootcamp-starter$ yarn plugin import @yarnpkg/plugin-typescript
~/bootcamp-starter$ yarn plugin import @yarnpkg/plugin-workspace-tools
```

-   Set `nodeLinker: node-modules` at the top of our `.yarnrc.yml` to use the tradtitional node_modules pattern

## Next.js Setup

Set up the next.js app

```console
~/bootcamp-starter/packages$ yarn create next-app --typescript
```

## Code Quality Tooling

At this point we have a next app we can run, but let's set up our environment a bit further to make sure code quality stays high

```console
~/bootcamp-starter$ yarn add --dev eslint eslint-config-next @types/eslint
~/bootcamp-starter$ yarn add --dev stylelint stylelint-config-css-modules stylelint-config-prettier stylelint-config-standard @types/stylelint
~/bootcamp-starter$ yarn add --dev prettier @types/prettier
~/bootcamp-starter$ yarn add --dev husky lint-staged
```

Create config files for the formatters

```console
~/bootcamp-starter$ touch .eslintrc .stylelintrc.json .prettierrc.json
~/bootcamp-starter$ rm -rf packages/webapp/.eslintrc
```

```jsonc
// .prettierrc.json
{
    "printWidth": 120,
    "useTabs": false,
    "tabWidth": 4,
    "semi": true,
    "trailingComma": "es5",
    "singleQuote": true,
    "overrides": [
        {
            "files": "*.css",
            "options": {
                "tabWidth": 2
            }
        }
    ]
}
```

```js
// .stylelintrc.json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-css-modules",
  ],
  "plugins": [],
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "layer",
          "apply",
          "responsive",
          "variants",
          "screen",
        ],
      },
    ],
  },
};
```

```jsonc
// .eslintrc
{
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "next", "next/core-web-vitals"],
    "plugins": ["react"],
    "rules": {
        "no-unused-vars": ["error", { "args": "none" }],
        // React component needs display name
        "react/display-name": "off",
        // We don't need prop type validation because we have typescript
        "react/prop-types": "off",
        // Use curly braces for all JSX expressions for consistency
        "react/jsx-curly-brace-presence": [2, "always"]
    }
}
```

## VSCode Workspace Settings

Set up a place to define recommended extensions and settings

```console
~/bootstrap-starter$ mkdir .vscode && touch .vscode/extensions.json .vscode/settings.json
```

```json
// extensions.json
{
    "recommendations": [
        "apollographql.vscode-apollo",
        "arcanis.vscode-zipfs",
        "bradlc.vscode-tailwindcss",
        "clinyong.vscode-css-modules",
        "dbaeumer.vscode-eslint",
        "eamodio.gitlens",
        "esbenp.prettier-vscode",
        "stylelint.vscode-stylelint"
    ]
}
```

```json
// settings.json
{
    "search.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.DS_Store": true,
        "**/.yarn": true,
        "**/.pnp.*": true
    },
    "css.validate": false,
    "scss.validate": false,
    "less.validate": false,
    "stylelint.enable": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
    "workbench.colorCustomizations": {},
    "files.eol": "\n",
    "git.ignoreLimitWarning": true
}
```

## Git Hooks

Now we'll set up our top level scripts and commit hooks

```json
// package.json
//...
"lint-staged": {
    "*.{scss,css}": [
        "yarn run prettier",
        "yarn run stylelint-fix"
    ],
    "*.{js,json,md}": [
        "yarn run prettier"
    ],
    "*.{ts,tsx}": [
        "yarn run prettier",
        "yarn run lint-fix"
    ]
},
"scripts": {
    "build": "yarn workspaces foreach -pt run build",
    "clean": "yarn workspaces foreach -pt run clean && rimraf node_modules",
    "lint": "eslint --ext .tsx,.ts packages/ --quiet",
    "lint-fix": "eslint --fix",
    "stylelint": "stylelint",
    "stylelint-fix": "yarn run stylelint --fix",
    "prettier": "prettier --write",
    "postinstall": "husky install"
},
//...
```

Your files should now auto format on save via the vscode settings + the existence of the lint script at the top level. `lint-staged` is for running for pre-commit hooks.

The last bit to finish pre-commit set is to configure husky, which has gotten more difficult in recent months.

```console
~/bootcamp-starter$ npx husky install
~/bootcamp-starter$ touch .husky/pre-commit
```

Configure the husky pre-commit to run the lint-staged command

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-staged

```

Make sure `pre-commit` is executable

```console
~/bootcamp-starter$ chmod +x .husky/pre-commit
```

## Start Building Your Site

Now let's spin up our site!

```console
~/bootcamp-starter/packages/webapp$ yarn dev
```

The site is now up and running at http://localhost:3000

Let's set up the scaffolding for our webapp. We'll be deleting most of what's currently in `index.tsx` and starting from mostly scratch.

```tsx
import Head from 'next/head';

const Home = () => {
    return (
        <div className={''}>
            <Head>
                <title>{'Frontend Bootcamp'}</title>
                <meta name={'description'} content={'Modern web workshop for React developers'} />
                <link rel={'icon'} href={'/favicon.ico'} />
            </Head>

            <div className={'hero'}>
                <nav>
                    <div>
                        <h1>{'LaunchFlix'}</h1>
                    </div>
                </nav>
            </div>
            <main className={'content'}>
                <div className={'carousel'}>{'Items go here'}</div>
            </main>
        </div>
    );
};

export default Home;
```

## Tailwind CSS

Now let's practice with tailwind https://tailwindcss.com/docs

```console
~/bootcamp-starter/packages/webapp$ yarn add --dev tailwindcss@latest postcss@latest autoprefixer@latest
~/bootcamp-starter/packages/webapp$ npx tailwind init -p
```

Modify the newly created tailwind.config.js with these properties

```js
// tailwind.config.js
{
    // ...
    mode: 'jit',
    // purge will clean up unused styles in production builds
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ]
    // ...
}
```

In `_app.tsx` replace `import '../styles/globals.css';` with `import 'tailwindcss/tailwind.css';`. Now we're using tailwind's base stylesheet to build our site. You can also delete `styles/gobals.css` now

## GraphQL

Now let's start thinking about how to get some dynamic content into the page. We'll be using the spaceX graphql API for this project, though feel free to use another of your choice. https://api.spacex.land/graphql/

We'll organize our graphql specific code into a new package in our repo

```console
~/bootcamp-starter$ mkdir packages/graphql
~/bootcamp-starter/packages/graphql$ yarn init
~/bootcamp-starter/packages/graphql$ yarn add @apollo/client apollo-utilities next-with-apollo graphql
```

Note: you probably want to scope your package name in your `package.json` for easier importing later. e.g. `@bootcamp/graphql`.

Note: To make this project consumable, you need to configure the entry point of the package and might as well add a version as well. Add

```json
  "main": "src/index.ts",
  "version": "1.0.0",
```

to your `package.json`

Before moving on, we also must setup typescript for this new package. One of the more reusable strategies is to extend from a common root `tsconfig.json` file.

```console
~/bootcamp-starter$ mkdir config && cd config && tsc --init
```

Replace the generated tsconfig with the following

```json
// config/tsconfig.json
{
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noEmit": true,
        "noImplicitReturns": true,
        "noImplicitThis": true,
        "noUnusedLocals": true,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve"
    },
    "include": ["./packages"],
    "exclude": ["node_modules"]
}
```

```console
~/bootcamp-starter/packages/graphql$ tsc --init
```

Replace the generated `tsconfig.json` file with the following, to extend the root level config

```json
// graphql/tsconfig.json
{
    "extends": "../../config/tsconfig",
    "include": ["**/*.ts", "**/*.tsx"]
}
```

Let's write a util to initialize our apollo client

```console
~/bootcamp-starter/packages/graphql$ mkdir -p src/apollo-client src/hoc
```

```ts
// src/apollo-client/initializeApolloClient.ts
import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

interface ApolloClientOptions {
    graphqlUri: string;
    initialState: NormalizedCacheObject;
}

const initializeApolloClient = ({ graphqlUri, initialState }: ApolloClientOptions) => {
    const cache = new InMemoryCache({}).restore(initialState || {});

    return new ApolloClient({
        uri: graphqlUri,
        cache,
    });
};

export default initializeApolloClient;
```

This hoc is used to wrap next.js pages with apollo on an **opt-in** basis. If a page is not wrapped in `withApollo`, apollo will not be in scope for any components on that page.

```ts
// src/hoc/withApollo.tsx
import { ApolloProvider } from '@apollo/client';
import withApollo from 'next-with-apollo';
import React from 'react';
import { initializeApolloClient } from '../apollo-client';

export default withApollo(
    ({ initialState }) => {
        return initializeApolloClient({
            graphqlUri: 'https://api.spacex.land/graphql',
            initialState,
        });
    },
    {
        render: ({ Page, props }) => {
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} />
                </ApolloProvider>
            );
        },
    }
);
```

And make sure to export via an index file for easy consumption for other packages

```ts
// src/apollo-client/index.ts
export { default as initializeApolloClient } from './initializeApolloClient';

// src/hoc/index.ts
export { default as withApollo } from './withApollo';

//src/index.ts
export * from './apollo-client';
export * from './hoc';
```

Now let's pull it into our webapp

```console
~/bootcamp-starter/packages/webapp$ yarn add @bootcamp/graphql
```

Once we do this though, we need to tell next.js that this local module requires transpilation, since it's Typescript we're importing.

```console
~/webapp-starter/packages/webapp$ yarn add next-transpile-modules
```

```js
// webapp/next.config.js
// pass the modules you would like to see transpiled
const withTM = require('next-transpile-modules')(['@project/graphql']);

module.exports = withTM();
```

```tsx
// pages/index.tsx
import { withApollo } from '@bootcamp/graphql';
// ...
export default withApollo(Home);
```

To verify everything is working so far, we're going to temporarily import apollo into our webapp. We'll remove this after we prove out the concepts

```console
~/bootcamp-starter/packages/webapp$ yarn add @apollo/client graphql
```

Make a Carousel component that will load up past launch data via apollo

```console
~/bootcamp-starter/packages/webapp$ mkdir -p components/Carousel
~/bootcamp-starter/packages/webapp/components/Carousel$ touch Carousel.tsx index.ts
```

```tsx
// components/Carousel/Carousel.tsx
import { gql, useQuery } from '@apollo/client';
import React from 'react';

// This syntax isn't the cleanest though it will work just the
// same as adding a separate *.graphql file for this component
const pastLaunchesQuery = gql`
    query getPastLaunches($offset: Int, $limit: Int) {
        launchesPast(limit: $limit, offset: $offset) {
            id
            mission_name
            links {
                video_link
            }
        }
    }
`;

const Carousel: React.FunctionComponent = React.memo(() => {
    const { data } = useQuery(pastLaunchesQuery);

    return (
        <div className={'text-gray-100'}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
});

export default Carousel;

// components/Carousel/index.ts
export { default as Carousel } from './Carousel';
```

Now let's include that in our `index.tsx` where we should see a beautiful blob of JSON.

We _could_ stop here and start building our UI on top of this, but what are some pitfalls with the current solution? (There are at least 2)

## Setting up graphql-codegen

As part of our graphql package, we're going to utilize some tooling that will generate strongly types `use***Query` hooks in our webapp. This works by running a watch task to analyze all `*.graphql` files and any inline `gql'...'` snippets and generate a single types file that corresponds to all of our graphql entities.

We'll set all of this up in our `@bootcamp/graphql` package

```console
~/bootcamp-starter/packages/graphql$ yarn add --dev @graphql-codegen/cli @graphql-codegen/typescript-apollo-client-helpers
~/bootcamp-starter/packages/graphql$ yarn graphql-codegen init
```

This will prompt you with several questions

? **What type of application are you building?** Application built with React

? **Where is your schema?:** (path or url) https://raw.githubusercontent.com/SpaceXLand/api/master/schema.graphql

? **Where are your operations and fragments?:** ../webapp/\*_/_.graphql

? **Pick plugins:** TypeScript (required by other typescript plugins), TypeScript Operations (operations and fragments), TypeScript React Apollo (typed co
mponents and HOCs)

? **Where to write the output:** src/generated/graphql-types.tsx

? **Do you want to generate an introspection file?** Yes

? **How to name the config file?** codegen.yml

? **What script in package.json should run the codegen?** generate

Once the `codegen.yml` file is updated to read both `*.graphql` files and inline snippets, then we can generate our types. Your `codegen.yml` file ashould look something like this at this point

```yml
# codegen.yml
overwrite: true
schema: 'https://raw.githubusercontent.com/SpaceXLand/api/master/schema.graphql'
documents:
    - '../webapp/**/*.graphql'
    - '../webapp/**/!(*.d).{ts,tsx}'
generates:
    src/generated/graphql-types.tsx:
        plugins:
            - 'typescript'
            - 'typescript-operations'
            - 'typescript-react-apollo'
            - 'typescript-apollo-client-helpers'
        config:
            # This make typing nullable responses easier to reason about
            maybeValue: T | undefined
    ./graphql.schema.json:
        plugins:
            - 'introspection'
```

We'll also want to add a watch script to our package.json so we can kick it off everytime we start the webapp

```json
// packages/graphql/package.json
// ...
  "generate:watch": "yarn run generate --watch"
// ...
```

Install the codegen packages, and generate the types from the schema + all graphql queries

```console
~/bootcamp-starter/packages/graphql$ yarn install
~/bootcamp-starter/packages/graphql$ yarn run generate
```

At the bottom of `graphql-types.tsx`, you should see some new hooks that were generated via the inline graphql query. Let's re-export the generated file in our index file, and consume that in our webapp.

```ts
//packages/graphql/src/index.ts
// ...
export * from './generated/graphql-types';
// ...
```

And in our component, we now have a strongly typed hook. The name of the hook follows the pattern `useGet${query-name}Query`

```tsx
// packages/webapp/components/Carousel/Carousel.tsx
// ...
const { data } = useGetPastLaunchesQuery({
    variables: {
        offset: 0,
        limit: 10,
    },
});
// ...
```

We'll make one last change to clean this up, by moving our inline graphql query to it's own file, which has a few benefits.

-   No fighting with the linter fo unused vars
-   Codegen tool doesn't have to watch as many files
    -   As such, we should revert our change to remove `"../webapp/**/!(*.d).{ts,tsx}"` from our `codegen.yml` file

```graphql
query getPastLaunches($offset: Int, $limit: Int) {
    launchesPast(limit: $limit, offset: $offset) {
        id
        mission_name
        links {
            video_link
        }
    }
}
```

## Redux Setup

One last piece we should set up is a story for how to manage global application state. Apollo's cache will take care of remote state, but we'll need state management for application specific data (modals, active selections, etc).

Standard practice in larger scale applications are either MobX or Redux, both implementations of the Flux spec. Smaller projects may not need this level of complexity, but for the sake of completeness, lets do a basic Redux setup.

In the past, Redux was a bit tedious to set up, but the new Redux toolkit has made it quite simple now. We'll start with making a new package in our repository

```console
~/bootcamp-starter$ mkdir packages/stores
~/bootcamp-starter/packages/stores$ yarn init
~/bootcamp-starter/packages/stores$ tsc --init
~/bootcamp-starter/packages/stores$ yarn add @reduxjs/toolkit lodash-es
~/bootcamp-starter/packages/stores$ yarn add --dev @types/react-redux @types/lodash-es
~/bootcamp-starter/packages/stores$ yarn add --peer react@17 react-redux@^7.2.4
```

Update the package name in `package.json` and set `"main": "src/index.ts"`

Replace the generated `tsconfig.json` file with the following, to extend the root level config

```json
// stores/tsconfig.json
{
    "extends": "../../config/tsconfig",
    "include": ["**/*.ts", "**/*.tsx"]
}
```

We'll dive deeper into how to utilize Redux a bit later, but for now we can set up the root-reducer and the wrapper hoc for our webapp

```console
~/bootcamp-starter/packages/stores$ mkdir -p src/store src/redux-client src/hoc
```

The root reducer is the result of merging all of the discrete reducers elsewhere in the application

```console
~/bootcamp-starter/packages/stores$ mkdir -p src/store/root-reducer.ts
```

```ts
// src/store/root-reducer.ts
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    // reducers go here
});

export type IAppState = ReturnType<typeof rootReducer>;

export default rootReducer;

export const initialState: IAppState = {};
```

Next, we configure (initialize) Redux

```console
~/bootcamp-starter/packages/stores$ touch src/redux-client/useRedux.ts
```

```ts
// src/redux-client/useRedux.ts
import type { DeepPartial, EnhancedStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { merge } from 'lodash-es';
import { useMemo } from 'react';
import type { IAppState } from '../store/root-reducer';
import rootReducer, { initialState } from '../store/root-reducer';

interface ReduxClientOptions {
    preloadedState: DeepPartial<IAppState>;
}

const configureAppStore = (options?: ReduxClientOptions): EnhancedStore => {
    const { preloadedState = {} } = options || {};

    return configureStore({
        reducer: rootReducer,
        preloadedState: merge(initialState, preloadedState),
    });
};

// This piece a particularly cool way of making a singleton using a React hook.
// Convince yourself that it works :)
const useRedux = (options?: ReduxClientOptions) => {
    const reduxClient = useMemo(() => configureAppStore(options), [options]);
    return reduxClient;
};

export default useRedux;

// src/redux-client/index.ts
export { default as useRedux } from './useRedux';
```

To integrate this into our webapp, we'll write a Higher Order Component (hoc) that can be used in our (or any) webapp to connect to this particular Redux store

```console
~/bootcamp-starter/packages/stores$ touch hoc/withRedux.tsx
```

```tsx
// src/hoc/withRedux.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { useRedux } from '../redux-client';

// Exercise for the reader: make this make sense :)
export type HocWrapper<TExtraProps extends Record<string, unknown> = Record<string, unknown>> = <
    TOwnProps extends Record<string, unknown>
>(
    BaseComponent: React.ComponentType<TOwnProps & TExtraProps>
) => React.NamedExoticComponent<TOwnProps>;

const WithReduxProvider: HocWrapper = (BaseComponent) =>
    React.memo((ownProps) => {
        const store = useRedux();
        return (
            <Provider store={store}>
                <BaseComponent {...ownProps} />
            </Provider>
        );
    });

export default WithReduxProvider;

// src/hoc/index.ts
export { default as withRedux } from './withRedux';
```

Export the newly created utils for easy consumption

```ts
// src/stores/index.ts
export * from './hoc';
export * from './redux-client';
```

Back in our webapp we can import our new stores package and wrap our application with our hoc

```console
~/bootcamp-starter/packages/webapp$ yarn add @bootcamp/stores
```

```tsx
// pages/_app.tsx
import { withRedux } from '@bootcamp/stores';
// ...
export default withRedux(MyApp);
```

Spin up your webapp `yarn run dev` and see if everything looks okay

What's wrong with our setup?

The webapp doesn't know how to parse an untranspiled TSX file. In next this is easy to solve (and we've already started it in our `next.config.js` file)

```js
// webapp/next.config.js
// pass the modules you would like to see transpiled
const withTM = require('next-transpile-modules')(['@bootcamp/graphql', '@bootcamp/stores']);

module.exports = withTM();
```

`@bootcamp/stores` has a peer dependency of `react-redux`

```console
~/bootcamp-starter/packages/webapp$ yarn add react-redux
```

How about now?

Looks like we need to transpile lodash-es as well.

```js
// webapp/next.config.js
// pass the modules you would like to see transpiled
const withTM = require('next-transpile-modules')(['lodash-es', '@bootcamp/graphql', '@bootcamp/stores']);

module.exports = withTM();
```

## Start Developing

Before we wrap up this portion, let's update the `yarn dev` task in the webapp to also run our graphql watcher so we get real-time type updates

```console
~/bootcamp-starter/packages/webapp$ yarn add --dev concurrently
```

```json
// packages/webapp/package.json
// ...
  "dev": "concurrently 'yarn run generate:watch' 'next dev'"
// ...
```

At this point we have all of the tools we need to query the SpaceX API with minimal code and can build any UI we want on top of it. This current setup can serve as a jumping off point for quick POCs, hackathon projects, personal projects, etc.

At this point the exercise, you'll only get out what you put in. We'll be taking the tools that we've prepared in part 1 to build an interactive site to browse data from the SpaceX API. Feel free to use the sample repo for reference, But I encourage you to use it only if you are truly stuck. Have some fun playing around :)

## How to Make a Good React Component (According to Russell)

### The Fundamentals

_Disclaimer: These are the guidelines I follow and rules can always be broken in compelling circumstances._

-   Work your experience top down
    -   Start at the top of the DOM tree and add children components as the become necessary, never before.
-   Your render function will be called hundreds or thousands of times over the course of a session. Keep it as concise and as fast as possible
-   Memoize when it's needed, not by default. React is good at its job
-   If you consume a value as a prop, as a general rule **you should not pass that prop to a child component**. This is called prop-drilling and is a sign of poor component architechture. Consider refactoring.

### Step by Step

1. Define responsibilities and requirements of the component. This should be reasonably concise.
    - At this point, you should be able to define the props a component needs to consume. Write the interface for props first.
    - At this stage you can also write your helper functions that will be used in your component
2. Build the skeleton in the DOM, with only as many divs as you need. In the long run, this will keep your DOM tree flatter and styling more straightforward. **Do not add styles or props at this point**
3. Add basic interactivity and placeholders. Wire up your onclicks, make sure the data you need is what you expected in the DOM
4. At this point it should be very clear if your component is too complex. Refactor it now before adding styles.
    - My fuzzy rule of thumb is more than 1-2 `useEffect` or more than ~3 `useState` is a sign there's too much business logic in the component
5. Add CSS and polish the experience. In a production-quality site, this will be where you should be spending most of your time.

## Carousel Component

Requirements & Responsibilities:

-   Load a page of launches via apollo
-   Show a page of launches
-   Ability to pageNext and pagePrev via button clicks
-   Clicking on a launch card should set an active launch and open the modal

## Redux Revisited

In general our Redux pattern follows the 'duck' pattern. You can read about it [here](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/), but in short the concept is to localize all logic pertaining to a store in the same place.

We'll need to set up a store to handle modal state as well as one for launch data. This distinction is a bit arbitrary in this small example, but it illistrates how multiple stores can work together.

But first let's make sure we cover the main principles of Redux

1. **Store** - This is the source of truth of the app. Written by reducers, read from by selectors
2. **Action** - This kicks off the state update flow. A component will dispatch an action + payload, which will be reasoned about by the reducer
3. **Reducer** - When an action is dispatched, the reducer uses its content to update the state. This is the only place application state can be modified
4. **Selector** - This is how you read from application state. This is not _technically_ a part of Redux, but it offers the same protection / abstraction as a getter would in any other paradigm.
5. **Operation** - When a single action isn't enough, an operation has the ability to make async calls and chain many actions together. This is also not _technically_ part of Redux but offers a nice compositional abstraction over complex state modifications.

We've already set up the Redux scaffolding in earlier in the exercise. To leverage it, all we need to do is write a reducer & set of selectors to modify and read the store respectively.

```console
~/bootcamp-starter/packages/stores$ mkdir -p src/store/modalStore src/store/launchStore
~/bootcamp-starter/packages/stores$ touch src/store/launchStore/launchStore.selectors.ts src/store/launchStore/launchStore.reducer.ts src/store/launchStore/index.ts
~/bootcamp-starter/packages/stores$ touch src/store/modalStore/modalStore.selectors.ts src/store/modalStore/modalStore.reducer.ts src/store/modalStore/index.ts
```

```ts
// store/launchStore/launchStore.reducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LaunchStore {
    selectedLaunchId: string;
}

export const launchStoreInitialState: LaunchStore = {
    selectedLaunchId: '',
};

const launchStore = createSlice({
    name: 'launch',
    initialState: launchStoreInitialState,
    reducers: {
        setActiveLaunch: (state, action: PayloadAction<string>) => {
            state.selectedLaunchId = action.payload;
        },
        clearActiveLaunch: (state) => {
            state.selectedLaunchId = '';
        },
    },
});

export const launchStoreReducer = launchStore.reducer;
export const launchStoreActions = launchStore.actions;
```

```ts
// store/launchStore/launchStore.selectors.ts
import type { IAppState } from '../root-reducer';

export const selectChosenLaunchId = (state: IAppState): string => state.launch.selectedLaunchId;
```

```ts
// store/launchStore/index.ts
export * from './launchStore.reducer';
export * as launchStoreSelectors from './launchStore.selectors';
```

```ts
// store/modalStore/modalStore.reducer.ts
import { createSlice } from '@reduxjs/toolkit';

interface ModalStore {
    launchCardModalOpen: boolean;
}

export const modalStoreInitialState: ModalStore = {
    launchCardModalOpen: false,
};

const modalStore = createSlice({
    name: 'modal',
    initialState: modalStoreInitialState,
    reducers: {
        openLaunchCardModal: (state) => {
            state = {
                ...modalStoreInitialState,
                launchCardModalOpen: true,
            };
            return state;
        },
        closeLaunchCardModal: (state) => {
            state.launchCardModalOpen = false;
        },
    },
});

export const modalStoreReducer = modalStore.reducer;
export const modalStoreActions = modalStore.actions;
```

```ts
// store/modalStore/modalStore.selectors.ts
import type { IAppState } from '../root-reducer';

export const selectIsLaunchModalOpen = (state: IAppState): boolean => state.modal.launchCardModalOpen;
```

```ts
// store/modalStore/index.ts
export * from './modalStore.reducer';
export * as modalStoreSelectors from './modalStore.selectors';
```

Wiring this up to our store is as easy as passing the reducers and initial states

```ts
// src/store/root-reducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import { launchStoreInitialState, launchStoreReducer } from './launchStore';
import { modalStoreInitialState, modalStoreReducer } from './modalStore';

const rootReducer = combineReducers({
    launch: launchStoreReducer,
    modal: modalStoreReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;

export default rootReducer;

export const initialState: IAppState = {
    launch: launchStoreInitialState,
    modal: modalStoreInitialState,
};
```

And don't forget to export for consumption in the webapp

```ts
// src/store/index.ts
export * from './launchStore';
export * from './modalStore';
```

Feel free to add or extend to this as you see fit. This is here to get you started :)

## LaunchCard Component

Requirements & Responsibilities:

-   Load a launch by id via apollo
-   Use video link to show a thumbnail
-   Display mission name

## LaunchModal Component

Requirements & Responsibilities:

-   Load a launch with extra data by id via apollo
-   Take up the full screen when Redux says modal is open
-   Be able to close modal (via Redux)
-   Display Launch details
    -   Embedded Youtube video
    -   Mission name
    -   Mission details
    -   Mission images

## YoutubeEmbed Component

Requirements & Responsibilities:

-   Show youtube embed iframe with video_link

## ImageGallery Component

Requirements & Responsibilities:

-   Show a scrolling grid of images

## Wrap-Up

If you've gotten this far and want to go further, there's a lot of opportunity to do so. The site we've built so far is not production ready. Here are a few next steps/ideas to expand your skillset

-   Bring in some nice SVG elements and add (tasteful) hover animations
-   Add in loading/shimmer states for components
-   Make the page (and modal!) responsive for smaller screen sizes
-   Animate the side scrolling Carousel. Try doing it without a library for practice
    -   Think about how to do this while keeping the number of domNodes in the page constant
-   Add support for toggling light & dark mode
-   Extend the Carousel to work with other entities from the SpaceX API instead of just launches
-   Add touch support for side scrolling
