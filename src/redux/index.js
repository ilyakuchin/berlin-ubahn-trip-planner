import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store =
  process.env.REACT_APP_MODE === 'dev'
    ? createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : createStore(rootReducer);

export default store;
