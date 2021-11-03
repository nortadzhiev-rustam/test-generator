import { configureStore } from '@reduxjs/toolkit';
import questionTypeReducer from './questionTypeSlice';

export const store = configureStore({
  reducer: {
    questionsType: questionTypeReducer,
    
  },
});
