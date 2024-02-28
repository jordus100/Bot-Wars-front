// store.js
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // Use sessionStorage

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

// Configuration for redux-persist using sessionStorage
const persistConfig = {
  key: 'root',
  storage, // Use sessionStorage
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;
