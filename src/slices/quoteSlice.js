import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchRandomQuote = createAsyncThunk(
    "quote/fetchRandom", 
    async () => {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return data;
    }
);

const quoteSlice = createSlice({
    name: "quote",
    initialState: {
        quote: null,
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomQuote.pending, (state) => {
                state.status = "loading";
                
            })
    }
})