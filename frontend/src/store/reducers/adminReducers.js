import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import baseurl from "../baseUrl";
const initialState={
    loading:false,
    error:"",
    allFranchises:[],
    allRequests:[],
    isDeleted:false,
    locations:[],
    isLocationAdded:false,
    isLocationDeleted:false,
    newsletters:[],
    isAllNewslettersDeleted:false,
    isFranchiseAdded:false,
    isFranchiseDeleted:false,
    commingSoon:[],
    isCoomingSoonDeleted:false,
    isCoomingSoonAdded:false,

}


// get all franchises
export const getAllFranchises = createAsyncThunk(
    "/franchises/get",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.get(`${baseurl}/admin/action/franchises/`,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data.users);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );

// get all requests
export const getAllFranchiseRequests = createAsyncThunk(
    "/requests/get",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.get(`${baseurl}/admin/franchise/requsets/`,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data.franchiseRequest);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );

    // delete request
export const deleteRequest = createAsyncThunk(
    "/request/delete",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.delete(`${baseurl}/admin/franchise/requset/${info}`,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );


    // add location
export const addLocation = createAsyncThunk(
    "/location/add",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.post(`${baseurl}/admin/location/add/`,info,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );


    // get all locations
export const getAllLocations = createAsyncThunk(
    "/locations/get",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.get(`${baseurl}/admin/locations/`,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data.locations);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );

    // delete location
export const deleteLocation = createAsyncThunk(
    "/location/delete",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.delete(`${baseurl}/admin/location/${info}`,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );


// get all newsletters

export const getAllNewsLetter = createAsyncThunk(
    "/newsletters/get",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.get(`${baseurl}/admin/newsletters/`,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data.newsLetter);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );

// delete all newsletters


export const deleteAllNewsLetter = createAsyncThunk(

    "/newsletters/delete",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.delete(`${baseurl}/admin/newsletters/`,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );


// add a franchise
export const addFranchise = createAsyncThunk(
    "/franchise/add",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.post(`${baseurl}/admin/action/franchise/add`,info,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );

// delte a franchise
export const deleteFranchise = createAsyncThunk(
    "/franchise/delete",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.delete(`${baseurl}/admin/action/franchise/${info}`,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );

    // get all comming soon
export const getAllCommingSoon = createAsyncThunk(
    "/commingSoon/get",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.get(`${baseurl}/admin/comming/`,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data.franchise);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );

    // delete all one comming soon
export const deleteOneCommingSoon = createAsyncThunk(
    "/commingSoon/delete",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.delete(`${baseurl}/admin/comming/${info}`,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );


    // add one comming soon
export const addOneCommingSoon = createAsyncThunk(
    "/commingSoon/add",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.post(`${baseurl}/admin/comming/add/`,info,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data);

        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );





export const adminReducer = createSlice({
    name: 'admin Reducer',
    initialState: initialState,
   reducers:{
    clearState:(state)=>{
        state.error="";
        state.isDeleted=false;
        state.isLocationAdded=false;
        state.isLocationDeleted=false;
        state.isAllNewslettersDeleted=false;
        state.isFranchiseAdded=false;
        state.isFranchiseDeleted=false;
        state.isCoomingSoonDeleted=false;
        state.isCoomingSoonAdded=false;
    }
   },
    extraReducers: (builder) => {
        builder.addCase(getAllFranchises.fulfilled, (state,action) => {
            state.loading = false;
            state.allFranchises = action.payload;
        });
        builder.addCase(getAllFranchises.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllFranchises.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });
// all request 
        builder.addCase(getAllFranchiseRequests.fulfilled, (state,action) => {
            state.loading = false;
            state.allRequests = action.payload;
        });
        builder.addCase(getAllFranchiseRequests.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllFranchiseRequests.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });
// delete request
        builder.addCase(deleteRequest.fulfilled, (state) => {
            state.loading = false;
            state.isDeleted = true;
        });
        builder.addCase(deleteRequest.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteRequest.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });
// add location
        builder.addCase(addLocation.fulfilled, (state) => {
            state.loading = false;
            state.isLocationAdded = true;
        });
        builder.addCase(addLocation.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addLocation.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });
// get all locations
        builder.addCase(getAllLocations.fulfilled, (state,action) => {
            state.loading = false;
            state.locations = action.payload;
        });
        builder.addCase(getAllLocations.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllLocations.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });
// delete location
        builder.addCase(deleteLocation.fulfilled, (state) => {
            state.loading = false;
            state.isLocationDeleted = true;
        });
        builder.addCase(deleteLocation.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteLocation.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });

// get all newsletters
        builder.addCase(getAllNewsLetter.fulfilled, (state,action) => {
            state.loading = false;
            state.newsletters = action.payload;
        });
        builder.addCase(getAllNewsLetter.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllNewsLetter.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });

// delete all newsletters
        builder.addCase(deleteAllNewsLetter.fulfilled, (state) => {
            state.loading = false;
            state.isAllNewslettersDeleted = true;
        });
        builder.addCase(deleteAllNewsLetter.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteAllNewsLetter.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });
        // add franchise
        builder.addCase(addFranchise.fulfilled, (state) => {
            state.loading = false;
            state.isFranchiseAdded = true;
        });
        builder.addCase(addFranchise.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addFranchise.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });

    // delete a franchise
        builder.addCase(deleteFranchise.fulfilled, (state) => {
            state.loading = false;
            state.isFranchiseDeleted = true;
        });
        builder.addCase(deleteFranchise.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteFranchise.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });    
// get all comming soon
        builder.addCase(getAllCommingSoon.fulfilled, (state,action) => {
            state.loading = false;
            state.commingSoon = action.payload;
        });
        builder.addCase(getAllCommingSoon.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllCommingSoon.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });
// delete one comming soon
        builder.addCase(deleteOneCommingSoon.fulfilled, (state) => {
            state.loading = false;
            state.isCoomingSoonDeleted = true;
        });
        builder.addCase(deleteOneCommingSoon.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteOneCommingSoon.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });

// add one comming soon
        builder.addCase(addOneCommingSoon.fulfilled, (state) => {
            state.loading = false;
            state.isCoomingSoonAdded = true;
        });
        builder.addCase(addOneCommingSoon.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addOneCommingSoon.rejected, (state,action) => {
            state.loading = false;
            state.error=action.payload.message
            
        });

    },
});

export default adminReducer.reducer;
export const {clearState} = adminReducer.actions;