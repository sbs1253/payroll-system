import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  fetchUserDataFirebase,
  addCorrectionRequestFirebase,
  fetchCorrectionRequestFirebase,
  deleteCorrectionRequestFirebase,
  addTaskFirebase,
  fetchTasksFirebase,
  deleteTaskFirebase,
  updateTaskFirebase,
} from './userApi';
import app from '../../firebase';

export const fetchLoginThunk = createAsyncThunk('user/fetchLogin', async ({ email, password }, { rejectWithValue }) => {
  try {
    // 파이어베이스에 로그인인증 받기
    const auth = getAuth(app);
    const userAuth = await signInWithEmailAndPassword(auth, email, password);

    // 로그인한 유저 데이터 가져오기
    const userData = await fetchUserDataFirebase(userAuth.user.uid);

    // 정정 신청 데이터 가져오기
    const correctionRequests = await fetchCorrectionRequestFirebase(userAuth.user.uid);

    // 유저 할일 가져오기
    const tasks = await fetchTasksFirebase(userAuth.user.uid);
    return { ...userData, uid: userAuth.user.uid, correctionRequests, tasks };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addCorrectionRequestThunk = createAsyncThunk(
  'user/addCorrectionRequest',
  async (data, { getState, rejectWithValue }) => {
    // getState로 현재 State 데이터 가져오기
    try {
      const { user } = getState();
      // 파이어 베이스에서 정정 신청 추가하기
      await addCorrectionRequestFirebase(user.data.uid, data);

      // 정정 신청 데이터 가져오기
      return await fetchCorrectionRequestFirebase(user.data.uid);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCorrectionRequestThunk = createAsyncThunk(
  'user/deleteCorrectionRequest',
  async (id, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      // 파이어 베이스에서 해당 정정 신청 삭제하기
      await deleteCorrectionRequestFirebase(user.data.uid, id);

      // 정정 신청 데이터 가져오기
      return await fetchCorrectionRequestFirebase(user.data.uid);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTaskThunk = createAsyncThunk('user/addTask', async (data, { getState, rejectWithValue }) => {
  try {
    const { user } = getState();
    // 파이어베이스에 일정 추가하기
    await addTaskFirebase(user.data.uid, data);

    // 일정 데이터 가져오기
    return await fetchTasksFirebase(user.data.uid);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteTaskThunk = createAsyncThunk('user/deleteTask', async (id, { getState, rejectWithValue }) => {
  try {
    const { user } = getState();
    // 파이어베이스에서 해당 일정 삭제하기
    await deleteTaskFirebase(user.data.uid, id);

    // 일정 데이터 가져오기
    return await fetchTasksFirebase(user.data.uid);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateTaskThunk = createAsyncThunk(
  'user/updateTask',
  async ({ taskId, data }, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      // 파이어베이스에서 해당 일정 업데이트하기
      await updateTaskFirebase(user.data.uid, taskId, data);

      // 일정 데이터 가져오기
      return await fetchTasksFirebase(user.data.uid);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
