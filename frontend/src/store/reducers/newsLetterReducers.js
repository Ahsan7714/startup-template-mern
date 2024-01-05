import axios from 'axios';
import baseurl from "../baseUrl";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addNewsLetter = createAsyncThunk(
  "/newsletter/add",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(`${baseurl}/user/newsletter/add`, info);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllNewsLetter = createAsyncThunk(
  "/newsletters",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${baseurl}/admin/newsletters`);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteAllNewsLetter = createAsyncThunk(
  "/newsletters",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.delete(`${baseurl}/admin/newsletters`);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const newsLetterReducer = createSlice({
  name: 'newsletter',
  initialState: {
    newsletterlist: [],
  },
  reducers: {
    addEmailToNewsletter: (state, action) => {
      state.newsletterlist.push(action.payload);
    },
    setAllEmailsInNewsletter: (state, action) => {
      state.newsletterlist = action.payload;
    },
    clearAllEmailsInNewsletter: (state) => {
      state.newsletterlist = [];
    },
  },
  // extraReducers: {
  //   [getAllNewsLetter.fulfilled]: (state, {
  //     payload
  // }) => {
  //     state.newsletterlist = payload.newsletterlist
  // },
  // },
});

export default newsLetterReducer.reducer