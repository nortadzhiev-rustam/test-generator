import { configureStore } from '@reduxjs/toolkit';
import questionTypeReducer from './questionTypeSlice';
import userReducer from './userSlice';
export const store = configureStore({
  reducer: {
    questionsType: questionTypeReducer,
    user: userReducer,
    
  },
});
