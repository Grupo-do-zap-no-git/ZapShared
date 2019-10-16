import configureStore from './configureStore';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(() => {
  saveState({
    session: store.getState().session,
  });
});

export default store;
