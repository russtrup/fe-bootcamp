# Frontend Bootcamp Pt 2

In part 1, we set up a starter webapp running React & Redux on top of next.js and using the apollo client to fetch data. We also configured TailwindCSS for quick and easy styling and code formatters / linters to keep our code clean.

At this point the exercise, you'll only get out what you put in. We'll be taking the tools that we've prepared in part 1 to build an interactive site to browse data from the SpaceX API.

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

We've already set up the Redux scaffolding in part 1. To leverage it, all we need to do is write a reducer & set of selectors to modify and read the store respectively.

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
