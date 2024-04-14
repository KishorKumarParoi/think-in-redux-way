
import { configureStore } from '@reduxjs/toolkit';
import countersReducer from '../src/features/counters/counterSlice';
import postsReducer from '../src/features/posts/postsSlice';

const store = configureStore({
    reducer: {
        counters: countersReducer,
        posts: postsReducer,
        // videos: videosReducer,
    }
})

export default store;