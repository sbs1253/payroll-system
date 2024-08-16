import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import userSlice from './reducer/userSlice';

// persist 설정
const persistConfig = {
  key: 'root',
  storage: storageSession, // 세션 스토리지를 사용하여 상태 저장
  whitelist: ['user'], // 'user' 슬라이스만 persist 하도록 설정
};

const rootReducer = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// store 설정
let store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist와의 호환성을 위해 필요
      // https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using 참고
    }),
});

export default store;
