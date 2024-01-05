import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import baseurl from "../baseUrl";
const initialState={
    loading:false,
    isAdded:false,
    locations:[],
    commingSoonFranchise:[],
    allAdminSeries:[],
    allAdminDrinks:[],

}


export const addContactUs = createAsyncThunk(
    "/contactus/add",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.post(`${baseurl}/user/contact-us/`, info,
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

    // send franchise request 
    export const sendFranchiseRequest = createAsyncThunk(
        "/franchise/request",
        async (info, { rejectWithValue, fulfillWithValue }) => {
            try {
            const { data } = await axios.post(`${baseurl}/user/franchise/request/`, info,
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

// search location
export const searchLocation = createAsyncThunk(
    "/search/location",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        console.log(info);
        try {
        const { data } = await axios.get(`${baseurl}/user/search/location/?address=${info}`,
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

// get all comming soon franchise
export const getAllCommingSoonFranchise = createAsyncThunk(
    "/comming",
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

// get all series of admin
export const getAllSeriesOfAdmin = createAsyncThunk(
    "/series",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.get(`${baseurl}/user/menu/admin/series/`,
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

    // get all drinks of admin of a series 
export const getAllDrinksOfAdmin = createAsyncThunk(
    "/drinks",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.get(`${baseurl}/user/menu/series/${info}/drinks`,
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


export const userReducer = createSlice({
    name: 'user reducer',
    initialState: initialState,
   reducers:{
    clearState:(state)=>{
        state.isAdded=false;

    }
   },
    extraReducers: (builder) => {
        builder.addCase(addContactUs.fulfilled, (state) => {
            state.loading = false;
            state.isAdded = true;

        });
        builder.addCase(addContactUs.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addContactUs.rejected, (state) => {
            state.loading = false;
            state.isAdded = false;
            
        });

        // send franchise request
        builder.addCase(sendFranchiseRequest.fulfilled, (state) => {
            state.loading = false;
            state.isAdded = true;

        });
        builder.addCase(sendFranchiseRequest.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(sendFranchiseRequest.rejected, (state) => {
            state.loading = false;
            state.isAdded = false;
            
        });

        // search location
        builder.addCase(searchLocation.fulfilled, (state,action) => {
            state.loading = false;
            state.locations = action.payload.locations;

        });
        builder.addCase(searchLocation.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(searchLocation.rejected, (state) => {
            state.loading = false;
            state.locations = [];
            
        });
        // get all comming soon
        builder.addCase(getAllCommingSoonFranchise.fulfilled, (state,action) => {
            state.loading = false;
            state.commingSoonFranchise = action.payload;

        });
        builder.addCase(getAllCommingSoonFranchise.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllCommingSoonFranchise.rejected, (state) => {
            state.loading = false;
            state.commingSoonFranchise = [];
            
        });

        // get all series of admin
        builder.addCase(getAllSeriesOfAdmin.fulfilled, (state,action) => {
            state.loading = false;
            state.allAdminSeries = action.payload.menu.series;

        });
        builder.addCase(getAllSeriesOfAdmin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllSeriesOfAdmin.rejected, (state) => {
            state.loading = false;
            state.allAdminSeries = [];
            
        });

        // get all drinks of admin of a series
        builder.addCase(getAllDrinksOfAdmin.fulfilled, (state,action) => {
            state.loading = false;
            state.allAdminDrinks = action.payload.drinks;

        });
        builder.addCase(getAllDrinksOfAdmin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllDrinksOfAdmin.rejected, (state) => {
            state.loading = false;
            state.allAdminDrinks = [];
            
        });



    },
});

export default userReducer.reducer;
export const {clearState} = userReducer.actions;