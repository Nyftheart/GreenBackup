// crée la sate global
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// importe tout les reducers
import reducers from '../reducers';
import {AsyncStorage} from 'react-native';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {persistStore, persistReducer} from 'redux-persist';

const persisConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};
const pReducer = persistReducer(persisConfig, reducers);

export const store = createStore(pReducer, applyMiddleware(logger, thunk));
export const persistor = persistStore(store, null);
