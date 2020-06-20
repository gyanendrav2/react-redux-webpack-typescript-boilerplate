import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer } from '../Reducers/index';

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

const Store =
  window.location.hostname === "localhost" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
    ? createStore(
        persistedReducer,
        compose(
          applyMiddleware(thunk),
          (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
      )
    : createStore(persistedReducer, compose(applyMiddleware(thunk)));

let persistor = persistStore(Store);
const dispatch = Store.dispatch;

export { Store, dispatch, persistor };
