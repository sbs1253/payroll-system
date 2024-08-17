import { createSlice } from '@reduxjs/toolkit';
import {
  fetchLoginThunk,
  addCorrectionRequestThunk,
  deleteCorrectionRequestThunk,
  addTaskThunk,
  deleteTaskThunk,
  updateTaskThunk,
} from './userThunks';

let initialState = {
  data: {},
  status: '',
  isLogin: false,
  error: null,
  showSuccessBox: false,
};

const handlePending = (state) => {
  state.status = 'loading';
};

const handleFulfilled = (state, action, key) => {
  state.status = 'succeeded';
  if (key) {
    state.data[key] = action.payload;
  } else {
    state.data = action.payload;
  }
};

const handleRejected = (state, action) => {
  state.status = 'failed';
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: () => initialState,
    setShowSuccessBox: (state, action) => {
      state.showSuccessBox = action.payload;
    },
    setShowErrorBox: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginThunk.pending, handlePending)
      .addCase(fetchLoginThunk.fulfilled, (state, action) => {
        handleFulfilled(state, action);
        state.isLogin = true;
      })
      .addCase(fetchLoginThunk.rejected, handleRejected)

      .addCase(addCorrectionRequestThunk.pending, handlePending)
      .addCase(addCorrectionRequestThunk.fulfilled, (state, action) => {
        handleFulfilled(state, action, 'correctionRequests');
        state.showSuccessBox = true;
      })
      .addCase(addCorrectionRequestThunk.rejected, handleRejected)

      .addCase(deleteCorrectionRequestThunk.pending, handlePending)
      .addCase(deleteCorrectionRequestThunk.fulfilled, (state, action) => {
        handleFulfilled(state, action, 'correctionRequests');
        state.showSuccessBox = true;
      })
      .addCase(deleteCorrectionRequestThunk.rejected, handleRejected)

      .addCase(addTaskThunk.pending, handlePending)
      .addCase(addTaskThunk.fulfilled, (state, action) => handleFulfilled(state, action, 'tasks'))
      .addCase(addTaskThunk.rejected, handleRejected)

      .addCase(deleteTaskThunk.pending, handlePending)
      .addCase(deleteTaskThunk.fulfilled, (state, action) => handleFulfilled(state, action, 'tasks'))
      .addCase(deleteTaskThunk.rejected, handleRejected)

      .addCase(updateTaskThunk.pending, handlePending)
      .addCase(updateTaskThunk.fulfilled, (state, action) => handleFulfilled(state, action, 'tasks'))
      .addCase(updateTaskThunk.rejected, handleRejected);
  },
});
export const { clearUser, setShowSuccessBox, setShowErrorBox } = userSlice.actions;
export default userSlice.reducer;
